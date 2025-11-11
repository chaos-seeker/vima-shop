'use client';

import { Footer } from '@/containers/layout/base/footer';
import { Header } from '@/containers/layout/base/header';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export default function LayoutBase(props: ILayoutProps) {
  const pathname = usePathname();
  const isRouteAuth = pathname.includes('/auth');
  if (isRouteAuth) {
    return props.children;
  }

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
