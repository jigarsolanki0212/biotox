import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/lib/seo-config';

const metaDescription =
  'How BIOTOX by MedReg collects, uses and protects personal information submitted through this website.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: metaDescription,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  openGraph: {
    title: 'Privacy Policy — BIOTOX by MedReg',
    description: metaDescription,
    url: `${siteConfig.shareUrl}/privacy-policy`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX by MedReg' }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        img="https://images.pexels.com/photos/8730987/pexels-photo-8730987.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Privacy Policy' }]}
      />
      <section className="section">
        <div className="container legal">
          <p className="updated">Last updated: October 2026</p>

          <h2>Who we are</h2>
          <p>
            This website is operated by BIOTOX by MedReg (&quot;we&quot;, &quot;us&quot;), {siteConfig.contact.address.street},{' '}
            {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}, India. For any privacy
            question, contact <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Details you submit through our enquiry form: name, email address, phone number, company name, the service you are interested in and your message.</li>
            <li>Information you choose to share with us by email, phone or WhatsApp.</li>
            <li>Basic technical data that web servers record automatically, such as IP address, browser type and pages visited, used to keep the site secure and working.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and prepare proposals for our services.</li>
            <li>To deliver services you engage us for and to keep records required by law.</li>
            <li>To protect the website against spam and misuse.</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>

          <h2>Confidentiality of technical information</h2>
          <p>
            Device descriptions, material formulations, test reports and other technical documents you share are treated as confidential and used only to
            deliver our services. We are happy to sign a non-disclosure agreement before you share them.
          </p>

          <h2>Sharing</h2>
          <p>
            We share information only with service providers who help us operate this website and deliver email, with accredited laboratories where you
            have asked us to coordinate testing, or where required by law.
          </p>

          <h2>Retention and security</h2>
          <p>We keep enquiry data only as long as needed for the purposes above and protect it with appropriate technical and organisational measures.</p>

          <h2>Your rights</h2>
          <p>
            You may ask to access, correct or delete the personal information we hold about you, or withdraw consent, by emailing{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. Depending on where you live, laws such as India&apos;s Digital
            Personal Data Protection Act, 2023 or the EU GDPR may give you further rights.
          </p>

          <h2>Cookies</h2>
          <p>This website uses only the browser storage needed to remember your light or dark theme preference. It does not use advertising cookies.</p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time; the date above shows the latest version. See also our <Link href="/terms">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
