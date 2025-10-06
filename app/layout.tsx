import Header from '@/components/ui/header';
import LanguageProvider from '@/components/logic/languageProvider';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Charts for Dashboard',
};

// Montserrat Google Font
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} px-8 py-9`}>
        <LanguageProvider>
          <Header font={montserrat.variable} />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
