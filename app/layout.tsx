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
          {/* Google Analytics Script */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-J6HJSY8DQ4"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-J6HJSY8DQ4');
                `,
            }}
          />
        </Head>
        <body
          className={`bg-[#1a1a1a] min-h-screen antialiased font-minecraft`}
        >
          
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
