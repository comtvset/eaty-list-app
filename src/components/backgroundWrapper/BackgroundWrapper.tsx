'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      document.body.style.backgroundImage = "url('/images/photo-1490885578174-acda8905c2c6.avif')";
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.maxWidth = '100vw';
      document.body.style.height = '100vh';
    } else if (pathname === '/main') {
      document.body.style.backgroundImage = "url('/images/photo-1587334207810-4915c4e40c67.avif')";
      // TODO: to choose background // document.body.style.backgroundImage = "url('/images/photo-1454944338482-a69bb95894af.avif')";
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.maxWidth = '100vw';
      document.body.style.height = '100vh';
    } else {
      document.body.style.backgroundImage = '';
    }
  }, [pathname]);

  return <>{children}</>;
}
