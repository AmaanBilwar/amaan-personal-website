import { useCallback } from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-stone-700 py-4">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between px-4">
        <span className="text-stone-400 text-sm tracking-widest font-minecraft ml-8">
          © 2025 NICHOLAS CHEN{' '}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-stone-400 text-sm font-minecraft ml-4">BY NICHOLAS®</span>
        </span>
      </div>
    </footer>
  );
}
