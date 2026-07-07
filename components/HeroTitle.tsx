'use client';

import { useLayoutEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { splitText } from 'animejs/text';

const titleWordDuration = 750;
const titleInitialDelay = 80;
const titleStagger = 140;

type HeroTitleProps = {
  title: string;
  className?: string;
};

export default function HeroTitle({ title, className }: HeroTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    const split = splitText(element, {
      words: true,
    });

    const lastWord = split.words.at(-1);
    if (lastWord instanceof HTMLElement) {
      lastWord.classList.add('font-bold', 'italic');
    }

    const animation = animate(split.words, {
      opacity: { from: 0, to: 1 },
      y: { from: 12, to: 0 },
      duration: titleWordDuration,
      delay: stagger(titleStagger, { start: titleInitialDelay }),
      ease: 'out(3)',
    });

    return () => {
      animation.revert();
      split.revert();
    };
  }, [title]);

  return (
    <h1
      ref={titleRef}
      className={`shrink-0 overflow-visible pr-1 text-xl sm:text-2xl md:text-3xl font-normal text-white${className ? ` ${className}` : ''}`}
    >
      {title}
    </h1>
  );
}
