import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#f5f6f7] to-[#e9eaec] border-t border-gray-200 py-4">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-4">
        <span className="text-gray-500 text-sm tracking-widest font-mono">© 2025 NICHOLAS CHEN ↑</span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-sm bg-gradient-to-b from-blue-500 to-blue-700 inline-block" />
          <span className="text-gray-500 text-sm font-mono">BY <span className="underline text-gray-700">NICHOLAS®</span></span>
        </span>
      </div>
    </footer>
  );
}
