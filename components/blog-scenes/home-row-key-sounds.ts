'use client';

import * as Tone from 'tone';

export type HomeRowSoundVariant = 'softClick' | 'glass' | 'terminal' | 'bubble' | 'lowThock';

export const homeRowSoundVariants: Array<{
  id: HomeRowSoundVariant;
  name: string;
  description: string;
}> = [
  {
    id: 'softClick',
    name: 'Soft click',
    description: 'Light mechanical ticks with a small melodic rise.',
  },
  {
    id: 'glass',
    name: 'Glass taps',
    description: 'Bright, delicate tones that feel more animated than keyboard-realistic.',
  },
  {
    id: 'terminal',
    name: 'Terminal blips',
    description: 'Dry square-wave bleeps with a retro computer texture.',
  },
  {
    id: 'bubble',
    name: 'Bubble pops',
    description: 'Round, playful pops with a fast pitchy envelope.',
  },
  {
    id: 'lowThock',
    name: 'Low thock',
    description: 'Deeper, tactile hits for a heavier keyboard feel.',
  },
];

const SCALE = ['C', 'D', 'E', 'G', 'A'] as const;
const BASE_OCTAVE = 4;

class HomeRowKeySoundSystem {
  private initialized = false;
  private initializing: Promise<boolean> | null = null;
  private volume: Tone.Volume | null = null;
  private reverb: Tone.Reverb | null = null;
  private delay: Tone.FeedbackDelay | null = null;
  private softClick: Tone.PolySynth | null = null;
  private glass: Tone.PolySynth | null = null;
  private terminal: Tone.PolySynth | null = null;
  private bubble: Tone.PolySynth | null = null;
  private lowThock: Tone.PolySynth | null = null;

  private async ready(): Promise<boolean> {
    if (this.initialized) return true;
    if (this.initializing) return this.initializing;

    this.initializing = this.initialize();
    const ready = await this.initializing;
    this.initializing = null;
    return ready;
  }

  private async initialize(): Promise<boolean> {
    try {
      await Tone.start();

      this.volume = new Tone.Volume(-16).toDestination();
      this.reverb = new Tone.Reverb({ decay: 1.4, wet: 0.18 }).connect(this.volume);
      this.delay = new Tone.FeedbackDelay({ delayTime: '32n', feedback: 0.08, wet: 0.08 }).connect(
        this.volume,
      );

      this.softClick = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.03 },
      }).connect(this.reverb);

      this.glass = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.002, decay: 0.22, sustain: 0.02, release: 0.18 },
      }).connect(this.reverb);

      this.terminal = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square' },
        envelope: { attack: 0.001, decay: 0.045, sustain: 0, release: 0.025 },
      }).connect(this.delay);

      this.bubble = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.08 },
      }).connect(this.reverb);

      this.lowThock = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.001, decay: 0.09, sustain: 0, release: 0.08 },
      }).connect(this.volume);

      this.initialized = true;
      return true;
    } catch {
      return false;
    }
  }

  async prepare(): Promise<boolean> {
    return this.ready();
  }

  private noteFor(index: number, octaveOffset = 0): string {
    const note = SCALE[index % SCALE.length];
    const octave = BASE_OCTAVE + octaveOffset + Math.floor(index / SCALE.length);
    return `${note}${octave}`;
  }

  async playKey(variant: HomeRowSoundVariant, index: number) {
    if (!(await this.ready())) return;

    const now = Tone.now();

    if (variant === 'softClick') {
      this.softClick?.triggerAttackRelease(this.noteFor(index, 1), '64n', now, 0.28);
      return;
    }

    if (variant === 'glass') {
      const note = Tone.Frequency(this.noteFor(index, 2)).transpose(index % 2 === 0 ? 0 : 7).toNote();
      this.glass?.triggerAttackRelease(note, '32n', now, 0.22);
      return;
    }

    if (variant === 'terminal') {
      this.terminal?.triggerAttackRelease(this.noteFor(index, 0), '64n', now, 0.18);
      return;
    }

    if (variant === 'bubble') {
      this.bubble?.triggerAttackRelease(this.noteFor(index, 1), '32n', now, 0.24);
      this.bubble?.triggerAttackRelease(this.noteFor(index, 2), '64n', now + 0.025, 0.12);
      return;
    }

    this.lowThock?.triggerAttackRelease(this.noteFor(index, -1), '32n', now, 0.34);
  }

  async playRowComplete(variant: HomeRowSoundVariant, rowIndex: number) {
    if (!(await this.ready())) return;

    const now = Tone.now();
    const synth = variant === 'terminal' ? this.terminal : this.glass;
    const octave = variant === 'lowThock' ? 3 : 5;
    const root = rowIndex === 0 ? `C${octave}` : `G${octave}`;
    const fifth = rowIndex === 0 ? `G${octave}` : `D${octave + 1}`;

    synth?.triggerAttackRelease(root, '32n', now, 0.18);
    synth?.triggerAttackRelease(fifth, '32n', now + 0.055, 0.14);
  }

  /** Deeper, sustained glass tone for letter → modifier reveal (distinct from key clicks). */
  async playModifierReveal(index: number) {
    if (!(await this.ready())) return;

    const now = Tone.now();
    const note = Tone.Frequency(this.noteFor(index, 0)).transpose(-5).toNote();
    this.glass?.triggerAttackRelease(note, '16n', now, 0.16);
    this.lowThock?.triggerAttackRelease(this.noteFor(index, -2), '8n', now + 0.02, 0.12);
  }

  /** Soft sweep when letters begin fading out. */
  async playModifierTransitionStart() {
    if (!(await this.ready())) return;

    const now = Tone.now();
    this.terminal?.triggerAttackRelease('A3', '8n', now, 0.1);
    this.glass?.triggerAttackRelease('E4', '4n', now + 0.04, 0.08);
  }

  async playSequence(variant: HomeRowSoundVariant, count = 8, stepMs = 150) {
    for (let index = 0; index < count; index++) {
      window.setTimeout(() => {
        void this.playKey(variant, index);
      }, index * stepMs);
    }

    window.setTimeout(() => {
      void this.playRowComplete(variant, 1);
    }, count * stepMs + 50);
  }

  setVolume(volume: number) {
    if (!this.volume) return;
    this.volume.volume.value = volume === 0 ? -Infinity : -36 + volume * 30;
  }

  dispose() {
    this.softClick?.dispose();
    this.glass?.dispose();
    this.terminal?.dispose();
    this.bubble?.dispose();
    this.lowThock?.dispose();
    this.reverb?.dispose();
    this.delay?.dispose();
    this.volume?.dispose();

    this.softClick = null;
    this.glass = null;
    this.terminal = null;
    this.bubble = null;
    this.lowThock = null;
    this.reverb = null;
    this.delay = null;
    this.volume = null;
    this.initialized = false;
  }
}

export const homeRowKeySounds = new HomeRowKeySoundSystem();
