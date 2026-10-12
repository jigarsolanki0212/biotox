import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import Counter from '@/components/Counter';
import JsonLd from '@/components/JsonLd';
import { standards, ICONS } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Standards & Accreditations — ISO 10993, FDA, EU MDR, OECD GLP',
  description:
    'Globally recognised regulatory frameworks we work with: ISO 10993-1:2025, FDA 510(k), EU MDR 2017/745, OECD GLP, ISO 17025, NABL, and CDSCO.',
  alternates: {
    canonical: `${siteConfig.url}/standards`,
  },
  openGraph: {
    title: 'Standards & Accreditations — BIOTOX by MedReg',
    description:
      'Regulatory compliance aligning with ISO 10993-1:2025, US FDA, EU MDR 2017/745, OECD GLP, ISO 17025, and NABL.',
    url: `${siteConfig.url}/standards`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Regulatory Standards & Accreditations' }],
  },
};

export default function StandardsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Standards', item: '/standards' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <section className="section" id="standards">
        <div className="blob-wrap" aria-hidden="true">
          <div className="blob blob-blue" style={{ width: '400px', height: '400px', bottom: '-140px', left: '-120px' }} />
        </div>

        <div className="container">
          <div className="section-head center reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
              Standards &amp; Accreditations
            </div>
            <h1>
              Globally Recognised <em>Standards</em> We Work With
            </h1>
            <p>
              Our work aligns with the most rigorous international regulatory frameworks — ensuring your documentation is accepted by regulatory authorities worldwide without delay or rework.
            </p>
          </div>

          <div className="grid grid-3" id="standardsGrid">
            {standards.map((item, idx) => (
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
                        __html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.icon] || ICONS.shield}</svg>`,
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

          <div className="stats-band reveal in">
            <div className="grid">
              <div>
                <div className="stat-num">
                  <Counter target={20} suffix="+" />
                </div>
                <div className="stat-lbl">Years Regulatory Experience</div>
              </div>
              <div>
                <div className="stat-num">I · II · III</div>
                <div className="stat-lbl">All Device Risk Classes Supported</div>
              </div>
              <div>
                <div className="stat-num">Zero</div>
                <div className="stat-lbl">Rework Commitment</div>
              </div>
            </div>

            <div className="reveal in" style={{ marginTop: '34px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
              <div className="card" style={{ textAlign: 'center', flex: '0 1 340px' }}>
                <span className="tag" style={{ margin: '0 auto 12px auto' }}>Zero Rework Commitment</span>
                <p>
                  Every deliverable is structured for notified body review, FDA inspection, and internal quality audits — approved first time without costly resubmissions.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center', flex: '0 1 340px' }}>
                <span className="tag" style={{ margin: '0 auto 12px auto' }}>ISO 14971 Risk Management</span>
                <p>
                  Fully integrated risk management files connecting material characterisation, toxicological evaluations, and clinical risk benefit profiles seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
