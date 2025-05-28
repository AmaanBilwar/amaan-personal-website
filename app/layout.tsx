'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Link from 'next/link';
import Footer from '@/components/footer/footer';
import { usePathname } from 'next/navigation';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${jetbrainsMono.className} bg-[#1a1a1a] min-h-screen antialiased`}
      >
        {/* Easter egg button */}
        {pathname !== '/draw' && (
          <Link
            href="/draw"
            className="fixed bottom-6 right-6 px-5 py-3 bg-[#232323] hover:bg-[#2d2d2d] border border-stone-500 text-white rounded-full flex items-center justify-center text-base shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 z-50 gap-2"
            title="Draw something!"
          >
            <span>Draw</span>
          </Link>
        )}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import './globals.css';
