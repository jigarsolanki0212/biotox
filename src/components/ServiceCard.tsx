import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import type { ServiceItem } from '@/lib/data';
import { serviceHref } from '@/lib/service-details';

export default function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <article className="card service-card" data-reveal="up" style={{ ['--d' as string]: (index % 3) * 90 }}>
      <div className="card-img-wrap">
        <Image src={item.img} alt={item.title} fill sizes="(max-width:640px) 100vw, (max-width:980px) 50vw, 400px" />
        <span className="tag">{item.tag}</span>
        <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="card-body">
        <span className="icon-box"><Icon name={item.icon} /></span>
        <h3 style={{ marginTop: 18 }}>{item.title}</h3>
        <p>{item.desc}</p>
        <span className="link-arrow">Explore service <Icon name="arrow" /></span>
      </div>
      <Link href={serviceHref(item.slug)} className="card-link" aria-label={`Learn more about ${item.title}`} />
    </article>
  );
}
