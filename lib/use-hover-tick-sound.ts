'use client';

import { useCallback, useRef } from 'react';
import { playHoverTickSound } from '@/lib/hover-tick-sound';

const DEBOUNCE_MS = 60;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useHoverTickSound(enabled: boolean) {
  const lastPlayedRef = useRef(0);

  const playHoverTick = useCallback(() => {
    if (!enabled || prefersReducedMotion()) return;

    const now = Date.now();
    if (now - lastPlayedRef.current < DEBOUNCE_MS) return;
    lastPlayedRef.current = now;

    void playHoverTickSound().catch(() => {
      // silent
    });
  }, [enabled]);

  return { playHoverTick };
}
