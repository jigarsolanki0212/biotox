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
            <Link href="/sitemap.xml">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
