import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/lib/seo-config';

const metaDescription =
  'Terms governing use of the BIOTOX by MedReg website, its content, enquiry form and the medical device toxicology information it provides.';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: metaDescription,
  alternates: { canonical: `${siteConfig.url}/terms` },
  openGraph: {
    title: 'Terms of Use — BIOTOX by MedReg',
    description: metaDescription,
    url: `${siteConfig.url}/terms`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX by MedReg' }],
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        img="https://images.pexels.com/photos/8730987/pexels-photo-8730987.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Terms of Use' }]}
      />
      <section className="section">
        <div className="container legal">
          <p className="updated">Last updated: October 2026</p>

          <h2>Use of this website</h2>
          <p>By using medregbiotox.com you agree to these terms. If you do not agree, please do not use the website.</p>

          <h2>Information only, not regulatory advice</h2>
          <p>
            Content on this website is general information about toxicology, biocompatibility and regulatory requirements. It is not advice for any
            specific device and does not create a client relationship. Regulatory requirements change and depend on your device, so please{' '}
            <Link href="/contact">contact us</Link> before relying on any information for a submission.
          </p>

          <h2>Services</h2>
          <p>Our services are provided under a separate written proposal or agreement, whose terms take precedence over these website terms.</p>

          <h2>Intellectual property</h2>
          <p>
            The BIOTOX by MedReg name, logo and website content belong to us or our licensors. You may not copy or reuse them without permission, except
            for personal, non-commercial reference. Photographs used on this site are licensed stock images.
          </p>

          <h2>Third-party links</h2>
          <p>Links to other websites, such as regulators or standards bodies, are provided for convenience. We are not responsible for their content.</p>

          <h2>Liability</h2>
          <p>
            We take care to keep this website accurate and available but provide it &quot;as is&quot;. To the extent permitted by law, we are not liable
            for any loss arising from use of the website.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India, and the courts of Ahmedabad, Gujarat have jurisdiction.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. See also our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
