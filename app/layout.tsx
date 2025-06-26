'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import Link from 'next/link';
import Footer from '@/components/footer/footer';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import NavigationButtons from '@/components/NavigationButtons';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

const minecraft = localFont({
  src: '../public/fonts/MinecraftRegular-Bmg3.otf',
  variable: '--font-minecraft',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <LanguageProvider>
      <html lang="en" className={`${jetbrainsMono.variable} ${minecraft.variable} font-minecraft`}>
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
          className={`bg-[#1a1a1a] min-h-screen antialiased font-minecraft`}
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
          {/* Navigation buttons */}
          <NavigationButtons />
          <LanguageToggle />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}

import './globals.css';
