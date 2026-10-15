import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { services } from '@/lib/data';
import { serviceHref } from '@/lib/service-details';
import { siteConfig } from '@/lib/seo-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2>Prove your device is biologically safe.</h2>
            <p>Share your device and markets; a certified toxicologist replies within 2 hours on business days.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Start a project <Icon name="arrow" />
            </Link>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              WhatsApp an expert
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="BIOTOX by MedReg home">
              <Image src="/images/logo-full.webp" alt="BIOTOX by MedReg" width={150} height={55} className="logo-img" />
            </Link>
            <p>Expert toxicology solutions for safe, compliant, successful products. Science · Safety · Compliance.</p>
            <a href={siteConfig.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="BIOTOX by MedReg on LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
          <div className="footer-col">
            <h2>Services</h2>
            {services.slice(0, 5).map((s) => (
              <Link key={s.slug} href={serviceHref(s.slug)}>{s.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h2>Specialised</h2>
            {services.slice(5).map((s) => (
              <Link key={s.slug} href={serviceHref(s.slug)}>{s.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h2>Company</h2>
            <Link href="/about">About Us</Link>
            <Link href="/process">BEP + BER Process</Link>
            <Link href="/advantages">Why Choose Us</Link>
            <Link href="/devices">Devices We Cover</Link>
            <Link href="/standards">Standards</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h2>Get in touch</h2>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`}>{siteConfig.contact.phonePrimary}</a>
            <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}>{siteConfig.contact.phoneSecondary}</a>
            <a href={siteConfig.contact.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.city} {siteConfig.contact.address.postalCode}
            </a>
          </div>
        </div>

        <div className="footer-word" aria-hidden="true">BIOTOX</div>

        <div className="footer-bottom">
          <span>© {currentYear} BIOTOX by MedReg. All rights reserved.</span>
          <nav aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
