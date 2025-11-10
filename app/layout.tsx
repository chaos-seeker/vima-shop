import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ویما شاپ',
  description: 'یک فروشگاه اینترنتی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
