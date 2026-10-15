import type { Metadata } from 'next';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { devices } from '@/lib/data';
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

      <PageHero
        eyebrow="Device Categories We Support"
        title={<>Medical Device Types <em>We Cover</em></>}
        lead="Biocompatibility and regulatory compliance support across all major medical device categories — from Class I to Class III, implants, and combination products."
        img="https://images.pexels.com/photos/9243372/pexels-photo-9243372.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Devices' }]}
        chips={['Class I', 'Class II', 'Class III', 'IVD', 'Combination products']}
      />

      <section className="section" id="devices">
        <div className="container">
          <div className="grid grid-3" id="devicesGrid">
            {devices.map((item, idx) => (
              <div key={item.title} className="device-tile" tabIndex={0} data-reveal="up" style={{ ['--d' as string]: (idx % 3) * 90 }}>
                <Image src={item.img} alt={item.title} fill sizes="(max-width:640px) 100vw, (max-width:980px) 50vw, 400px" />
                <span className="icon-box"><Icon name={item.icon} /></span>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Don’t see your device category?" text="We support Class I, II and III devices across all contact types and exposure durations. Tell us about your device and we will scope the right evaluation." />
      <ContactSection />
    </>
  );
}
