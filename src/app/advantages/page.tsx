import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
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

      <PageHero
        eyebrow="Why Choose Us"
        title={<>Key Advantages of <em>BIOTOX by MedReg</em></>}
        lead="Expert guidance at every step — from first documentation to final submission worldwide."
        img="https://images.pexels.com/photos/8978610/pexels-photo-8978610.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Why Us' }]}
      />

      <section className="section" id="advantages">
        <div className="container">
          <div className="grid grid-3" id="advantagesGrid">
            {advantages.map((item, idx) => (
              <div key={idx} className="card" data-reveal="up" style={{ ['--d' as string]: (idx % 3) * 90 }}>
                <div className="card-img-wrap">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:980px) 50vw, 400px"
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

      <CtaBand />
      <ContactSection />
    </>
  );
}
