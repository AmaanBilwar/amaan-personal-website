import type { Metadata } from 'next';
import type React from 'react';
import localFont from 'next/font/local';
import './globals.css';

const minecraft = localFont({
  src: '../public/fonts/MinecraftRegular-Bmg3.otf',
  variable: '--font-minecraft',
});

export const metadata: Metadata = {
  title: 'amaan',
  metadataBase: new URL('https://amaandoes.tech'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={minecraft.variable}>
      <body className={`bg-[#1a1a1a] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
