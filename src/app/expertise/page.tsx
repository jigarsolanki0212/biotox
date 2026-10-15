import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { services } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema, getServiceSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Our Expertise — Medical Device Toxicology Services',
  description:
    'Smarter toxicology for better regulatory decisions — covering biocompatibility evaluation, BEP/BER, TRA, QSAR, in-silico safety, ISO 18562, ISO 7405 and ISO 10993 compliance.',
  alternates: { canonical: `${siteConfig.url}/expertise` },
  openGraph: {
    title: 'Our Expertise — BIOTOX by MedReg',
    description:
      'Smarter toxicology for better regulatory decisions — biocompatibility evaluation, BEP/BER, toxicological risk assessment, and ISO 10993 compliance.',
    url: `${siteConfig.url}/expertise`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX Expertise' }],
  },
};

export default function ExpertisePage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: 'Home', item: '/' }, { name: 'Expertise', item: '/expertise' }])} />
      <JsonLd schema={getServiceSchema(services)} />

      <PageHero
        eyebrow="Core Services"
        title={<>Our <em>Expertise</em></>}
        lead="Smarter toxicology for better regulatory decisions — covering the full spectrum of biological safety for medical devices from concept to market approval."
        img="https://images.unsplash.com/photo-1748261348213-62f4c399bb72?auto=format&fit=crop&w=1800&q=75"
        crumbs={[{ name: 'Expertise' }]}
        chips={['ISO 10993-1:2025', 'BEP / BER', 'TRA · QSAR', 'ISO 18562', 'ISO 7405']}
      />

      <section className="section" id="expertise">
        <div className="container">
          <div className="grid grid-3">
            {services.map((item, idx) => (
              <ServiceCard key={item.slug} item={item} index={idx} />
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 48, color: 'var(--text-muted)' }} data-reveal="up">
            Not sure which service you need?{' '}
            <Link href="/contact" className="link-arrow" style={{ display: 'inline-flex' }}>
              Ask a toxicologist <Icon name="arrow" />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
      <ContactSection />
    </>
  );
}
