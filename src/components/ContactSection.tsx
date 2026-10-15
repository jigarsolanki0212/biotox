'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo-config';
import { services } from '@/lib/data';
import { validateEnquiry, ENQUIRY_LIMITS, type EnquiryField } from '@/lib/enquiry';

interface ContactSectionProps {
  id?: string;
  defaultService?: string;
}

export default function ContactSection({ id = 'contact-cta-section', defaultService = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    serviceRequired: defaultService,
    message: '',
    website: '',
  });
  const [consent, setConsent] = useState(false);

  // Pre-select a service from ?service=… (links from service pages).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('service');
    if (q && services.some((s) => s.title === q)) setFormData((prev) => ({ ...prev, serviceRequired: q }));
  }, []);

  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidField, setInvalidField] = useState<EnquiryField | null>(null);
  // When the form appeared; the server treats instant submissions as bots.
  const [shownAt] = useState(() => Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === invalidField) {
      setInvalidField(null);
      setStatus({ message: '', type: '' });
    }
  };

  const showError = (message: string, field: EnquiryField | null = null) => {
    setStatus({ message, type: 'error' });
    setInvalidField(field);
    if (field) document.getElementById(field)?.focus();
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`New Enquiry — ${formData.serviceRequired || 'Medical Device Toxicology'}`);
    if (formData.website) return;
    const bodyLines = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.emailAddress}`,
      `Phone: ${formData.phoneNumber}`,
      formData.companyName ? `Company: ${formData.companyName}` : null,
      `Service Required: ${formData.serviceRequired}`,
      '',
      'Message:',
      formData.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus({
      message: `We couldn't send this automatically, so your email app is opening with your enquiry filled in. You can also email ${siteConfig.contact.email} or call ${siteConfig.contact.phonePrimary}.`,
      type: 'error',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    const trimmed = Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, v.trim()])) as typeof formData;
    const problem = validateEnquiry(trimmed);
    if (problem) return showError(problem.message, problem.field);
    if (!consent) return showError('Please accept the privacy policy so we can reply to you.');

    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...trimmed, elapsedMs: Date.now() - shownAt }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setInvalidField(null);
        setStatus({
          message: data.message || "Thank you! We've received your enquiry and will reply within 2 hours.",
          type: 'success',
        });
        setFormData({
          fullName: '',
          emailAddress: '',
          phoneNumber: '',
          companyName: '',
          serviceRequired: '',
          message: '',
          website: '',
        });
        setConsent(false);
      } else if (res.status === 400 || res.status === 429) {
        // The server rejected the details themselves; say why instead of opening the email app.
        showError(data.message || 'Please check your details and try again.', data.field || null);
      } else {
        mailtoFallback();
      }
    } catch {
      mailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head center" data-reveal="up">
          <div className="eyebrow">Get In Touch</div>
          <h2>
            Do You Have an <em>Enquiry?</em>
          </h2>
          <p>
            We are here to support your safety, compliance &amp; success. Reach out to our certified toxicology experts today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: contact info cards */}
          <div className="contact-info-list" data-reveal="left">
            <div className="info-card">
              <div className="info-icon icon-blue">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </div>
              <div className="info-body">
                <h3>Call Us</h3>
                <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`}>{siteConfig.contact.phonePrimary}</a>
                <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}>{siteConfig.contact.phoneSecondary}</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon icon-purple">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="info-body">
                <h3>Email Us</h3>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                <span className="info-sub">Direct expert response within 2 hours</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon icon-teal">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="info-body">
                <h3>Visit Us</h3>
                <p>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                </p>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon icon-green">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.55 1.78 6.43L4 29l7.72-1.73a12 12 0 0 0 4.3.8c6.62 0 12.02-5.4 12.02-12.02C28.04 8.4 22.64 3 16.02 3Zm0 21.9c-1.7 0-3.36-.46-4.8-1.32l-.34-.2-4.58 1.03 1.06-4.46-.22-.36a9.87 9.87 0 0 1-1.5-5.27c0-5.46 4.44-9.9 9.9-9.9 5.45 0 9.88 4.44 9.88 9.9 0 5.46-4.43 9.58-9.4 9.58Zm5.4-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.5.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.4.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.34Z" />
                </svg>
              </div>
              <div className="info-body">
                <h3>WhatsApp Us</h3>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  Chat with an Expert Now →
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="map-card">
              <div className="map-embed">
                <iframe
                  title="BIOTOX by MedReg Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4886638062947!2d72.49962297603848!3d22.996657917631388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851d95c52c41%3A0xe54e27f6771d3e15!2sTitanium%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-overlay-card">
                <div>
                  <strong>Titanium Business Park</strong>
                  <span>Makarba, Ahmedabad, Gujarat 380051</span>
                </div>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrap" data-reveal="right">
            <h3>Tell us about your device</h3>
            <p>Share a few details and a certified toxicologist will get back to you, usually within 2 hours on business days.</p>
            <form className="enquiryForm" onSubmit={handleSubmit} noValidate aria-describedby={status.message ? 'enquiryStatus' : undefined}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    aria-invalid={invalidField === 'fullName'} maxLength={ENQUIRY_LIMITS.fullName} autoComplete="name"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    aria-invalid={invalidField === 'emailAddress'} maxLength={ENQUIRY_LIMITS.emailAddress} autoComplete="email"
                    placeholder="john@company.com"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    aria-invalid={invalidField === 'phoneNumber'} maxLength={ENQUIRY_LIMITS.phoneNumber} autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">
                    Company Name <span className="optional">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    maxLength={ENQUIRY_LIMITS.companyName} autoComplete="organization"
                    placeholder="e.g. MedTech Solutions"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceRequired">Service Required</label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  aria-invalid={invalidField === 'serviceRequired'}
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {services.map((svc) => (
                    <option key={svc.slug} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                  <option value="Other">Other / Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  aria-invalid={invalidField === 'message'} maxLength={ENQUIRY_LIMITS.message}
                  rows={5}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="hp-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
              </div>

              <label className="form-consent">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <span>
                  I agree that BIOTOX by MedReg may use these details to respond to my enquiry, as described in the{' '}
                  <Link href="/privacy-policy">privacy policy</Link>. We sign NDAs on request.
                </span>
              </label>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>

              {status.message && (
                <p className={`form-note ${status.type}`} id="enquiryStatus" role={status.type === 'error' ? 'alert' : 'status'}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
