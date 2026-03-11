import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { Poppins } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={clsx(poppins.variable, 'antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "SMP RAJAWALI '96 - Mencetak Generasi Cerdas & Berakhlak Mulia",
  description: 'Website resmi SMP RAJAWALI. Menghadirkan ekosistem pendidikan modern yang memadukan keunggulan akademik dengan pembentukan karakter.',
  icons: {
    icon: '/images/logo.webp',
  },
};
