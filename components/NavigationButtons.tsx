'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NavigationButtons() {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <>
            {/* Draw button */}
            {pathname !== '/draw' && (
                <Link
                    href="/draw"
                    className="fixed bottom-6 right-6 px-5 py-3 bg-[#232323] border border-stone-500 text-white rounded-full flex items-center justify-center text-base shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 z-50 gap-2 hover:scale-110 transition-transform duration-200"
                    title={t('nav.draw.title')}
                >
                    <span>{t('nav.draw')}</span>
                </Link>
            )}

            {/* Blogs button */}
            <a
                href="https://medium.com/@nicholas.chen243"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 px-5 py-3 bg-[#232323] border border-stone-500 text-white rounded-full flex items-center justify-center text-base shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 z-50 gap-2 hover:scale-110 transition-transform duration-200"
                title={t('nav.blogs.title')}
            >
                <span>{t('nav.blogs')}</span>
            </a>
        </>
    );
} 