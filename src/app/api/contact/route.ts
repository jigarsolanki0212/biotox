import { NextResponse } from 'next/server';

/**
 * Enquiry delivery. Configure in Vercel → Settings → Environment Variables (see .env.example):
 *  - RESEND_API_KEY + LEAD_FROM_EMAIL   email each enquiry through Resend
 *  - LEAD_TO_EMAIL                      recipient(s), comma-separated (default enquiry@medregbiotox.com)
 *  - LEAD_WEBHOOK_URL                   optional JSON POST of every enquiry (Google Sheets, CRM, Slack…)
 * With nothing configured, production answers 503 and the form falls back to the visitor's email app,
 * so an enquiry is never shown as sent when it was not.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

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
    body: JSON.stringify({ subject, ...Object.fromEntries(fields), submittedAt: new Date().toISOString(), source: 'medregbiotox.com' }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, emailAddress, phoneNumber, serviceRequired, message, companyName, website } = data;

    // Honeypot: real visitors never fill the hidden "website" field.
    if (website) {
      return NextResponse.json({ success: true, message: 'Thank you! We have received your enquiry.' });
    }

    if (!fullName || !emailAddress || !phoneNumber || !serviceRequired || !message) {
      return NextResponse.json({ success: false, message: 'Please fill in all required fields.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(emailAddress)) {
      return NextResponse.json({ success: false, message: 'Please provide a valid email address.' }, { status: 400 });
    }
    if (throttled(request)) {
      return NextResponse.json({ success: false, message: 'Too many enquiries from this connection. Please email us directly.' }, { status: 429 });
    }

    const subject = `New enquiry: ${String(serviceRequired).slice(0, 80)} (${String(fullName).slice(0, 80)})`;
    const fields: [string, string][] = [
      ['Full name', String(fullName).slice(0, 200)],
      ['Email', String(emailAddress).slice(0, 200)],
      ['Phone', String(phoneNumber).slice(0, 40)],
      ['Company', String(companyName || '').slice(0, 200)],
      ['Service required', String(serviceRequired).slice(0, 200)],
      ['Message', String(message).slice(0, 5000)],
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
