import Link from 'next/link';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <section className="nf">
      <div className="aurora" aria-hidden="true"><span className="a1" /><span className="a2" /></div>
      <div className="container">
        <div className="code fade-up">404</div>
        <h1 className="fade-up" style={{ ['--d' as string]: '100ms' }}>This page could not be found</h1>
        <p className="fade-up" style={{ ['--d' as string]: '200ms' }}>The page may have moved. Try one of our services or get in touch.</p>
        <div className="hero-cta fade-up" style={{ justifyContent: 'center', ['--d' as string]: '300ms' }}>
          <Link href="/" className="btn btn-primary">Back to home <Icon name="arrow" /></Link>
          <Link href="/expertise" className="btn btn-ghost">Our services</Link>
        </div>
      </div>
    </section>
  );
}
