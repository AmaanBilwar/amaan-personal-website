'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function PersonalWebsiteBlog() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = `${t('blog.website.title')} | Nicholas Chen`;
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{t('blog.website.title')}</h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.website.date')}</p>

        {/* Cover image */}
        <img src="/blogs/personal-website/github-repo.png" alt="GitHub Repository" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>{t('blog.website.intro')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.website.techStackTitle')}
            </h2>
            <p>{t('blog.website.techStackText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.website.designTitle')}
            </h2>
            <p>{t('blog.website.designText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.website.processTitle')}
            </h2>
            <p>{t('blog.website.processText')}</p>
          </section>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
