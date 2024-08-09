import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700', '400'],
});

export const metadata: Metadata = {
  title: 'Kleopatra Emmanouil',
  description: 'Kleopatra the best UX Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={spaceMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
