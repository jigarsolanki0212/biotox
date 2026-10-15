import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';

interface RelatedServicesProps {
  slugs: string[];
  eyebrow?: string;
  title?: React.ReactNode;
}

/** A row of service cards, used on general pages so visitors (and search engines) reach the service pages. */
export default function RelatedServices({ slugs, eyebrow = 'Our services', title = <>Where we can <em>help next</em></> }: RelatedServicesProps) {
  const items = slugs.map((s) => services.find((x) => x.slug === s)).filter((x): x is (typeof services)[number] => Boolean(x));
  return (
    <section className="section alt">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        <div className="grid grid-3">
          {items.map((r) => (
            <ServiceCard key={r.slug} item={r} index={services.indexOf(r)} />
          ))}
        </div>
      </div>
    </section>
  );
}
