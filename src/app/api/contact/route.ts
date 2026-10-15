import { NextResponse } from 'next/server';
import { ENQUIRY_LIMITS, validateEnquiry } from '@/lib/enquiry';

/**
 * Enquiry delivery. Configure in Vercel → Settings → Environment Variables (see .env.example):
 *  - RESEND_API_KEY + LEAD_FROM_EMAIL   email each enquiry through Resend
 *  - LEAD_TO_EMAIL                      recipient(s), comma-separated (default enquiry@medregbiotox.com)
 *  - LEAD_WEBHOOK_URL                   optional JSON POST of every enquiry (Google Sheets, CRM, Slack…)
 * With nothing configured, production answers 503 and the form falls back to the visitor's email app,
 * so an enquiry is never shown as sent when it was not.
 */

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

// Best-effort per-instance throttle; serverless instances do not share memory.
const recent = new Map<string, number[]>();
function throttled(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > 5;
}

async function sendResend(subject: string, fields: [string, string][], replyTo: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  const to = (process.env.LEAD_TO_EMAIL || 'enquiry@medregbiotox.com').split(',').map((t) => t.trim()).filter(Boolean);
  const rows = fields
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v || '—')}</td></tr>`)
    .join('');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || 'BIOTOX Website <onboarding@resend.dev>',
      to,
      reply_to: replyTo,
      subject,
      html: `<h2 style="font-family:sans-serif">${escapeHtml(subject)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  return true;
}

async function sendWebhook(subject: string, fields: [string, string][]) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return null;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify({ subject, ...Object.fromEntries(fields), submittedAt: new Date().toISOString(), source: 'medregbiotox.com' }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

const MAX_BODY_BYTES = 16 * 1024;
const MIN_FILL_MS = 3000;
const invalid = (status: number) => NextResponse.json({ success: false, message: 'Invalid request.' }, { status });
const fakeSuccess = () => NextResponse.json({ success: true, message: 'Thank you! We have received your enquiry.' });

/** Browsers always send Origin on a cross-site POST; only our own pages may submit (blocks other sites posting spam). */
function sameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true; // server-to-server tools send none; the other checks still apply
  try {
    return new URL(origin).host === (request.headers.get('x-forwarded-host') || request.headers.get('host'));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return invalid(403);
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) return invalid(415);
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) return invalid(413);

  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return invalid(413);
    data = JSON.parse(raw);
  } catch {
    return invalid(400);
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return invalid(400);

  try {
    // Bot traps, answered with a fake success so bots learn nothing:
    // a hidden "website" field real visitors never fill, and forms submitted faster than a person can type.
    if (data.website) return fakeSuccess();
    if (typeof data.elapsedMs === 'number' && data.elapsedMs < MIN_FILL_MS) return fakeSuccess();

    // Only plain strings count; anything else (objects, numbers) is treated as missing.
    // Plain strings only, control characters removed (newlines kept in the message), trimmed and length-capped.
    const str = (k: keyof typeof ENQUIRY_LIMITS) => {
      if (typeof data[k] !== 'string') return '';
      const v = (data[k] as string).replace(k === 'message' ? /[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, ' ');
      return v.trim().slice(0, ENQUIRY_LIMITS[k]);
    };
    const fullName = str('fullName');
    const emailAddress = str('emailAddress');
    const phoneNumber = str('phoneNumber');
    const companyName = str('companyName');
    const serviceRequired = str('serviceRequired');
    const message = str('message');

    const problem = validateEnquiry({ fullName, emailAddress, phoneNumber, serviceRequired, message });
    if (problem) {
      return NextResponse.json({ success: false, message: problem.message, field: problem.field }, { status: 400 });
    }
    if (throttled(request)) {
      return NextResponse.json({ success: false, message: 'Too many enquiries from this connection. Please email us directly.' }, { status: 429 });
    }

    const subject = `New enquiry: ${serviceRequired.slice(0, 80)} (${fullName.slice(0, 80)})`;
    const fields: [string, string][] = [
      ['Full name', fullName],
      ['Email', emailAddress],
      ['Phone', phoneNumber],
      ['Company', companyName],
      ['Service required', serviceRequired],
      ['Message', message],
    ];

    const results = await Promise.allSettled([sendResend(subject, fields, emailAddress), sendWebhook(subject, fields)]);
    results.forEach((r) => r.status === 'rejected' && console.error('Enquiry delivery failed:', r.reason));
    const delivered = results.some((r) => r.status === 'fulfilled' && r.value === true);

    if (!delivered && process.env.NODE_ENV !== 'production') {
      console.info('No enquiry delivery configured (dev). Enquiry received:', Object.fromEntries(fields));
    } else if (!delivered) {
      return NextResponse.json(
        { success: false, message: 'We could not send your enquiry right now. Please email or call us directly.' },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We have received your enquiry and our toxicology team will reply within 2 hours.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong processing your request. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
