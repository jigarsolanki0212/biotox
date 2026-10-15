'use client';

import { usePathname } from 'next/navigation';

/** Re-mounts on navigation so each page fades in. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
