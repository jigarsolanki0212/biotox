import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { bepSteps, berSteps } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'BEP + BER Biological Evaluation Process',
  description:
    'End-to-end biological safety compliance as per ISO 10993 & global regulations — from planning (BEP) to final regulator-ready submission (BER).',
  alternates: {
    canonical: `${siteConfig.url}/process`,
  },
  openGraph: {
    title: 'BEP + BER Process — BIOTOX by MedReg',
    description:
      'End-to-end biological safety compliance per ISO 10993-1:2025: Biological Evaluation Plan (BEP) & Biological Evaluation Report (BER).',
    url: `${siteConfig.shareUrl}/process`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BEP BER Process' }],
  },
};

export default function ProcessPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'BEP + BER Process', item: '/process' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />

      <PageHero
        eyebrow="Our Process"
        title={<>BEP + BER <em>Solutions</em> for Medical Devices</>}
        lead="End-to-end biological safety compliance as per ISO 10993 & global regulations — from planning to final submission."
        img="https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'BEP + BER' }]}
        chips={['ISO 10993-1:2025', 'ISO 10993-17', 'ISO 10993-18', 'ISO 14971']}
      />

      <section className="section alt" id="process">
        <div className="container">
          <div className="track-wrap">
          {/* BEP Track */}
          <div className="process-track" data-reveal="left">
            <div className="process-track-head">
              <h2>Biological Evaluation Plan</h2>
              <span className="stage-tag">BEP</span>
            </div>
            <p className="process-sub">
              Your roadmap for biological safety — a complete biocompatibility strategy defining materials, device categorisation, and required testing per ISO 10993-1:2025.
            </p>
            <div className="timeline" id="bepTimeline">
              <span className="fill" aria-hidden="true" />
              {bepSteps.map((step, idx) => (
                <div key={idx} className="t-step">
                  <div className="t-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="t-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="outcome-box">
              <span className="tag">Key Outcome</span>
              <p>
                A complete, audit-ready biological evaluation strategy that reduces testing costs and accelerates your path to regulatory compliance.
              </p>
            </div>
          </div>

          {/* BER Track */}
          <div className="process-track" data-reveal="right">
            <div className="process-track-head">
              <h2>Biological Evaluation Report</h2>
              <span className="stage-tag ber">BER</span>
            </div>
            <p className="process-sub">
              Regulator-ready biological safety — the final biological safety assessment submitted to regulatory bodies after characterisation and testing is complete.
            </p>
            <div className="timeline" id="berTimeline">
              <span className="fill" aria-hidden="true" />
              {berSteps.map((step, idx) => (
                <div key={idx} className="t-step">
                  <div className="t-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="t-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="outcome-box">
              <span className="tag">Deliverable</span>
              <p>
                Complete, regulator-ready BERs that satisfy notified body and worldwide regulatory requirements, ensuring a smooth submission process from the outset.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <CtaBand title="Start with a Biological Evaluation Plan" />
      <ContactSection />
    </>
  );
}
