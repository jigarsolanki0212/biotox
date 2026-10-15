import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Contact Us — Enquire for Medical Device Toxicology',
  description:
    'Reach out to our certified toxicologists (DABT, ERT, UKRT) for biocompatibility evaluation, BEP/BER roadmaps, and global regulatory compliance.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Us — BIOTOX by MedReg',
    description:
      'Direct expert assistance for medical device biocompatibility, BEP/BER, and regulatory submissions. Response within 2 hours.',
    url: `${siteConfig.url}/contact`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Contact BIOTOX by MedReg' }],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' },
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact BIOTOX by MedReg',
    url: `${siteConfig.url}/contact`,
    description:
      'Contact page for medical device biological safety evaluation, BEP/BER preparation, and regulatory toxicology consulting.',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.contact.phonePrimaryRaw,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: siteConfig.contact.address.country,
      },
    },
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={contactPageSchema} />

      <PageHero
        eyebrow="Contact"
        title={<>Do You Have an <em>Enquiry?</em></>}
        lead="We are here to support your safety, compliance & success. Reach out to our certified toxicology experts — direct expert response within 2 hours."
        img="https://images.pexels.com/photos/8730987/pexels-photo-8730987.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Contact' }]}
      />
      <ContactSection id="contact" />
    </>
  );
}
