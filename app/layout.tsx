import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Nicholas Chen | Portfolio',
  description:
    'Personal website of Nicholas Chen, Systems Design Engineering student',
  generator: 'v0.dev',
};

export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
