import { Header } from './header';
import type { PropsWithChildren } from 'react';

export default function LayoutDashboard(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
