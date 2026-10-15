import { siteConfig } from '@/lib/seo-config';
import { services } from '@/lib/data';

/**
 * "Thank you for your enquiry" confirmation sent to the visitor.
 *
 * Deliverability: table layout with inline styles (Outlook, Gmail, Apple Mail), a plain-text part, a preheader,
 * the company's postal address, no tracking pixels or shortened links.
 * Abuse: anyone can type any address into the form, so this email must never carry text an attacker controls.
 * It never repeats the message, uses the first name only when it looks like a real name, and names the service
 * only when it is one of ours.
 */

const ALLOWED_SERVICES = new Set([...services.map((s) => s.title), 'Other']);

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

/** First name if it is plainly a name (letters, spaces, apostrophes, hyphens, dots; no links), else null. */
function safeFirstName(fullName: string): string | null {
  const first = fullName.trim().split(/\s+/)[0] || '';
  if (first.length < 2 || first.length > 30) return null;
  if (!/^[\p{L}][\p{L}'’.-]*$/u.test(first)) return null;
  if (/\.(com|net|org|io|ru|xyz|info|top|link)$/i.test(first) || first.includes('..')) return null;
  return first;
}

export function buildAutoReply({ fullName, serviceRequired }: { fullName: string; serviceRequired: string }) {
  const name = safeFirstName(fullName);
  const service = ALLOWED_SERVICES.has(serviceRequired) && serviceRequired !== 'Other' ? serviceRequired : null;
  const site = siteConfig.url;
  const { email, phonePrimary, phonePrimaryRaw, address } = siteConfig.contact;
  const postal = `${address.street}, ${address.city}, ${address.state} ${address.postalCode}, India`;

  const subject = 'We’ve received your enquiry | BIOTOX by MedReg';
  const greeting = name ? `Dear ${name},` : 'Hello,';
  const about = service ? `your enquiry about <strong>${escapeHtml(service)}</strong>` : 'your enquiry';
  const aboutText = service ? `your enquiry about ${service}` : 'your enquiry';
  const preheader = 'Thank you for contacting BIOTOX by MedReg. A certified toxicologist will reply shortly.';

  const steps = [
    ['Review', 'A certified toxicologist reviews your device, materials and target markets.'],
    ['Reply', 'We reply within 2 hours on business days with questions or next steps.'],
    ['Proposal', 'You receive a scoped proposal and timeline. We sign an NDA first if you need one.'],
  ];

  const text = [
    greeting,
    '',
    `Thank you for contacting BIOTOX by MedReg. We have received ${aboutText}.`,
    '',
    'What happens next:',
    ...steps.map(([t, d], i) => `${i + 1}. ${t}: ${d}`),
    '',
    `Need to add details or documents? Simply reply to this email.`,
    `Urgent? Call ${phonePrimary} or WhatsApp ${siteConfig.contact.whatsappUrl}`,
    '',
    'Kind regards,',
    'The BIOTOX by MedReg Toxicology Team',
    site,
    '',
    '—',
    `BIOTOX by MedReg · ${postal}`,
    `You are receiving this one-time confirmation because this address was entered in the enquiry form at ${site.replace('https://', '')}. If that wasn't you, please ignore it; we won't email you again unless you contact us.`,
  ].join('\n');

  const html = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light only">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#F3F8F6;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F3F8F6;">
<tr><td align="center" style="padding:32px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#FFFFFF;border:1px solid #DCE9E5;border-radius:14px;">
    <tr><td style="padding:28px 36px 20px 36px;border-bottom:3px solid #018782;">
      <a href="${site}" style="text-decoration:none;"><img src="${site}/images/logo-full.png" width="150" height="55" alt="BIOTOX by MedReg" style="display:block;border:0;width:150px;height:auto;"></a>
    </td></tr>
    <tr><td style="padding:32px 36px 8px 36px;font-family:Arial,Helvetica,sans-serif;color:#0A1F1D;">
      <h1 style="margin:0 0 18px 0;font-size:22px;line-height:1.3;font-weight:bold;color:#0A1F1D;">Thank you for your enquiry</h1>
      <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">${escapeHtml(greeting)}</p>
      <p style="margin:0 0 22px 0;font-size:15px;line-height:1.6;">Thank you for contacting BIOTOX by MedReg. We have received ${about}, and a certified toxicologist will be in touch shortly.</p>
      <p style="margin:0 0 10px 0;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#017570;font-weight:bold;">What happens next</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px 0;">
        ${steps
          .map(
            ([t, d], i) => `<tr>
          <td valign="top" width="34" style="padding:0 0 14px 0;"><div style="width:26px;height:26px;line-height:26px;border-radius:7px;background:#E8F3F0;color:#017570;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;text-align:center;">${i + 1}</div></td>
          <td valign="top" style="padding:3px 0 14px 8px;font-family:Arial,Helvetica,sans-serif;font-size:14.5px;line-height:1.55;color:#0A1F1D;"><strong>${t}.</strong> <span style="color:#4D6360;">${d}</span></td>
        </tr>`
          )
          .join('')}
      </table>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F3F8F6;border-radius:10px;margin:0 0 24px 0;">
        <tr><td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#0A1F1D;">
          <strong>Need to add details or documents?</strong> Simply reply to this email.<br>
          <strong>Urgent?</strong> Call <a href="tel:${phonePrimaryRaw}" style="color:#017570;text-decoration:none;">${phonePrimary}</a> or <a href="${siteConfig.contact.whatsappUrl}" style="color:#017570;text-decoration:none;">message us on WhatsApp</a>.
        </td></tr>
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px 0;"><tr>
        <td style="border-radius:10px;background:#0B6B66;"><a href="${site}/expertise" style="display:inline-block;padding:12px 22px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#FFFFFF;text-decoration:none;border-radius:10px;">Explore our services</a></td>
      </tr></table>
      <p style="margin:0 0 4px 0;font-size:15px;line-height:1.6;">Kind regards,</p>
      <p style="margin:0 0 28px 0;font-size:15px;line-height:1.6;"><strong>The BIOTOX by MedReg Toxicology Team</strong><br><span style="color:#4D6360;font-size:13.5px;">DABT · ERT · UKRT certified toxicologists</span></p>
    </td></tr>
    <tr><td style="padding:20px 36px 26px 36px;border-top:1px solid #DCE9E5;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#4D6360;">
      <strong style="color:#0A1F1D;">BIOTOX by MedReg</strong> · ${escapeHtml(postal)}<br>
      <a href="mailto:${email}" style="color:#017570;text-decoration:none;">${email}</a> · <a href="${site}" style="color:#017570;text-decoration:none;">${site.replace('https://', '')}</a><br><br>
      You are receiving this one-time confirmation because this address was entered in the enquiry form on our website. If that wasn’t you, please ignore this email; we won’t contact you again unless you get in touch.
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;

  return { subject, html, text };
}
