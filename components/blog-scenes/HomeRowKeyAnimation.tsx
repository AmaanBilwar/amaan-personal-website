'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  homeRowKeySounds,
  type HomeRowSoundVariant,
} from '@/components/blog-scenes/home-row-key-sounds';

const box = {
  width: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: 'white',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  fontSize: 'clamp(20px, 7vw, 32px)',
  fontWeight: 700,
};

const row = {
  display: 'grid',
  gap: 'clamp(8px, 2.5vw, 12px)',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  margin: '24px auto 0',
  maxWidth: 436,
  width: '100%',
};

const letters1 = ['A', 'S', 'D', 'F'];
const letters2 = ['J', 'K', 'L', ';'];
const staggerDelay = 0.15;
const rowDelay = (letters1.length - 1.5) * staggerDelay;
const animationDuration = 0.28;
const finalDelay = rowDelay + (letters2.length - 1) * staggerDelay + animationDuration;
const soundVariant: HomeRowSoundVariant = 'lowThock';
type AnimationState = 'idle' | 'playing' | 'finished';

export default function HomeRowKeyAnimation() {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const [runId, setRunId] = useState(0);
  const timersRef = useRef<number[]>([]);
  const animationStateRef = useRef(animationState);

  useEffect(() => {
    animationStateRef.current = animationState;
  }, [animationState]);

  function clearTimers() {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }

  function startAnimation() {
    if (animationStateRef.current === 'playing') return;

    clearTimers();
    animationStateRef.current = 'playing';
    setAnimationState('playing');
    setRunId((currentRunId) => currentRunId + 1);

    let audioReady = false;
    void homeRowKeySounds.prepare().then((ready) => {
      audioReady = ready;
    });

    const schedule = (callback: () => void, delaySeconds: number) => {
      timersRef.current.push(window.setTimeout(callback, delaySeconds * 1000));
    };

    letters1.forEach((_, index) => {
      schedule(() => {
        if (audioReady) void homeRowKeySounds.playKey(soundVariant, index);
      }, index * staggerDelay);
    });

    letters2.forEach((_, index) => {
      schedule(
        () => {
          if (audioReady) void homeRowKeySounds.playKey(soundVariant, letters1.length + index);
        },
        rowDelay + index * staggerDelay,
      );
    });

    schedule(
      () => {
        if (audioReady) void homeRowKeySounds.playRowComplete(soundVariant, 0);
      },
      (letters1.length - 1) * staggerDelay + animationDuration,
    );
    schedule(
      () => {
        if (audioReady) void homeRowKeySounds.playRowComplete(soundVariant, 1);
      },
      rowDelay + (letters2.length - 1) * staggerDelay + animationDuration,
    );

    schedule(() => {
      animationStateRef.current = 'finished';
      setAnimationState('finished');
    }, finalDelay + 0.2);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    startAnimation();
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (event.code !== 'Space' || isTyping) return;

      event.preventDefault();
      startAnimation();
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => clearTimers, []);

  const isPlaying = animationState === 'playing';
  const showKeys = animationState === 'playing' || animationState === 'finished';
  const showStartButton = animationState === 'idle';
  const showReplayButton = animationState === 'finished';

  return (
    <main style={{ margin: '32px 0', overflow: 'visible', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: 76 }}>
        {showStartButton && (
          <motion.button
            type="button"
            aria-label="Start home-row key animation"
            onPointerDown={handlePointerDown}
            animate={{ y: 0, scale: 1 }}
            style={{
              width: 'min(280px, 100%)',
              height: 54,
              border: '1px solid rgba(255,255,255,0.24)',
              borderRadius: 12,
              background: 'linear-gradient(180deg, #f5f5f4 0%, #d6d3d1 100%)',
              boxShadow: '0 8px 0 #78716c, 0 18px 30px rgba(0,0,0,0.28)',
              color: '#1c1917',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              touchAction: 'manipulation',
              textTransform: 'uppercase',
            }}
            transition={{ duration: 0.12 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ y: 6, scale: 0.98 }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.1 }}>
              <span>spacebar</span>
            </span>
          </motion.button>
        )}

        {showReplayButton && (
          <motion.button
            type="button"
            aria-label="Replay animation"
            onPointerDown={handlePointerDown}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            initial={{ rotate: -120, scale: 0.6, opacity: 0 }}
            style={{
              width: 54,
              height: 54,
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: 0,
              background: '#f5f5f4',
              color: '#1c1917',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{ rotate: -25 }}
            whileTap={{ scale: 0.92 }}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 12a8 8 0 1 1-2.34-5.66"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M20 4v5h-5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </motion.button>
        )}
      </div>

      <div style={row}>
        {letters1.map((letter, index) => (
          <motion.div
            key={`${runId}-${letter}`}
            animate={showKeys ? { scale: 1, y: 0, opacity: 1 } : { scale: 0, y: 12, opacity: 0 }}
            initial={{ scale: 0, y: 12, opacity: 0 }}
            style={box}
            transition={
              isPlaying
                ? {
                    delay: index * staggerDelay,
                    duration: animationDuration,
                    scale: { type: 'spring', visualDuration: animationDuration, bounce: 0.5 },
                  }
                : { duration: 0.12 }
            }
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <div style={row}>
        {letters2.map((letter, index) => (
          <motion.div
            key={`${runId}-${letter}`}
            animate={showKeys ? { scale: 1, y: 0, opacity: 1 } : { scale: 0, y: 12, opacity: 0 }}
            initial={{ scale: 0, y: 12, opacity: 0 }}
            style={box}
            transition={
              isPlaying
                ? {
                    delay: rowDelay + index * staggerDelay,
                    duration: animationDuration,
                    scale: { type: 'spring', visualDuration: animationDuration, bounce: 0.5 },
                  }
                : { duration: 0.12 }
            }
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
