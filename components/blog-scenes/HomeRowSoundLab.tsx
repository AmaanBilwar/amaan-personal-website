'use client';

import { useState } from 'react';
import {
  homeRowKeySounds,
  homeRowSoundVariants,
  type HomeRowSoundVariant,
} from '@/components/blog-scenes/home-row-key-sounds';

const previewKeys = ['A', 'S', 'D', 'F', 'J', 'K', 'L', ';'];

export default function HomeRowSoundLab() {
  const [activeVariant, setActiveVariant] = useState<HomeRowSoundVariant | null>(null);
  const [volume, setVolume] = useState(0.7);

  function previewVariant(variant: HomeRowSoundVariant) {
    setActiveVariant(variant);
    homeRowKeySounds.setVolume(volume);
    void homeRowKeySounds.playSequence(variant, previewKeys.length);
    window.setTimeout(() => setActiveVariant(null), 1500);
  }

  function handleVolumeChange(value: string) {
    const nextVolume = Number(value);
    setVolume(nextVolume);
    homeRowKeySounds.setVolume(nextVolume);
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] px-4 py-10 text-stone-100 md:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-flex rounded-md px-2 py-1 text-sm text-stone-500 transition-colors hover:bg-stone-800/80 hover:text-stone-100"
        >
          Back home
        </a>

        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-stone-500">home row sound lab</p>
          <h1 className="mb-3 text-3xl font-medium text-white md:text-5xl">Pick the key reveal sound.</h1>
          <p className="text-sm leading-6 text-stone-400">
            Each card plays the same A S D F J K L ; sequence with a different synth texture. Click
            one to unlock browser audio and audition it.
          </p>
        </div>

        <label className="mb-8 flex max-w-sm flex-col gap-3 text-sm text-stone-400">
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => handleVolumeChange(event.target.value)}
            className="accent-stone-100"
          />
        </label>

        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {homeRowSoundVariants.map((variant) => {
            const isActive = activeVariant === variant.id;

            return (
              <button
                key={variant.id}
                type="button"
                onClick={() => previewVariant(variant.id)}
                className={`group rounded-2xl border p-5 text-left transition-all ${
                  isActive
                    ? 'border-stone-100 bg-stone-100 text-stone-950 shadow-[0_0_40px_rgba(255,255,255,0.12)]'
                    : 'border-stone-800 bg-stone-950/30 text-stone-300 hover:border-stone-500 hover:bg-stone-900/70'
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-lg font-medium">{variant.name}</h2>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      isActive
                        ? 'bg-stone-950 text-stone-100'
                        : 'bg-stone-800 text-stone-400 group-hover:text-stone-100'
                    }`}
                  >
                    play
                  </span>
                </div>
                <p className={`mb-5 text-sm leading-6 ${isActive ? 'text-stone-700' : 'text-stone-500'}`}>
                  {variant.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {previewKeys.map((key, index) => (
                    <span
                      key={`${variant.id}-${key}-${index}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-bold transition-all ${
                        isActive
                          ? 'border-stone-950 bg-stone-950 text-stone-100'
                          : 'border-stone-700 bg-stone-900 text-stone-300'
                      }`}
                    >
                      {key}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-stone-800 bg-black/20 p-5 text-sm leading-6 text-stone-500">
          Browser note: real page-load autoplay sound can be blocked until the visitor has interacted
          with the page. This lab works because clicking a card unlocks the audio context.
        </div>
      </div>
    </main>
  );
}
