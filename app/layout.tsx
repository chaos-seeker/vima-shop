import type { Metadata } from 'next';
import { iranSansX } from '@/constants/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'ویما شاپ',
  description: 'فروشگاه اینترنتی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={iranSansX.variable}>
      <body className={iranSansX.className}>{children}</body>
    </html>
  );
}
