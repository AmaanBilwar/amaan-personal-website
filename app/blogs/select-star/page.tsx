'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function SelectStarBlog() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = `${t('blog.selectStar.title')} | Nicholas Chen`;
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <article className="w-full lg:max-w-lg">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t('blog.back')}
          </Link>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
            {t('blog.selectStar.title')}
          </h1>
          <p className="text-stone-500 text-sm mb-6">{t('blog.selectStar.date')}</p>

          <hr className="border-stone-700 mb-8" />

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
