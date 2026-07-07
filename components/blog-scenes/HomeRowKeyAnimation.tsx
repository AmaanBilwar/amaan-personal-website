'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
  fontWeight: 700,
  position: 'relative' as const,
  overflow: 'hidden',
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
const mods1 = ['META', 'ALT', 'SHIFT', 'CTRL'];
const mods2 = ['CTRL', 'ALT', 'SHIFT', 'META'];

const staggerDelay = 0.15;
const rowDelay = (letters1.length - 1.5) * staggerDelay;
const animationDuration = 0.28;
const finalDelay = rowDelay + (letters2.length - 1) * staggerDelay + animationDuration;
const dwellAfterLetters = 0.35;
const labelFadeDuration = 0.22;
const labelStagger = 0.06;
const lettersDoneAt = finalDelay + 0.2;

const soundVariant: HomeRowSoundVariant = 'softClick';

type Phase = 'idle' | 'lettersIn' | 'lettersOut' | 'modsIn' | 'done';
type LabelMode = 'letters' | 'modifiers';

type KeyCellProps = {
  letter: string;
  mod: string;
  labelMode: LabelMode;
  phase: Phase;
  popInDelay: number;
  modRevealDelay: number;
  showKeys: boolean;
  runId: number;
};

function KeyCell({
  letter,
  mod,
  labelMode,
  phase,
  popInDelay,
  modRevealDelay,
  showKeys,
  runId,
}: KeyCellProps) {
  const isLettersIn = phase === 'lettersIn';
  const isLettersOut = phase === 'lettersOut';
  const isModsIn = phase === 'modsIn';
  const showModifiers = labelMode === 'modifiers';

  return (
    <motion.div
      animate={
        showKeys
          ? {
              scale: 1,
              y: 0,
              opacity: 1,
              backgroundColor: showModifiers ? '#f5f5f4' : '#ffffff',
            }
          : { scale: 0, y: 12, opacity: 0, backgroundColor: '#ffffff' }
      }
      initial={{ scale: 0, y: 12, opacity: 0, backgroundColor: '#ffffff' }}
      style={box}
      transition={
        isLettersIn
          ? {
              delay: popInDelay,
              duration: animationDuration,
              scale: { type: 'spring', visualDuration: animationDuration, bounce: 0.5 },
            }
          : { duration: 0.2 }
      }
    >
      <AnimatePresence mode="wait">
        {!showModifiers ? (
          <motion.span
            key={`letter-${runId}-${letter}`}
            animate={{ opacity: isLettersOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            style={{ fontSize: 'clamp(20px, 7vw, 32px)' }}
            transition={{ duration: labelFadeDuration }}
          >
            {letter}
          </motion.span>
        ) : (
          <motion.span
            key={`mod-${runId}-${mod}`}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            style={{
              fontSize: 'clamp(11px, 3vw, 14px)',
              letterSpacing: '0.02em',
              textTransform: 'lowercase',
            }}
            transition={{
              duration: labelFadeDuration,
              delay: isModsIn ? modRevealDelay : 0,
            }}
          >
            {mod}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomeRowKeyAnimation() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [labelMode, setLabelMode] = useState<LabelMode>('letters');
  const [runId, setRunId] = useState(0);
  const timersRef = useRef<number[]>([]);
  const phaseRef = useRef(phase);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  function clearTimers() {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }

  function startAnimation() {
    if (phaseRef.current !== 'idle' && phaseRef.current !== 'done') return;

    clearTimers();
    phaseRef.current = 'lettersIn';
    setPhase('lettersIn');
    setLabelMode('letters');
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

    const transitionStartAt = lettersDoneAt + dwellAfterLetters;

    schedule(() => {
      phaseRef.current = 'lettersOut';
      setPhase('lettersOut');
      if (audioReady) void homeRowKeySounds.playModifierTransitionStart();
    }, transitionStartAt);

    schedule(() => {
      setLabelMode('modifiers');
      phaseRef.current = 'modsIn';
      setPhase('modsIn');
    }, transitionStartAt + labelFadeDuration);

    [...letters1, ...letters2].forEach((_, index) => {
      schedule(
        () => {
          if (audioReady) void homeRowKeySounds.playModifierReveal(index);
        },
        transitionStartAt + labelFadeDuration + index * labelStagger,
      );
    });

    const modsDoneAt =
      transitionStartAt + labelFadeDuration + labelFadeDuration + (letters1.length * 2 - 1) * labelStagger;

    schedule(() => {
      phaseRef.current = 'done';
      setPhase('done');
    }, modsDoneAt + 0.15);
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

  const showKeys = phase !== 'idle';
  const showStartButton = phase === 'idle';
  const showReplayButton = phase === 'done';

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

        <AnimatePresence>
          {showReplayButton && (
            <motion.button
              key="replay"
              type="button"
              aria-label="Replay animation"
              onPointerDown={handlePointerDown}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -120, scale: 0.6, opacity: 0 }}
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
        </AnimatePresence>
      </div>

      <div style={row}>
        {letters1.map((letter, index) => (
          <KeyCell
            key={`${runId}-${letter}`}
            letter={letter}
            mod={mods1[index]}
            labelMode={labelMode}
            modRevealDelay={index * labelStagger}
            phase={phase}
            popInDelay={index * staggerDelay}
            runId={runId}
            showKeys={showKeys}
          />
        ))}
      </div>

      <div style={row}>
        {letters2.map((letter, index) => (
          <KeyCell
            key={`${runId}-${letter}`}
            letter={letter}
            mod={mods2[index]}
            labelMode={labelMode}
            modRevealDelay={(letters1.length + index) * labelStagger}
            phase={phase}
            popInDelay={rowDelay + index * staggerDelay}
            runId={runId}
            showKeys={showKeys}
          />
        ))}
      </div>
    </main>
  );
}
