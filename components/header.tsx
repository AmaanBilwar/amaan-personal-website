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
          className={`text-lg font-normal text-white transition-colors ${pathname === '/'
            ? 'underline decoration-2 underline-offset-4'
            : 'hover:underline hover:underline-offset-4'
            }`}
        >
          Nicholas Chen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {/* Removed About and Resume links */}
        </nav>
      </div>
    </header>
  );
}
