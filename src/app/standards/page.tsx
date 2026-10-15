import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import RelatedServices from '@/components/RelatedServices';
import CtaBand from '@/components/CtaBand';
import Counter from '@/components/Counter';
import JsonLd from '@/components/JsonLd';
import { standards, ICONS } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Standards — ISO 10993, FDA, EU MDR, OECD GLP',
  description:
    'Globally recognised regulatory frameworks we work with: ISO 10993-1:2025, FDA 510(k), EU MDR 2017/745, OECD GLP, ISO 17025, NABL, and CDSCO.',
  alternates: {
    canonical: `${siteConfig.url}/standards`,
  },
  openGraph: {
    title: 'Standards & Accreditations — BIOTOX by MedReg',
    description:
      'Regulatory compliance aligning with ISO 10993-1:2025, US FDA, EU MDR 2017/745, OECD GLP, ISO 17025, and NABL.',
    url: `${siteConfig.shareUrl}/standards`,
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

      <PageHero
        eyebrow="Standards & Accreditations"
        title={<>Globally Recognised <em>Standards</em> We Work With</>}
        lead="Our work aligns with the most rigorous international regulatory frameworks — ensuring your documentation is accepted by regulatory authorities worldwide without delay or rework."
        img="https://images.pexels.com/photos/10347152/pexels-photo-10347152.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Standards' }]}
      />

      <section className="section" id="standards">
        <div className="container">
          <div className="grid grid-3" id="standardsGrid">
            {standards.map((item, idx) => (
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

          <div className="stats-band" data-reveal="zoom" style={{ marginTop: 72 }}>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
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
          </div>

          <div className="grid grid-2" style={{ marginTop: 24 }}>
              <div className="feature" data-reveal="up">
                <span className="tag">Zero Rework Commitment</span>
                <p style={{ marginTop: 14 }}>
                  Every deliverable is structured for notified body review, FDA inspection, and internal quality audits — approved first time without costly resubmissions.
                </p>
              </div>
              <div className="feature" data-reveal="up" style={{ ['--d' as string]: 100 }}>
                <span className="tag">ISO 14971 Risk Management</span>
                <p style={{ marginTop: 14 }}>
                  Fully integrated risk management files connecting material characterisation, toxicological evaluations, and clinical risk benefit profiles seamlessly.
                </p>
              </div>
          </div>
        </div>
      </section>

      <RelatedServices slugs={['biocompatibility-evaluation', 'risk-management-iso-14971', 'global-regulatory-compliance']} />
      <CtaBand />
      <ContactSection />
    </>
  );
}
