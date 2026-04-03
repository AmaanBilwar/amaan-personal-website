'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function Git101Blog() {
  const { t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'well-well-well', title: t('blog.git101.section1.title') },
      { id: 'merge-conflicts', title: t('blog.git101.section2.title') },
      { id: 'rebasing', title: t('blog.git101.section3.title') },
      { id: 'cherry-picking', title: t('blog.git101.section4.title') },
      { id: 'digestive-commits', title: t('blog.git101.section5.title') },
      { id: 'sane-prs', title: t('blog.git101.section6.title') },
    ],
    [t],
  );

  useEffect(() => {
    document.title = `${t('blog.git101.title')} | Amaan Bilwar`;
  }, [t]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <article className="w-full lg:max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
          >
            <svg aria-label="Go back" width="16" height="16" viewBox="0 0 16 16" fill="none">
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

          <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
            {t('blog.git101.title')}
          </h1>
          <p className="text-stone-500 text-sm mb-6">{t('blog.git101.date')}</p>

          <hr className="border-stone-700 mb-8" />

          <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            <section>
              <h2
                id="well-well-well"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section1.title')}
              </h2>
              <p>{t('blog.git101.section1.p1')}</p>
              <figure className="mt-6">
                <img
                  src="https://i.pinimg.com/736x/87/8d/a6/878da673016277904bd8c0002396cce7.jpg"
                  alt="Explosion meme when you realize Git is not just 'git add .'"
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.git101.section1.imageCaption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.git101.section1.p2')}</p>
              <p className="mt-4 text-stone-400">{t('blog.git101.section1.p3')}</p>
            </section>

            <section>
              <h2
                id="merge-conflicts"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section2.title')}
              </h2>
              <p>{t('blog.git101.section2.p1')}</p>
              <p className="mt-4">{t('blog.git101.section2.p2')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.git101.section2.listItem1')}</li>
                <li>• {t('blog.git101.section2.listItem2')}</li>
                <li>• {t('blog.git101.section2.listItem3')}</li>
                <li>• {t('blog.git101.section2.listItem4')}</li>
              </ul>
              <p className="mt-4">{t('blog.git101.section2.p3')}</p>
            </section>

            <section>
              <h2
                id="rebasing"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section3.title')}
              </h2>
              <p>{t('blog.git101.section3.p1')}</p>
              <figure className="mt-6">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*LFtbSIWWXBrcHMD9.jpg"
                  alt={t('blog.git101.section3.image1Alt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.git101.section3.image1Caption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.git101.section3.p2')}</p>
              <p className="mt-4">{t('blog.git101.section3.p3')}</p>

              <h3 className="text-sm md:text-base font-semibold text-stone-200 mt-8 mb-3">
                {t('blog.git101.section3.subsection.title')}
              </h3>
              <p>{t('blog.git101.section3.subsection.p1')}</p>
              <p className="mt-4">{t('blog.git101.section3.subsection.p2')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.git101.section3.subsection.listItem1')}</li>
                <li>• {t('blog.git101.section3.subsection.listItem2')}</li>
                <li>• {t('blog.git101.section3.subsection.listItem3')}</li>
              </ul>
            </section>

            <section>
              <h2
                id="cherry-picking"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section4.title')}
              </h2>
              <p>{t('blog.git101.section4.p1')}</p>
              <p className="mt-4">{t('blog.git101.section4.p2')}</p>
              <p className="mt-4">{t('blog.git101.section4.p3')}</p>
              <p className="mt-4">{t('blog.git101.section4.p4')}</p>
              <p className="mt-4">{t('blog.git101.section4.p5')}</p>
            </section>

            <section>
              <h2
                id="digestive-commits"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section5.title')}
              </h2>
              <p>{t('blog.git101.section5.p1')}</p>
              <p className="mt-4">{t('blog.git101.section5.p2')}</p>
            </section>

            <section>
              <h2
                id="sane-prs"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.git101.section6.title')}
              </h2>
              <p>
                <span className="text-stone-100 font-medium">
                  {t('blog.git101.section6.item1.title')}
                </span>{' '}
                {t('blog.git101.section6.item1.text')}
              </p>
              <p className="mt-4">
                <span className="text-stone-100 font-medium">
                  {t('blog.git101.section6.item2.title')}
                </span>{' '}
                {t('blog.git101.section6.item2.text')}
              </p>
              <p className="mt-4">
                <span className="text-stone-100 font-medium">
                  {t('blog.git101.section6.item3.title')}
                </span>{' '}
                {t('blog.git101.section6.item3.text')}
              </p>
            </section>

            <section>
              <p className="text-stone-400 italic">{t('blog.git101.section7.p1')}</p>
            </section>

            <section className="border-t border-stone-700 pt-6 mt-8">
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.git101.referencesTitle')}
              </h3>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>
                  <a
                    href={t('blog.git101.references.item1')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.git101.references.item1')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.git101.references.item2')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.git101.references.item2')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.git101.references.item3')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.git101.references.item3')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.git101.references.item4')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.git101.references.item4')}
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
