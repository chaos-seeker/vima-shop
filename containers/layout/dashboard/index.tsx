import type { PropsWithChildren } from 'react';

export default function LayoutDashboard(props: PropsWithChildren) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}
