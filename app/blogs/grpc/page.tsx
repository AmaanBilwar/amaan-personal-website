'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function GrpcBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.title = `${t('blog.grpc.title')} | Nicholas Chen`;
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{t('blog.grpc.title')}</h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.grpc.date')}</p>

        {/* Cover image */}
        <img src="/blogs/grpc/grpc_logo.png" alt="gRPC" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>{t('blog.grpc.intro')}</p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whatIsTitle')}
            </h2>
            <p>{t('blog.grpc.whatIsText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.howItWorksTitle')}
            </h2>
            <p>{t('blog.grpc.howItWorksText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whyGoodTitle')}
            </h2>
            <p>{t('blog.grpc.whyGoodText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.grpcWithGoTitle')}
            </h2>
            <p>{t('blog.grpc.grpcWithGoText')}</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.vsRestTitle')}
            </h2>
            <p>{t('blog.grpc.vsRestText')}</p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.grpc.referencesTitle')}
            </h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a href="https://grpc.io/docs/" className="hover:text-stone-200 underline">
                  official gRPC docs
                </a>
              </li>
              <li>
                <a href="https://github.com/grpc/grpc-go" className="hover:text-stone-200 underline">
                  gRPC go repository
                </a>
              </li>
              <li>
                <a href="https://protobuf.dev/" className="hover:text-stone-200 underline">
                  protocol buffers documentation
                </a>
              </li>
            </ul>
          </section>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
