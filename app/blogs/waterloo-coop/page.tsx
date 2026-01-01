'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function WaterlooCoopBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Update document title for client-side
    document.title = "my thoughts on waterloo's co-op program | Nicholas Chen";
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          my thoughts on waterloo's co-op program
        </h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.waterlooCoop.date')}</p>

        {/* Cover image */}
        <img src="/blogs/waterloo-coop/1b-sankey.png" alt="Waterloo Co-op" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-6 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <p>
            since studying at the university of waterloo, the most common thing i hear being talked about on campus is the school's co-op program.
          </p>

          <p>
            back in high school when i was still deciding between universities, the only school i really wanted to go to was waterloo for the sole reason that they had their own co-op program. i heard many great things about the opportunities it gives, the different countries you could work in and how so many graduating students already had jobs lined up because of the 2+ years of work experience that gave them that extra advantage.
          </p>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
