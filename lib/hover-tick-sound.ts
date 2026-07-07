'use client';

import { homeRowKeySounds } from '@/components/blog-scenes/home-row-key-sounds';

const HOVER_SOUND_VARIANT = 'glass' as const;

export async function playHoverTickSound(): Promise<void> {
  await homeRowKeySounds.playKey(HOVER_SOUND_VARIANT, 0);
}

export function warmAudioContext(): void {
  homeRowKeySounds.setVolume(0.6);
  void homeRowKeySounds.prepare();
}
