import { useCallback } from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-stone-700 py-4">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-4">
        <span className="text-stone-400 text-sm tracking-widest font-mono">
          © 2025 NICHOLAS CHEN{' '}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block align-middle focus:outline-none hover:text-white transition-colors"
            aria-label="Scroll to top"
            style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
          >
            ↑
          </button>
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-gradient-to-b from-blue-600 to-blue-800 inline-block" />
          <span className="text-stone-400 text-sm font-mono">BY <span className="underline text-white">NICHOLAS®</span></span>
        </span>
      </div>
    </footer>
  );
}
