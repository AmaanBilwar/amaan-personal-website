'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Link from 'next/link';
import Footer from '@/components/footer/footer';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

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
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5WMQFTCH');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body
        className={`${jetbrainsMono.className} bg-[#1a1a1a] min-h-screen antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WMQFTCH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        {/* Blogs button */}
        {pathname !== '/blogs' && (
          <Link
            href="/blogs"
            className="fixed bottom-6 left-6 px-5 py-3 bg-[#232323] hover:bg-[#2d2d2d] border border-stone-500 text-white rounded-full flex items-center justify-center text-base shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 z-50 gap-2"
            title="Read my blogs!"
          >
            <span>Blogs</span>
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
