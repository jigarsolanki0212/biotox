import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { devices, ICONS } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Device Categories — Medical Device Types We Cover',
  description:
    'Biocompatibility and regulatory compliance support across all major medical device categories — Class I to Class III, implants, cardiovascular, orthopaedic, IVD, and respiratory.',
  alternates: {
    canonical: `${siteConfig.url}/devices`,
  },
  openGraph: {
    title: 'Medical Device Types We Cover — BIOTOX by MedReg',
    description:
      'Biocompatibility testing & biological safety evaluation for Orthopaedic Implants, Cardiovascular, IVD, Dental, Catheters, and Respiratory Devices.',
    url: `${siteConfig.url}/devices`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Medical Devices Covered' }],
  },
};

export default function DevicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Devices', item: '/devices' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <section className="section alt" id="devices">
        <div className="container">
          <div className="section-head center reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
              Device Categories We Support
            </div>
            <h1>
              Medical Device Types <em>We Cover</em>
            </h1>
            <p>
              Biocompatibility and regulatory compliance support across all major medical device categories — from Class I to Class III, implants, and combination products.
            </p>
          </div>

          <div className="grid grid-3" id="devicesGrid">
            {devices.map((item, idx) => (
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
                        __html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon] || ICONS.flask}</svg>`,
                      }}
                    />
                    <span className="tag">{item.tag}</span>
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
