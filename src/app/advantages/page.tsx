import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { advantages, ICONS } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Why Us — Key Advantages of BIOTOX by MedReg',
  description:
    'Discover why medical device manufacturers choose BIOTOX: Internationally certified toxicologists (DABT, ERT, UKRT), faster approvals, and minimized testing costs.',
  alternates: {
    canonical: `${siteConfig.url}/advantages`,
  },
  openGraph: {
    title: 'Why Us — BIOTOX by MedReg',
    description:
      'DABT & ERT certified toxicologists, faster regulatory approvals, multi-market compliance (FDA, EU MDR, CDSCO), and minimized testing costs.',
    url: `${siteConfig.url}/advantages`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Why Us BIOTOX' }],
  },
};

export default function AdvantagesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Why Us', item: '/advantages' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <section className="section" id="advantages">
        <div className="blob-wrap" aria-hidden="true">
          <div className="blob blob-teal" style={{ width: '380px', height: '380px', top: '-100px', right: '-120px' }} />
        </div>

        <div className="container">
          <div className="section-head reveal in">
            <div className="eyebrow">Why Choose Us</div>
            <h1>
              Key Advantages of <em>BIOTOX by MedReg</em>
            </h1>
            <p>
              Expert guidance at every step — from first documentation to final submission worldwide.
            </p>
          </div>

          <div className="grid grid-3" id="advantagesGrid">
            {advantages.map((item, idx) => (
              <div key={idx} className="card reveal in">
                <div className="card-img-wrap">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={220}
                    className="card-img"
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span
                      className="icon-box"
                      dangerouslySetInnerHTML={{
                        __html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon] || ICONS.award}</svg>`,
                      }}
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
