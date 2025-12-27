'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OntologyTextToSqlBlog() {
  const { language, setLanguage, t } = useLanguage();

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
          {t('blog.ontology.title')}
        </h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.ontology.date')}</p>

        {/* Cover image */}
        <img
          src="/blogs/ontology/ontology.png"
          alt="TextQL Ontology Interface"
          className="w-full mb-6"
        />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.whatIsTitle')}
            </h2>
            <p>{t('blog.ontology.whatIsP1')}</p>
            <p className="mt-4">{t('blog.ontology.whatIsP2')}</p>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/map.jpeg"
                alt={t('blog.ontology.mapAlt')}
                className="w-full"
              />
            </figure>
            <p className="mt-4">{t('blog.ontology.whatIsP3')}</p>
          </section>

          <section>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.ontology.simpleExampleTitle')}
            </h3>
            <p>{t('blog.ontology.simpleExampleP1')}</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.whyMatterTitle')}
            </h2>
            <p>{t('blog.ontology.whyMatterP1')}</p>
            <p className="mt-4">{t('blog.ontology.whyMatterP2')}</p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• {t('blog.ontology.whyMatterLi1')}</li>
              <li>• {t('blog.ontology.whyMatterLi2')}</li>
              <li>• {t('blog.ontology.whyMatterLi3')}</li>
              <li>• {t('blog.ontology.whyMatterLi4')}</li>
            </ul>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/graphs.jpeg"
                alt={t('blog.ontology.graphsAlt')}
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                {t('blog.ontology.graphsAlt')}
              </figcaption>
            </figure>
            <p className="mt-4">{t('blog.ontology.whyMatterP3')}</p>
            <p className="mt-4">{t('blog.ontology.whyMatterP4')}</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.buildingTitle')}
            </h2>
            <p>{t('blog.ontology.buildingP1')}</p>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/adding-objects.jpeg"
                alt={t('blog.ontology.addingObjectsAlt')}
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                {t('blog.ontology.addingObjectsAlt')}
              </figcaption>
            </figure>
            <p className="mt-4">{t('blog.ontology.buildingP2')}</p>
            <p className="mt-4">{t('blog.ontology.buildingP3')}</p>
            <p className="mt-4">{t('blog.ontology.buildingP4')}</p>
            <p className="mt-4">{t('blog.ontology.buildingP5')}</p>
            <p className="mt-4">{t('blog.ontology.buildingP6')}</p>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/attrs.jpeg"
                alt={t('blog.ontology.attrsAlt')}
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                {t('blog.ontology.attrsAlt')}
              </figcaption>
            </figure>
          </section>

          <section>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.ontology.goodEnoughTitle')}
            </h3>
            <p>{t('blog.ontology.goodEnoughP1')}</p>
            <p className="mt-4">{t('blog.ontology.goodEnoughP2')}</p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• {t('blog.ontology.goodEnoughLi1')}</li>
              <li>• {t('blog.ontology.goodEnoughLi2')}</li>
              <li>• {t('blog.ontology.goodEnoughLi3')}</li>
              <li>• {t('blog.ontology.goodEnoughLi4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.howEnginesTitle')}
            </h2>
            <p>{t('blog.ontology.howEnginesP1')}</p>
            <p className="mt-4">{t('blog.ontology.howEnginesP2')}</p>
            <p className="mt-4">{t('blog.ontology.howEnginesP3')}</p>
            <p className="mt-4">{t('blog.ontology.howEnginesP4')}</p>
            <p className="mt-4">{t('blog.ontology.howEnginesP5')}</p>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/chat.png"
                alt={t('blog.ontology.chatAlt')}
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                {t('blog.ontology.chatAlt')}
              </figcaption>
            </figure>
          </section>

          <section>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.ontology.ambiguityTitle')}
            </h3>
            <p>{t('blog.ontology.ambiguityP1')}</p>
            <p className="mt-4">{t('blog.ontology.ambiguityP2')}</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.vsOtherTitle')}
            </h2>
            <p>
              <span className="text-stone-100 font-medium">
                {t('blog.ontology.vsOther.dbtTitle')}
              </span>{' '}
              {t('blog.ontology.vsOther.dbtText')}
            </p>
            <p className="mt-4">
              <span className="text-stone-100 font-medium">
                {t('blog.ontology.vsOther.biTitle')}
              </span>{' '}
              {t('blog.ontology.vsOther.biText')}
            </p>
            <p className="mt-4">
              <span className="text-stone-100 font-medium">
                {t('blog.ontology.vsOther.viewsTitle')}
              </span>{' '}
              {t('blog.ontology.vsOther.viewsText')}
            </p>
            <figure className="mt-6">
              <img
                src="/blogs/ontology/sources.png"
                alt={t('blog.ontology.sourcesAlt')}
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                {t('blog.ontology.sourcesAlt')}
              </figcaption>
            </figure>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              {t('blog.ontology.futureTitle')}
            </h2>
            <p>{t('blog.ontology.futureP1')}</p>
            <p className="mt-4">{t('blog.ontology.futureP2')}</p>
            <p className="mt-4">{t('blog.ontology.futureP3')}</p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.ontology.referencesTitle')}
            </h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://builtin.com/data-science/ontology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  builtin.com/data-science/ontology
                </a>
              </li>
              <li>
                <a
                  href="http://blog.palantir.com/ontology-finding-meaning-in-data-palantir-rfx-blog-series-1-399bd1a5971b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  blog.palantir.com - ontology finding meaning in data
                </a>
              </li>
              <li>
                <a
                  href="https://www.palantir.com/docs/foundry/ontology/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  palantir.com/docs/foundry/ontology/overview
                </a>
              </li>
              <li>
                <a
                  href="https://docs.textql.com/core/how-it-works/ontology/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  docs.textql.com - ontology overview
                </a>
              </li>
            </ul>
            <p className="mt-4 text-stone-500 text-xs italic">
              {t('blog.ontology.note')}{' '}
              <a
                href="https://textql.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-300 underline"
              >
                textql
              </a>
            </p>
          </section>
        </div>

        {/* Footer nav with social icons and right-aligned navigation/language */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-stone-400 max-w-lg">
          {/* Social media icons */}
          <a
            href="mailto:nicholas.chen243@gmail.com"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>
          <a
            href="https://github.com/nicholaschen09"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://x.com/nicholaschen__"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <div className="ml-auto flex items-center">
            {/* Language switcher */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'en'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                EN
              </button>
              <span className="text-stone-600">/</span>
              <button
                type="button"
                onClick={() => setLanguage('zh')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'zh'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
