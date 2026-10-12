import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { services, ICONS } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema, getServiceSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Our Expertise — Medical Device Toxicology',
  description:
    'Smarter toxicology for better regulatory decisions — covering biocompatibility evaluation, BEP/BER, TRA, QSAR, in-silico safety, and ISO 10993 compliance.',
  alternates: {
    canonical: `${siteConfig.url}/expertise`,
  },
  openGraph: {
    title: 'Our Expertise — BIOTOX by MedReg',
    description:
      'Smarter toxicology for better regulatory decisions — biocompatibility evaluation, BEP/BER, toxicological risk assessment, and ISO 10993 compliance.',
    url: `${siteConfig.url}/expertise`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX Expertise' }],
  },
};

export default function ExpertisePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Expertise', item: '/expertise' },
  ]);
  const serviceSchema = getServiceSchema(services);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={serviceSchema} />

      <section className="section" id="expertise">
        <div className="blob-wrap" aria-hidden="true">
          <div className="blob blob-blue" style={{ width: '420px', height: '420px', top: '-140px', left: '-140px' }} />
          <div className="blob blob-purple" style={{ width: '380px', height: '380px', bottom: '-120px', right: '-120px' }} />
        </div>

        <div className="container">
          <div className="section-head center reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
              Core Services
            </div>
            <h1>
              Our <em>Expertise</em>
            </h1>
            <p>
              Smarter toxicology for better regulatory decisions — covering the full spectrum of biological safety for medical devices from concept to market approval.
            </p>
          </div>

          <div className="grid grid-3" id="servicesGrid">
            {services.map((item, idx) => (
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
