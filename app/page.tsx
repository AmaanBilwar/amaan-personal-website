'use client';
import SearchBar from '@/components/search/search';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  // Accordion state for each section
  const [openHowIStarted, setOpenHowIStarted] = useState(false);
  const [openFuture, setOpenFuture] = useState(false);
  const [openUnconventional, setOpenUnconventional] = useState(false);

  // Typewriter effect state
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typingFull' | 'backspacingFull' | 'typingShort' | 'backspacingShort'>('typingFull');
  const [charIndex, setCharIndex] = useState(0);

  const baseText = t('hero.greeting');
  const fullName = t('hero.name.full');
  const shortName = t('hero.name.short');

  useEffect(() => {
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
  }, [phase, charIndex]);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden md:ml-10 -mt-4">
      {/* Hero Section */}
      <div className="max-w-3xl w-full space-y-4 md:space-y-4 mb-10 md:mb-16 pt-24 md:pt-16 mx-auto md:mx-0 md:ml-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 font-minecraft min-h-[3.5rem]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <div className="list-disc list-inside text-xs text-stone-400 space-y-1">
          <p className="text-stone-400">
            {t('hero.location')} <a href="https://www.destinationtoronto.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">toronto</a>.
          </p>
          <p>{t('hero.building')}</p>
        </div>
        <div>
          <p className="mb-2 text-stone-300">{t('hero.achievements')}</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>{t('hero.achievement1')}</li>
            <li>{t('hero.achievement2').split('UTRA Hacks')[0]}<a href="https://hackathon.utra.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">UTRA Hacks</a>{t('hero.achievement2').split('UTRA Hacks')[1]}</li>
            <li>{t('hero.achievement3')}</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-stone-300">{t('hero.currently')}</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>
              {t('hero.current1').split('systems design engineering')[0]}<a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">systems design engineering</a>{t('hero.current1').split('university of waterloo')[0].split('systems design engineering')[1]}<a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">university of waterloo</a>
            </li>
            <li>
              {t('hero.current2').split('textql')[0]}<a href="https://textql.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">textql</a>{t('hero.current2').split('nyc')[0].split('textql')[1]}<a href="https://visitnyc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">nyc</a>{t('hero.current2').split('nyc')[1]}
            </li>
            <li>
              {t('hero.current3')}
            </li>
            <li>
              {t('hero.current4')}
            </li>
          </ul>
        </div>

        <p className="max-w-2xl mb-2 mt-2 text-sm text-stone-300">I've done pretty much everything you can think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.</p>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 text-stone-300">A few projects I'm working on...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>
                  <a href="https://diff-digest-appp.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">diff digest</a> - website that turns git diffs into release notes
                </li>
                <li>
                  <a href="https://sql-query-parser.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">sql query parser</a> - parser that can query flat JSON objects
                </li>
                <li>
                  <a href="https://whiteboard-app-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">whiteboard</a> - app to brainstorm, create and share ideas
                </li>
                <li>
                  <a href="https://dependabot-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">dependabot</a> - app with 200+ users for checking and updating dependencies in repositories
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">I'm excited about...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>building ai agents that surprise and delight people everywhere</li>
                <li>turning data into tools, visuals, and magic for everyone</li>
                <li>chasing creative art sparks, sketching doodles, and imagining new designs everyday</li>
                <li>engineering projects that make me say, "whoa, that's so cool!"</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">Previously I...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>
                  was a software engineer intern at <a href="https://www.ownr.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">ownr</a>, building tools for entrepreneurs worldwide
                </li>
                <li>
                  was a software engineer intern at <a href="https://www.rbc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">rbc</a>, working on machine learning models
                </li>
                <li>
                  was a ux design intern at <a href="https://www.metahashtechnology.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">meta hash capital</a>, focusing on user experience in fintech
                </li>
                <li>
                  was a ux design intern at <a href="https://voluntracks.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-100 transition-colors inline-block transform transition-transform duration-200 hover:scale-110">voluntrack</a>, designing tools for their volunteering platform
                </li>
              </ul>
            </div>

          </div>
        </div>
        {/* How I Started Section */}
        <div className="max-w-2xl mt-12 mb-4">
          <div className="border border-stone-700 rounded-md">
            <button
              className="w-full flex justify-start items-center px-4 py-2 font-minecraft text-sm text-stone-200 focus:outline-none text-left"
              onClick={() => setOpenHowIStarted((prev) => !prev)}
            >
              <span className="flex-1 text-left">{t('section.howIStarted')}</span>
              <span className="text-xs font-minecraft hover:underline cursor-pointer ml-auto">{openHowIStarted ? t('action.close') : t('action.open')}</span>
            </button>
            {openHowIStarted && (
              <div className="px-4 pb-4 text-stone-400 font-minecraft text-[9px] leading-tight mb-6">
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm mt-2">I started coding the summer after 8th grade mostly out of curiosity. I wanted to understand how the apps I used every day actually worked, so I started building my own.</p>
                <br />
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">Early on, I built a simple app to help my immigrant parents convert their chinese money to canadian dollars. It wasn't fancy, but it solved a real problem and that's when it clicked for me, I could use tech to actually help people.</p>
                <br />
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">I've always been the kind of person who wants to build things. As a kid, it was LEGO and cardboard contraptions. Now it's robots, web apps, and tools that help others learn, create, or solve problems.</p>
                <br />
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm -mb-6">Since then, I've done freelance work, internships, launched side projects, and shared everything I've learned online. I've always wanted to invent and create things that matter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Unconventional Way Section */}
        <div className="max-w-2xl mt-12 mb-4">
          <div className="border border-stone-700 rounded-md">
            <button
              className="w-full flex justify-start items-center px-4 py-2 font-minecraft text-sm text-stone-200 focus:outline-none text-left"
              onClick={() => setOpenUnconventional((prev) => !prev)}
            >
              <span className="flex-1 text-left">{t('section.unconventional')}</span>
              <span className="text-xs font-minecraft hover:underline cursor-pointer ml-auto">{openUnconventional ? t('action.close') : t('action.open')}</span>
            </button>
            {openUnconventional && (
              <div className="px-4 pb-4 text-stone-400 font-minecraft text-[9px] leading-tight mb-6">
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm mt-2">
                  I've always approached things unconventionally, and this mindset has consistently led me to many unique opportunities. Growing up, I was an art kid at heart, but I found myself equally drawn to coding and engineering—blending creativity with technology in everything I do.
                </p>
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                  I started by intentionally building my presence on social media platforms, sharing my projects and insights publicly rather than relying on traditional networking. This unconventional approach directly led to my first internships, secured by leveraging platforms like X (Twitter) to showcase my work and connect with industry professionals.
                </p>
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                  Beyond internships, I love experimenting with new ways to reach people, whether that's through viral posts, creative side projects, or simply being open about my process and failures.
                </p>
                <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm -mb-6">
                  I believe that being visible, authentic, and a little bit bold online can open doors that traditional paths might never reveal.
                </p>
              </div>
            )}
          </div>
        </div>

        <SearchBar />

        <section className="mt-10 -mb-6 font-minecraft">
          <p className="max-w-2xl text-sm text-stone-400 font-minecraft">
            {t('contact.text').split('email')[0]}
            <a
              href="mailto:nicholas.chen243@gmail.com"
              className="text-stone-400 underline hover:text-stone-100 font-minecraft inline-block transform transition-transform duration-200 hover:scale-110"
            >
              email
            </a>
            {t('contact.text').split('linkedin')[0].split('email')[1]}
            <a
              href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-100 font-minecraft inline-block transform transition-transform duration-200 hover:scale-110"
            >
              linkedin
            </a>
            {t('contact.text').split('linkedin')[1]}
          </p>
          <div className="flex items-center gap-2 justify-start mt-6 max-w-2xl">
            {/* Left Arrow */}
            <a href="https://about.ceruleanechoes.com/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-all duration-200 group/arrow hover:scale-125 hover:opacity-100 cursor-pointer"><path d="M12 15L6 9L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="https://www.sydeb.me/" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/white.svg" alt="White SVG Pattern" className="w-6 h-6 opacity-60 group-hover:scale-125 group-hover:opacity-100 transition-all duration-200" />
            </a>
            {/* Right Arrow */}
            <a href="https://www.brandonling.me/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-all duration-200 group/arrow hover:scale-125 hover:opacity-100 cursor-pointer"><path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </section>

        {/* Language Toggle Button */}
        <div className="mt-8 mb-6 flex justify-start">
          <div className="flex items-center gap-3 p-4 bg-white/5 border border-stone-600 rounded-lg hover:bg-white/10 transition-colors">
            <span className="text-stone-300 text-sm font-minecraft">Language:</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm transition-colors duration-200 ${language === 'en' ? 'text-white' : 'text-stone-500'}`}>
                EN
              </span>
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
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
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
