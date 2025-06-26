'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <div
            className="fixed top-6 right-6 z-50 flex items-center gap-2 font-minecraft"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Language labels */}
            <span className={`text-sm transition-colors duration-200 ${language === 'en' ? 'text-white' : 'text-stone-500'}`}>
                EN
            </span>

            {/* Toggle slider */}
            <button
                onClick={toggleLanguage}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-stone-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a1a1a] hover:bg-stone-500"
                role="switch"
                aria-checked={language === 'zh'}
                aria-label="Toggle language"
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${language === 'zh' ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </button>

            <span className={`text-sm transition-colors duration-200 ${language === 'zh' ? 'text-white' : 'text-stone-500'}`}>
                中文
            </span>

            {/* Tooltip on hover */}
            {isHovered && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {language === 'en' ? 'Switch to Chinese' : '切换到英文'}
                </div>
            )}
        </div>
    );
} 