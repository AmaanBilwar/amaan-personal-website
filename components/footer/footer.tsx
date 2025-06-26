'use client';

import { useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-stone-700 py-4">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-start md:justify-between px-4">
        <span className="text-stone-400 text-sm tracking-widest font-minecraft ml-8">
          {t('footer.copyright')}{' '}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-stone-400 text-sm font-minecraft ml-4">{t('footer.by')}</span>
        </span>
      </div>
    </footer>
  );
}
