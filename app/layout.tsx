import type { Metadata } from 'next';
import { iranSansX } from '@/constants/fonts';
import './globals.css';
import { Providers } from './providers';
import { headers } from 'next/headers';
import LayouBase from '@/containers/layout/base';
import LayouDashboard from '@/containers/layout/dashboard';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'ویما شاپ',
  description: 'فروشگاه اینترنتی',
};

export default async function RootLayout(props: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname')!;
  const isDashboard = pathname.includes('/dashboard');

  return (
    <html lang="fa" dir="rtl" className={iranSansX.variable}>
      <body className={iranSansX.className}>
        <Providers>
          {isDashboard ? (
            <LayouDashboard>{props.children}</LayouDashboard>
          ) : (
            <LayouBase>{props.children}</LayouBase>
          )}
        </Providers>
      </body>
    </html>
  );
}
