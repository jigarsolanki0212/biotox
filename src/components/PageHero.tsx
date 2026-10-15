import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  img: string;
  crumbs: Crumb[];
  chips?: string[];
  children?: React.ReactNode;
}

/** Dark, photo-backed hero used at the top of every inner page. */
export default function PageHero({ eyebrow, title, lead, img, crumbs, chips, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="bg" aria-hidden="true">
        <Image src={img} alt="" fill preload sizes="100vw" quality={55} />
      </div>
      <div className="container">
        <nav className="crumbs fade-up" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.name} style={{ display: 'contents' }}>
              <Icon name="chevronRight" />
              {c.href && i < crumbs.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </span>
          ))}
        </nav>
        <div className="eyebrow fade-up" style={{ ['--d' as string]: '30ms' }}>{eyebrow}</div>
        <h1 className="fade-up" style={{ ['--d' as string]: '70ms' }}>{title}</h1>
        {lead && <p className="lead fade-up" style={{ ['--d' as string]: '120ms' }}>{lead}</p>}
        {chips && (
          <div className="chips fade-up" style={{ ['--d' as string]: '170ms' }}>
            {chips.map((c) => (
              <span key={c} className="chip"><span className="dot" />{c}</span>
            ))}
          </div>
        )}
        {children && <div className="fade-up" style={{ ['--d' as string]: '200ms' }}>{children}</div>}
      </div>
    </section>
  );
}
