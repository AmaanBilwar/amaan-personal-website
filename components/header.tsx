'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-full md:max-w-3xl">
      <div className="bg-gray-400/12 backdrop-blur-md border border-white/20 rounded-3xl px-3 md:px-8 py-2 md:py-3 flex items-center gap-2 md:gap-6 max-w-full">
        {/* Logo */}
        <div className="relative group flex-shrink-0">
          <Link
            href="/"
            className={`flex items-center transition-all duration-200 p-1 rounded-full ${pathname === '/'
              ? 'opacity-100'
              : 'hover:opacity-80 hover:bg-stone-800'
              }`}
            aria-label={t('nav.home')}
          >
            <img
              src="/ghcat.png"
              alt="Nicholas Chen"
              className="h-7 md:h-9 w-auto rounded-sm"
            />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded bg-stone-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
            {t('nav.home')}
          </span>
        </div>

        {/* Navigation - Show all links */}
        <nav className="flex items-center flex-1 justify-center">
          <div className="flex gap-2 md:gap-6 lg:gap-8 xl:gap-10 items-center">
            <a href="mailto:nicholas.chen243@gmail.com" className="uppercase tracking-widest text-[9px] md:text-xs text-stone-400 hover:text-white transition-colors">{t('nav.contact')}</a>
            <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-[9px] md:text-xs text-stone-400 hover:text-white transition-colors">{t('nav.linkedin')}</a>
            <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-[9px] md:text-xs text-stone-400 hover:text-white transition-colors">{t('nav.github')}</a>
            <a href="https://x.com/nicholaschen__" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-[9px] md:text-xs text-stone-400 hover:text-white transition-colors">Twitter/X</a>
          </div>
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
          <span className={`text-[9px] md:text-xs transition-colors duration-200 ${language === 'en' ? 'text-white' : 'text-stone-500'}`}>
            EN
          </span>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="relative inline-flex h-4 w-7 md:h-5 md:w-9 lg:h-6 lg:w-11 items-center rounded-full bg-stone-600 transition-colors duration-200 focus:outline-none hover:bg-stone-500"
            role="switch"
            aria-checked={language === 'zh'}
            aria-label="Toggle language"
          >
            <span
              className={`inline-block h-2.5 w-2.5 md:h-3 md:w-3 lg:h-4 lg:w-4 transform rounded-full bg-white transition-transform duration-200 ${language === 'zh' ? 'translate-x-3.5 md:translate-x-5 lg:translate-x-6' : 'translate-x-0.5 md:translate-x-1 lg:translate-x-1'
                }`}
            />
          </button>
          <span className={`text-[9px] md:text-xs transition-colors duration-200 ${language === 'zh' ? 'text-white' : 'text-stone-500'}`}>
            中文
          </span>
        </div>
      </div>
    </header>
  );
}
