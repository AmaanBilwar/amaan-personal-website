'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function OntologyTextToSqlBlog() {
  const { t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is', title: t('blog.introducing-jia.section1.title') },
      { id: 'why-matter', title: t('blog.introducing-jia.section2.title') },
      { id: 'building', title: t('blog.introducing-jia.section3.title') },
      { id: 'how-engines', title: t('blog.introducing-jia.section4.title') },
      { id: 'vs-other', title: t('blog.introducing-jia.section6.title') },
      { id: 'future', title: t('blog.introducing-jia.section7.title') },
    ],
    [t],
  );

  useEffect(() => {
    // Update document title for client-side
    document.title = `${t('blog.introducing-jia.title')} | Amaan Bilwar`;
  }, [t]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
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
            {t('blog.introducing-jia.title')}
          </h1>
          <p className="text-stone-500 text-sm mb-6">{t('blog.introducing-jia.date')}</p>

          {/* Cover image */}
          <img
            src="/blogs/introducing-jia/placeholder.svg"
            alt={t('blog.introducing-jia.coverAlt')}
            className="w-full mb-6"
          />
          <hr className="border-stone-700 mb-8" />

          {/* Content */}
          <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            <section>
              <h2
                id="what-is"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.introducing-jia.section1.title')}
              </h2>
              <p>{t('blog.introducing-jia.section1.p1')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section1.p2')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/introducing-jia/placeholder.svg"
                  alt={t('blog.introducing-jia.section1.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.introducing-jia.section1.imageCaption')}
                </figcaption>
              </figure>
            </section>

            <section>
              <h2
                id="why-matter"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.introducing-jia.section2.title')}
              </h2>
              <p>{t('blog.introducing-jia.section2.p1')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section2.p2')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.introducing-jia.section2.listItem1')}</li>
                <li>• {t('blog.introducing-jia.section2.listItem2')}</li>
                <li>• {t('blog.introducing-jia.section2.listItem3')}</li>
                <li>• {t('blog.introducing-jia.section2.listItem4')}</li>
              </ul>
              <figure className="mt-6">
                <img
                  src="/blogs/introducing-jia/placeholder.svg"
                  alt={t('blog.introducing-jia.section2.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.introducing-jia.section2.imageCaption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.introducing-jia.section2.p3')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section2.p4')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section2.p5')}</p>
            </section>

            <section>
              <h2
                id="building"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.introducing-jia.section3.title')}
              </h2>
              <p>{t('blog.introducing-jia.section3.p1')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/introducing-jia/placeholder.svg"
                  alt={t('blog.introducing-jia.section3.image1Alt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.introducing-jia.section3.image1Caption')}
                </figcaption>
              </figure>

              <figure className="mt-6">
                <img
                  src="/blogs/introducing-jia/placeholder.svg"
                  alt={t('blog.introducing-jia.section3.image2Alt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.introducing-jia.section3.image2Caption')}
                </figcaption>
              </figure>
            </section>

            <section>
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.introducing-jia.section3.subsection.title')}
              </h3>
              <p>{t('blog.introducing-jia.section3.subsection.p1')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section3.subsection.p2')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section3.subsection.p3')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.introducing-jia.section3.subsection.listItem1')}</li>
                <li>• {t('blog.introducing-jia.section3.subsection.listItem2')}</li>
                <li>• {t('blog.introducing-jia.section3.subsection.listItem3')}</li>
              </ul>
              <p className="mt-4">{t('blog.introducing-jia.section3.subsection.p4')}</p>
            </section>

            <section>
              <h2
                id="how-engines"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.introducing-jia.section4.title')}
              </h2>
              <p>{t('blog.introducing-jia.section4.p1')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section4.p2')}</p>
              <p className="mt-4">{t('blog.introducing-jia.section4.p3')}</p>
            </section>
          </div>

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
