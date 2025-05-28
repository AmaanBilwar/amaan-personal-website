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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <Link
          href="/"
          className={`flex items-center transition-colors ${pathname === '/'
            ? 'opacity-100'
            : 'hover:opacity-80'
            }`}
        >
          <img
            src="/ghcat.png"
            alt="Nicholas Chen"
            className="h-10 w-auto rounded-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {/* Removed About and Resume links */}
        </nav>
      </div>
    </header>
  );
}
