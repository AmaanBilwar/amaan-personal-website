'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-stone-700">
      <div className="max-w-3xl mx-auto flex justify-between items-center py-2 md:py-3 px-4 md:px-6">
        <div className="relative group">
          <Link
            href="/"
            className={`flex items-center transition-all duration-200 p-1 rounded-full ${pathname === '/'
              ? 'opacity-100'
              : 'hover:opacity-80 hover:bg-stone-800 hover:scale-110'
              }`}
            aria-label="Home"
          >
            <img
              src="/ghcat.png"
              alt="Nicholas Chen"
              className="h-9 w-auto rounded-sm"
            />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded bg-stone-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
            Home
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex items-center">
          <nav className="flex gap-2 items-center mx-auto ">
            <a href="mailto:nicholas.chen243@gmail.com" className="font-mono uppercase tracking-widest text-sm text-stone-500 hover:underline underline-offset-4 transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer" className="font-mono uppercase tracking-widest text-sm text-stone-500 hover:underline underline-offset-4 transition-colors">LinkedIn</a>
            <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer" className="font-mono uppercase tracking-widest text-sm text-stone-500 hover:underline underline-offset-4 transition-colors">GitHub</a>
            <a href="https://x.com/nicholaschen__" target="_blank" rel="noopener noreferrer" className="font-mono uppercase tracking-widest text-sm text-stone-500 hover:underline underline-offset-4 transition-colors">Twitter</a>
          </nav>
        </nav>
      </div>
    </header>
  );
}
