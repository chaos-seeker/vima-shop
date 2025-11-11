'use client';

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
      <main className="flex flex-1 justify-center">{props.children}</main>
    </>
  );
}
