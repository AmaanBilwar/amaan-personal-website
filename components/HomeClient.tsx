'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { animate, stagger } from 'animejs';
import Footer from '@/components/Footer';
import HeroTitle from '@/components/HeroTitle';
import type { SiteHome, SiteLinkItem, SiteRoleLinkItem } from '@/interfaces/site';
import { warmAudioContext } from '@/lib/hover-tick-sound';
import { useHoverTickSound } from '@/lib/use-hover-tick-sound';

const INTRO_SEEN_KEY = 'home-intro-seen';

type IntroPhase = 'waiting' | 'titleMoving' | 'revealing' | 'done';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export interface BlogPostLink {
  slug: string;
  title: string;
}

function RoleItem({ item, onHover }: { item: SiteRoleLinkItem; onHover?: () => void }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={onHover}
        onFocus={onHover}
        className="group flex flex-wrap items-center gap-x-2 gap-y-0.5 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
      >
        <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
          {item.role}
        </span>
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          {item.icon ? (
            <img src={item.icon} alt={item.iconAlt ?? item.name} className="h-4 w-auto" />
          ) : (
            '—'
          )}
          <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
            {item.name}
          </span>
        </span>
      </a>
    </li>
  );
}

function LinkItem({ item, onHover }: { item: SiteLinkItem; onHover?: () => void }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={onHover}
        onFocus={onHover}
        className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
      >
        <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
          {item.label}
        </span>
        {item.description && (
          <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
            — {item.description}
          </span>
        )}
      </a>
    </li>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{children}</p>;
}

function IntroBlock({
  introPhase,
  blockRef,
  children,
  className = '',
}: {
  introPhase: IntroPhase;
  blockRef?: (el: HTMLDivElement | null) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const hidden = introPhase === 'waiting' || introPhase === 'titleMoving';
  return (
    <div
      ref={blockRef}
      className={`${className} ${hidden ? 'opacity-0 pointer-events-none' : ''}`}
      aria-hidden={hidden}
    >
      {children}
    </div>
  );
}

export default function HomeClient({
  home,
  blogPosts,
}: {
  home: SiteHome;
  blogPosts: BlogPostLink[];
}) {
  const [introPhase, setIntroPhase] = useState<IntroPhase>('waiting');
  const [titleDocked, setTitleDocked] = useState(false);
  const [contextMenu, setContextMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const floatingTitleRef = useRef<HTMLDivElement>(null);
  const titleSlotRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const soundIndexRef = useRef(0);

  const { playHoverTick } = useHoverTickSound(introPhase === 'done');

  const nextHoverTick = useCallback(() => {
    playHoverTick(soundIndexRef.current);
    soundIndexRef.current += 1;
  }, [playHoverTick]);

  const setSectionRef = useCallback((index: number) => {
    return (el: HTMLDivElement | null) => {
      sectionRefs.current[index] = el;
    };
  }, []);

  const finishIntro = useCallback(() => {
    setIntroPhase('done');
    sessionStorage.setItem(INTRO_SEEN_KEY, '1');
  }, []);

  const runSectionReveal = useCallback(() => {
    const sections = sectionRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (sections.length === 0) {
      finishIntro();
      return;
    }

    if (prefersReducedMotion()) {
      sections.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      finishIntro();
      return;
    }

    setIntroPhase('revealing');

    sections.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
    });

    animate(sections, {
      opacity: [0, 1],
      y: [8, 0],
      duration: 400,
      delay: stagger(140, { start: 80 }),
      ease: 'out(3)',
      onComplete: finishIntro,
    });
  }, [finishIntro]);

  const runTitleReposition = useCallback(() => {
    const floating = floatingTitleRef.current;
    const slot = titleSlotRef.current;

    if (!floating || !slot || prefersReducedMotion()) {
      setTitleDocked(true);
      runSectionReveal();
      return;
    }

    const floatingRect = floating.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();
    const dx = slotRect.left - floatingRect.left;
    const dy = slotRect.top - floatingRect.top;

    setIntroPhase('titleMoving');

    if (hintRef.current) {
      animate(hintRef.current, {
        opacity: [1, 0],
        duration: 200,
        ease: 'out(2)',
      });
    }

    animate(floating, {
      x: dx,
      y: dy,
      duration: 550,
      ease: 'out(3)',
      onComplete: () => {
        setTitleDocked(true);
        floating.style.transform = '';
        runSectionReveal();
      },
    });
  }, [runSectionReveal]);

  const handleIntroClick = useCallback(() => {
    if (introPhase !== 'waiting') return;
    warmAudioContext();

    if (prefersReducedMotion()) {
      setTitleDocked(true);
      const sections = sectionRefs.current.filter((el): el is HTMLDivElement => el !== null);
      sections.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      finishIntro();
      return;
    }

    runTitleReposition();
  }, [introPhase, runTitleReposition, finishIntro]);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(false);
    setContextMenu(true);
  }, []);

  const handleCopySvg = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch('/gh_woody.svg');
      const svgText = await res.text();
      await navigator.clipboard.writeText(svgText);
      setCopied(true);
      setTimeout(() => {
        setContextMenu(false);
        setCopied(false);
      }, 1500);
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_SEEN_KEY) === '1') {
      setTitleDocked(true);
      setIntroPhase('done');
    }
  }, []);

  useEffect(() => {
    if (!contextMenu || copied) return;
    const close = () => setContextMenu(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [contextMenu, copied]);

  let sectionIndex = 0;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      {introPhase === 'waiting' && (
        <button
          type="button"
          className="fixed inset-0 z-10 cursor-default"
          onClick={handleIntroClick}
          aria-label="Continue"
        />
      )}

      {!titleDocked && (
        <div
          ref={floatingTitleRef}
          className="fixed left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none"
        >
          <HeroTitle title={home.title} />
          {introPhase === 'waiting' && (
            <p ref={hintRef} className="text-xs text-stone-600">
              click anywhere
            </p>
          )}
        </div>
      )}

      <div className="max-w-lg w-full space-y-1 md:space-y-2 mx-auto">
        <div className="flex items-start justify-between mb-0">
          <div ref={titleSlotRef} className={!titleDocked ? 'invisible' : ''}>
            <HeroTitle title={home.title} skipAnimation />
          </div>

          <IntroBlock introPhase={introPhase} blockRef={setSectionRef(sectionIndex++)}>
            <div className="relative -mt-3">
              <div
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md cursor-pointer"
                onContextMenu={handleContextMenu}
              >
                <img
                  src="/gh_woody.svg"
                  alt="GitHub Woddy"
                  className="w-8 h-8 md:w-10 md:h-10 opacity-80"
                />
              </div>
              {contextMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50">
                  <button
                    onClick={handleCopySvg}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-stone-400 bg-stone-800/80 hover:text-stone-100 rounded-md whitespace-nowrap w-[120px]"
                  >
                    {copied ? (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy SVG
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </IntroBlock>
        </div>

        {home.currently && (
          <IntroBlock introPhase={introPhase} blockRef={setSectionRef(sectionIndex++)}>
            <div>
              <SectionLabel>{home.currently.label}</SectionLabel>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                {home.currently.items.map((item, i) => (
                  <RoleItem key={`${item.href}-${i}`} item={item} onHover={nextHoverTick} />
                ))}
              </ul>
            </div>
          </IntroBlock>
        )}

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-4 space-y-3">
            {home.previously && (
              <IntroBlock introPhase={introPhase} blockRef={setSectionRef(sectionIndex++)}>
                <div>
                  <SectionLabel>{home.previously.label}</SectionLabel>
                  <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                    {home.previously.items.map((item, i) => (
                      <RoleItem key={`${item.href}-${i}`} item={item} onHover={nextHoverTick} />
                    ))}
                  </ul>
                </div>
              </IntroBlock>
            )}

            {home.projects && (
              <IntroBlock introPhase={introPhase} blockRef={setSectionRef(sectionIndex++)}>
                <div>
                  <SectionLabel>{home.projects.label}</SectionLabel>
                  <div className="-mx-2 px-2">
                    <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                      {home.projects.items.map((item, i) => (
                        <LinkItem key={`${item.href}-${i}`} item={item} onHover={nextHoverTick} />
                      ))}
                    </ul>
                  </div>
                </div>
              </IntroBlock>
            )}
          </div>

          {home.blogs && (
            <IntroBlock
              introPhase={introPhase}
              blockRef={setSectionRef(sectionIndex++)}
              className="mt-4"
            >
              <div>
                <SectionLabel>{home.blogs.label}</SectionLabel>
                <div className="-mx-2 px-2">
                  <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                    {blogPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          onPointerEnter={nextHoverTick}
                          onFocus={nextHoverTick}
                          className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </IntroBlock>
          )}

          {home.oss && (
            <IntroBlock
              introPhase={introPhase}
              blockRef={setSectionRef(sectionIndex++)}
              className="mt-4"
            >
              <div>
                <SectionLabel>{home.oss.label}</SectionLabel>
                <div className="-mx-2 px-2">
                  <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                    {home.oss.items.map((item, i) => (
                      <LinkItem key={`${item.href}-${i}`} item={item} onHover={nextHoverTick} />
                    ))}
                  </ul>
                </div>
              </div>
            </IntroBlock>
          )}

          {home.resume && (
            <IntroBlock
              introPhase={introPhase}
              blockRef={setSectionRef(sectionIndex++)}
              className="mt-4"
            >
              <div>
                <SectionLabel>{home.resume.label}</SectionLabel>
                <div className="-mx-2 px-2">
                  <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                    {home.resume.items.map((item, i) => (
                      <LinkItem key={`${item.href}-${i}`} item={item} onHover={nextHoverTick} />
                    ))}
                  </ul>
                </div>
              </div>
            </IntroBlock>
          )}
        </div>

        <IntroBlock introPhase={introPhase} blockRef={setSectionRef(sectionIndex++)}>
          <Footer />
        </IntroBlock>
      </div>
    </main>
  );
}
