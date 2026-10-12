import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { bepSteps, berSteps } from '@/lib/data';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'BEP + BER Process — Biological Safety Evaluation',
  description:
    'End-to-end biological safety compliance as per ISO 10993 & global regulations — from planning (BEP) to final regulator-ready submission (BER).',
  alternates: {
    canonical: `${siteConfig.url}/process`,
  },
  openGraph: {
    title: 'BEP + BER Process — BIOTOX by MedReg',
    description:
      'End-to-end biological safety compliance per ISO 10993-1:2025: Biological Evaluation Plan (BEP) & Biological Evaluation Report (BER).',
    url: `${siteConfig.url}/process`,
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

      <section className="section alt" id="process">
        <div className="container">
          <div className="section-head center reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
              Our Process
            </div>
            <h1>
              BEP + BER <em>Solutions</em> for Medical Devices
            </h1>
            <p>
              End-to-end biological safety compliance as per ISO 10993 &amp; global regulations — from planning to final submission.
            </p>
          </div>

          <div className="process-banner reveal in">
            <Image
              src="https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Regulatory documentation and biological safety evaluation review"
              width={1200}
              height={500}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius)' }}
            />
          </div>

          {/* BEP Track */}
          <div className="process-track reveal in">
            <div className="process-track-head">
              <h2>Biological Evaluation Plan</h2>
              <span className="stage-tag">BEP</span>
            </div>
            <p className="process-sub">
              Your roadmap for biological safety — a complete biocompatibility strategy defining materials, device categorisation, and required testing per ISO 10993-1:2025.
            </p>
            <div className="timeline" id="bepTimeline">
              {bepSteps.map((step, idx) => (
                <div key={idx} className="t-step reveal in">
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
          <div className="process-track reveal in" style={{ marginBottom: 0 }}>
            <div className="process-track-head">
              <h2>Biological Evaluation Report</h2>
              <span className="stage-tag ber">BER</span>
            </div>
            <p className="process-sub">
              Regulator-ready biological safety — the final biological safety assessment submitted to regulatory bodies after characterisation and testing is complete.
            </p>
            <div className="timeline" id="berTimeline">
              {berSteps.map((step, idx) => (
                <div key={idx} className="t-step reveal in">
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
      </section>

      <ContactSection />
    </>
  );
}
