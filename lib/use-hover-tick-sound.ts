'use client';

import { useCallback, useEffect, useRef } from 'react';
import { playHoverTickSound, warmAudioContext } from '@/lib/hover-tick-sound';

const DEBOUNCE_MS = 60;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useHoverTickSound() {
  const lastPlayedRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Warm context from natural interaction — scroll/wheel/touch, not a forced click.
    const onWarm = () => warmAudioContext();

    window.addEventListener('scroll', onWarm, { passive: true });
    window.addEventListener('wheel', onWarm, { passive: true });
    window.addEventListener('touchstart', onWarm, { passive: true });

    // If user navigated here via a link click, transient activation may already allow audio.
    warmAudioContext();

    return () => {
      window.removeEventListener('scroll', onWarm);
      window.removeEventListener('wheel', onWarm);
      window.removeEventListener('touchstart', onWarm);
    };
  }, []);

  const playHoverTick = useCallback((index: number) => {
    if (prefersReducedMotion()) return;

    const now = Date.now();
    if (now - lastPlayedRef.current < DEBOUNCE_MS) return;
    lastPlayedRef.current = now;

    void playHoverTickSound(index).catch(() => {
      // Browser blocked until user interacts — next hover after scroll/touch may work.
    });
  }, []);

  return { playHoverTick };
}
