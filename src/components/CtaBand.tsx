import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { siteConfig } from '@/lib/seo-config';

interface CtaBandProps {
  title?: React.ReactNode;
  text?: string;
}

export default function CtaBand({
  title = 'Ready to make your device submission-ready?',
  text = 'Talk to a DABT · ERT · UKRT certified toxicologist about your biological evaluation. Direct expert response within 2 hours.',
}: CtaBandProps) {
  return (
    <section className="section tight">
      <div className="container">
        <div className="cta-band" data-reveal="zoom">
          <Image className="bg" src="https://images.pexels.com/photos/8828607/pexels-photo-8828607.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" fill sizes="100vw" aria-hidden="true" />
          <span className="ring" aria-hidden="true" />
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="actions">
            <Link href="/contact" className="btn btn-light">
              Book a consultation <Icon name="arrow" />
            </Link>
            <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`} className="btn btn-glass">
              <Icon name="phone" /> {siteConfig.contact.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
