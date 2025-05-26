'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Link from 'next/link';

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
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${jetbrainsMono.className} bg-[#1a1a1a] min-h-screen antialiased`}
      >
        {/* Easter egg button */}
        <Link
          href="/draw"
          className="fixed bottom-4 right-4 w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-sm opacity-50 hover:opacity-100 transition-all duration-300 z-50"
          title="Easter egg"
        >
          🎨
        </Link>
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
