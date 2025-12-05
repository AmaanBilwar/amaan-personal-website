'use client';
import SearchBar from '@/components/search/search';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();


  // Hydration safety
  const [mounted, setMounted] = useState(false);

  // Typewriter effect state
  const baseText = t('hero.greeting');
  const fullName = t('hero.name.full');
  const shortName = t('hero.name.short');

  const [displayText, setDisplayText] = useState(baseText); // Initialize with base text to prevent hydration mismatch
  const [phase, setPhase] = useState<'typingFull' | 'backspacingFull' | 'typingShort' | 'backspacingShort'>('typingFull');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Only run animation after component mounts

    let timeout: NodeJS.Timeout | undefined;
    if (phase === 'typingFull') {
      if (charIndex <= fullName.length) {
        setDisplayText(baseText + fullName.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 120);
      } else {
        timeout = setTimeout(() => setPhase('backspacingFull'), 1000);
      }
    } else if (phase === 'backspacingFull') {
      if (charIndex > 0) {
        setDisplayText(baseText + fullName.slice(0, charIndex - 1));
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 80);
      } else {
        setPhase('typingShort');
        setCharIndex(0);
      }
    } else if (phase === 'typingShort') {
      if (charIndex <= shortName.length) {
        setDisplayText(baseText + shortName.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 120);
      } else {
        timeout = setTimeout(() => setPhase('backspacingShort'), 1000);
      }
    } else if (phase === 'backspacingShort') {
      if (charIndex > 0) {
        setDisplayText(baseText + shortName.slice(0, charIndex - 1));
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 80);
      } else {
        setPhase('typingFull');
        setCharIndex(0);
      }
    }
    return () => clearTimeout(timeout);
  }, [mounted, phase, charIndex, baseText, fullName, shortName]);

  if (!mounted) {
    return (
      <main className="flex min-h-screen flex-col items-center p-4 md:p-12 overflow-x-hidden md:ml-10 -mt-4 relative z-10">
        <div className="max-w-3xl w-full space-y-3 md:space-y-3 mb-6 md:mb-8 pt-24 md:pt-32 mx-auto md:mx-0 md:ml-16">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 min-h-[3.5rem]">
            {baseText}
          </h1>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 overflow-x-hidden md:ml-10 -mt-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-3xl w-full space-y-3 md:space-y-3 mb-6 md:mb-8 pt-24 md:pt-32 mx-auto md:mx-0 md:ml-16">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 min-h-[3.5rem]">
            {displayText}
            {mounted && <span className="animate-pulse">|</span>}
          </h1>
          <div className="text-xs text-stone-400 space-y-1">
            <p className="text-sm text-stone-400">
              {(() => {
                const text = t('hero.location');
                // Split by toronto first
                const torontoParts = text.split('toronto');
                const result: (string | React.ReactElement)[] = [];

                torontoParts.forEach((part, index) => {
                  // Handle new york city in each part
                  const nycParts = part.split('nyc');
                  nycParts.forEach((nycPart, nycIndex) => {
                    result.push(nycPart);
                    if (nycIndex < nycParts.length - 1) {
                      result.push(
                        <a
                          key={`nyc-${index}-${nycIndex}`}
                          href="https://www.nyctourism.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-stone-100 transition-colors"
                        >
                          nyc
                        </a>
                      );
                    }
                  });

                  if (index < torontoParts.length - 1) {
                    result.push(
                      <a
                        key={`toronto-${index}`}
                        href="https://www.destinationtoronto.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-stone-100 transition-colors"
                      >
                        toronto
                      </a>
                    );
                  }
                });

                return result;
              })()}
            </p>
            <p className="text-sm text-stone-400">
              {(() => {
                const text = t('hero.building');
                const dayMatch = text.match(/(\d+)\s*(?:days|天)/i);
                if (dayMatch) {
                  const days = parseInt(dayMatch[1]);
                  const years = (days / 365.25).toFixed(1);
                  const beforeDays = text.substring(0, text.indexOf(dayMatch[0]));
                  const afterDays = text.substring(text.indexOf(dayMatch[0]) + dayMatch[0].length);

                  return (
                    <>
                      {beforeDays}
                      <span className="relative group">
                        <span className="cursor-pointer underline underline-offset-2 hover:text-stone-100 transition-colors">
                          {dayMatch[0]}
                        </span>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-stone-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                          {years} years
                        </span>
                      </span>
                      {afterDays}
                    </>
                  );
                }
                return text;
              })()}
            </p>
          </div>

          <div>
            <p className="mb-4 text-stone-300">{t('hero.currently')}</p>
            <ul className="text-sm text-stone-400 space-y-1">
              <li>
                {(() => {
                  const text = t('hero.current1');
                  // Split by 'syde' or '系统设计工程' depending on language
                  const parts = text.split(/(syde|系统设计工程)/i);

                  return parts.map((part, index) => {
                    if (part.toLowerCase() === 'syde' || part === '系统设计工程') {
                      return (
                        <span key={index} className="relative group inline">
                          <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">
                            {part}
                          </a>
                          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-stone-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
                            systems design engineering
                          </span>
                        </span>
                      );
                    } else if (part.includes('university of waterloo') || part.includes('滑铁卢大学')) {
                      const uwParts = part.split(/(university of waterloo|滑铁卢大学)/i);
                      return uwParts.map((uwPart, uwIndex) => {
                        if (uwPart.toLowerCase() === 'university of waterloo' || uwPart === '滑铁卢大学') {
                          return (
                            <a key={`${index}-${uwIndex}`} href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors group">
                              <img src="/uwaterloo_logo.jpeg" alt="University of Waterloo" className="inline w-4 h-4 mr-1" />
                              {uwPart}
                            </a>
                          );
                        }
                        return <span key={`${index}-${uwIndex}`}>{uwPart}</span>;
                      });
                    }
                    return <span key={index}>{part}</span>;
                  });
                })()}
              </li>
              <li>
                {'>'} {t('hero.current2').split('textql')[0]}<a href="https://textql.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors group"><img src="/textql.jpg" alt="TextQL" className="inline w-4 h-4 mr-1" />textql</a>{t('hero.current2').split('nyc')[0].split('textql')[1]}<a href="https://visitnyc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">nyc</a>{t('hero.current2').split('nyc')[1]}
              </li>


            </ul>
          </div>



          <div className="h-auto min-h-[80px] md:min-h-[60px]">
            <div className="mt-4 space-y-3">
              <div>
                <p className="mb-2 text-stone-300">{t('previously.title')}</p>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>
                    {'>'} {t('previously.item1').split('ownr')[0]}
                    <a href="https://www.ownr.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors group">
                      <img src="/ownrco_logo.jpeg" alt="Ownr" className="inline w-4 h-4 mr-1" />
                      ownr
                    </a>
                    {t('previously.item1').split('ownr')[1]}
                  </li>
                  <li>
                    {'>'} {t('previously.item2').split('rbc')[0]}
                    <a href="https://www.rbc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors group">
                      <img src="/rbc.jpeg" alt="RBC" className="inline w-4 h-4 mr-1" />
                      rbc
                    </a>
                    {t('previously.item2').split('rbc')[1]}
                  </li>


                </ul>
              </div>

              <div>
                <p className="mb-2 text-stone-300">{t('projects.title')}</p>
                <ul className="text-sm text-stone-400 space-y-1">
                  <li>
                    {'>'} <a href="https://tiktokviewpredictor.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">tiktok view predictor</a> - {t('projects.tiktokPredictor')}
                  </li>
                  <li>
                    {'>'} <a href="https://github.com/nicholaschen09/facial-recognition-neural-network" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">facial recognition model</a> - {t('projects.facialRecognition')}
                  </li>
                  <li>
                    {'>'} <a href="https://diff-digest-appp.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">diff digest</a> - {t('projects.diffDigest')}
                  </li>
                  <li>
                    {'>'} <a href="https://sql-query-parser.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">sql query parser</a> - {t('projects.sqlParser')}
                  </li>
                  <li>
                    {'>'} <a href="https://dependabot-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">dependabot</a> - {t('projects.dependabot')}
                  </li>
                  <li>
                    {'>'} <a href="https://github.com/enxilium/posture-checker-robot" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">fernando</a> - {t('projects.fernando')}
                  </li>
                  <li>
                    {'>'} <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">basketbin</a> - {t('projects.basketbin')}
                  </li>
                  <li>
                    {'>'} <a href="https://github.com/nicholaschen09/summary-discord-bot" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">discord summary bot</a> - {t('projects.neoDiscordBot')}
                  </li>
                </ul>
                <p className="text-sm text-stone-400 mt-3">
                  {'>'} {t('projects.languagesTitle')}:{' '}
                  <a href="https://go.dev/doc/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">
                    <img src="/golang.png" alt="Golang" className="inline w-4 h-4 mr-1" />
                    {t('projects.golang')}
                  </a>,{' '}
                  <a href="https://docs.python.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">
                    <img src="/python.png" alt="Python" className="inline w-4 h-4 mr-1" />
                    {t('projects.python')}
                  </a> {t('projects.and')}{' '}
                  <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors">
                    <img src="/typescript-logo.png" alt="TypeScript" className="inline w-4 h-4 mr-1" />
                    {t('projects.typescript')}
                  </a>
                </p>
              </div>

            </div>
          </div>


          <SearchBar />

          <section className="mt-2 -mb-4">
            <p className="max-w-2xl text-sm text-stone-400">
              {t('contact.text').split('email')[0]}
              <a
                href="mailto:nicholas.chen243@gmail.com"
                className="text-stone-400 underline hover:text-stone-100 group"
              >
                <img src="/gmail.jpg" alt="Gmail" className="inline w-4 h-4 mr-1" />
                email
              </a>
              {t('contact.text').split('linkedin')[0].split('email')[1]}
              <a
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline hover:text-stone-100 group"
              >
                <img src="/linkedin2.png" alt="LinkedIn" className="inline w-4 h-4 mr-1" />
                linkedin
              </a>
              {t('contact.text').split('github')[0].split('linkedin')[1]}
              <a
                href="https://github.com/nicholaschen09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline hover:text-stone-100 group"
              >
                <img src="/githubv2.png" alt="GitHub" className="inline w-4 h-4 mr-1" />
                github
              </a>
              {t('contact.text').split('github')[1]}
            </p>
          </section>

          {/* Links to blogs and art */}
          <section className="mt-1 mb-8">
            <p className="max-w-2xl text-sm text-stone-400 mb-2">
              {t('links.blogPrompt')} {' '}
              <a
                href="https://x.com/nicholaschen__/status/1992051772614181211?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline hover:text-stone-100 group"
              >
                <img src="/twitter.jpg" alt="Twitter" className="inline w-5 h-5 mr-1" />
                {t('links.blogLink')}
              </a>
            </p>
            <p className="max-w-2xl text-sm text-stone-400">
              {t('links.artPrompt')} {' '}
              <a
                href="https://nicholaschen243.wixsite.com/nicholas-chen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 underline hover:text-stone-100 group"
              >
                <img src="/artlogo.png" alt="Art" className="inline w-4 h-4 mr-1" />
                {t('links.artLink')}
              </a>
            </p>
            <p className="max-w-2xl text-sm text-stone-400 mt-2">
              {t('info.favouriteShow')}
            </p>
          </section>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 justify-start mt-24 mb-6 max-w-2xl">
            {/* Left Arrow */}
            <a href="https://about.ceruleanechoes.com/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-opacity duration-200 hover:opacity-100 cursor-pointer"><path d="M12 15L6 9L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="https://www.sydeb.me/" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/white.svg" alt="White SVG Pattern" className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            {/* Right Arrow */}
            <a href="https://www.brandonling.me/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-opacity duration-200 hover:opacity-100 cursor-pointer"><path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

        </div>
        {/* Animated Drawing Sections */}
        <div className="mt-8 mb-12 space-y-8">
        </div>

      </main>
    </>
  );
}
