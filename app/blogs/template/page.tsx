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
      { id: 'what-is', title: t('blog.template.section1.title') },
      { id: 'why-matter', title: t('blog.template.section2.title') },
      { id: 'building', title: t('blog.template.section3.title') },
      { id: 'how-engines', title: t('blog.template.section4.title') },
      { id: 'vs-other', title: t('blog.template.section6.title') },
      { id: 'future', title: t('blog.template.section7.title') },
    ],
    [t],
  );

  useEffect(() => {
    // Update document title for client-side
    document.title = `${t('blog.template.title')} | Amaan Bilwar`;
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
            {t('blog.template.title')}
          </h1>
          <p className="text-stone-500 text-sm mb-6">{t('blog.template.date')}</p>

          {/* Cover image */}
          <img
            src="/blogs/template/placeholder.svg"
            alt={t('blog.template.coverAlt')}
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
                {t('blog.template.section1.title')}
              </h2>
              <p>{t('blog.template.section1.p1')}</p>
              <p className="mt-4">{t('blog.template.section1.p2')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section1.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section1.imageCaption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.template.section1.p3')}</p>
            </section>

            <section>
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.template.section1.subsection.title')}
              </h3>
              <p>{t('blog.template.section1.subsection.p1')}</p>
            </section>

            <section>
              <h2
                id="why-matter"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.template.section2.title')}
              </h2>
              <p>{t('blog.template.section2.p1')}</p>
              <p className="mt-4">{t('blog.template.section2.p2')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.template.section2.listItem1')}</li>
                <li>• {t('blog.template.section2.listItem2')}</li>
                <li>• {t('blog.template.section2.listItem3')}</li>
                <li>• {t('blog.template.section2.listItem4')}</li>
              </ul>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section2.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section2.imageCaption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.template.section2.p3')}</p>
              <p className="mt-4">{t('blog.template.section2.p4')}</p>
            </section>

            <section>
              <h2
                id="building"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.template.section3.title')}
              </h2>
              <p>{t('blog.template.section3.p1')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section3.image1Alt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section3.image1Caption')}
                </figcaption>
              </figure>
              <p className="mt-4">{t('blog.template.section3.p2')}</p>
              <p className="mt-4">{t('blog.template.section3.p3')}</p>
              <p className="mt-4">{t('blog.template.section3.p4')}</p>
              <p className="mt-4">{t('blog.template.section3.p5')}</p>
              <p className="mt-4">{t('blog.template.section3.p6')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section3.image2Alt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section3.image2Caption')}
                </figcaption>
              </figure>
            </section>

            <section>
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.template.section3.subsection.title')}
              </h3>
              <p>{t('blog.template.section3.subsection.p1')}</p>
              <p className="mt-4">{t('blog.template.section3.subsection.p2')}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t('blog.template.section3.subsection.listItem1')}</li>
                <li>• {t('blog.template.section3.subsection.listItem2')}</li>
                <li>• {t('blog.template.section3.subsection.listItem3')}</li>
                <li>• {t('blog.template.section3.subsection.listItem4')}</li>
              </ul>
            </section>

            <section>
              <h2
                id="how-engines"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.template.section4.title')}
              </h2>
              <p>{t('blog.template.section4.p1')}</p>
              <p className="mt-4">{t('blog.template.section4.p2')}</p>
              <p className="mt-4">{t('blog.template.section4.p3')}</p>
              <p className="mt-4">{t('blog.template.section4.p4')}</p>
              <p className="mt-4">{t('blog.template.section4.p5')}</p>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section4.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section4.imageCaption')}
                </figcaption>
              </figure>
            </section>

            <section>
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.template.section5.title')}
              </h3>
              <p>{t('blog.template.section5.p1')}</p>
              <p className="mt-4">{t('blog.template.section5.p2')}</p>
            </section>

            <section>
              <h2
                id="vs-other"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.template.section6.title')}
              </h2>
              <p>
                <span className="text-stone-100 font-medium">
                  {t('blog.template.section6.item1.title')}
                </span>{' '}
                {t('blog.template.section6.item1.text')}
              </p>
              <p className="mt-4">
                <span className="text-stone-100 font-medium">
                  {t('blog.template.section6.item2.title')}
                </span>{' '}
                {t('blog.template.section6.item2.text')}
              </p>
              <p className="mt-4">
                <span className="text-stone-100 font-medium">
                  {t('blog.template.section6.item3.title')}
                </span>{' '}
                {t('blog.template.section6.item3.text')}
              </p>
              <figure className="mt-6">
                <img
                  src="/blogs/template/placeholder.svg"
                  alt={t('blog.template.section6.imageAlt')}
                  className="w-full"
                />
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.template.section6.imageCaption')}
                </figcaption>
              </figure>
            </section>

            <section>
              <h2
                id="future"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t('blog.template.section7.title')}
              </h2>
              <p>{t('blog.template.section7.p1')}</p>
              <p className="mt-4">{t('blog.template.section7.p2')}</p>
              <p className="mt-4">{t('blog.template.section7.p3')}</p>
            </section>

            <section className="border-t border-stone-700 pt-6 mt-8">
              <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                {t('blog.template.referencesTitle')}
              </h3>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>
                  <a
                    href={t('blog.template.references.item1')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.template.references.item1')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.template.references.item2')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.template.references.item2')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.template.references.item3')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.template.references.item3')}
                  </a>
                </li>
                <li>
                  <a
                    href={t('blog.template.references.item4')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-200 transition-colors underline"
                  >
                    {t('blog.template.references.item4')}
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-stone-500 text-xs italic">
                {t('blog.template.note')}{' '}
                <a
                  href={t('blog.template.noteLinkUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-300 underline"
                >
                  {t('blog.template.noteLinkLabel')}
                </a>
              </p>
            </section>
          </div>

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
