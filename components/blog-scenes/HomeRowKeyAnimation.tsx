'use client';
import { motion } from 'motion/react';

const box = {
  width: 100,
  height: 100,
  backgroundColor: 'white',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  fontSize: 32,
  fontWeight: 700,
};

const letters1 = ['A', 'S', 'D', 'F'];
const letters2 = ['J', 'K', 'L', ';'];
const staggerDelay = 0.15;
const rowDelay = (letters1.length - 1.5) * staggerDelay;

export default function HomeRowKeyAnimation() {
  return (
    <main>
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        {letters1.map((letter, index) => (
          <motion.div
            key={letter}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            style={box}
            transition={{ delay: index * staggerDelay }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        {letters2.map((letter, index) => (
          <motion.div
            key={letter}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            style={box}
            transition={{ delay: rowDelay + index * staggerDelay }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
