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
        <header
          className={`${montserrat.variable} border-b border-b-[#0000001A] flex justify-between`}
        >
          <h2 className="text-primary text-[23px] font-medium">
            Welcome Back, Super Admin
          </h2>
          <h3 className="text-black text-lg font-medium">Dashboard</h3>
        </header>
        {children}
      </body>
    </html>
  );
}
