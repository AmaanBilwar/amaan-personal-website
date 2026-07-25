"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink =
  | { href: string; label: string; isActive: (path: string) => boolean }
  | { href: string; label: string; external: true };

const NAV_LINKS: NavLink[] = [
  {
    href: "/blogs",
    label: "writing",
    isActive: (path) => path.startsWith("/blogs"),
  },
  {
    href: "/reading",
    label: "reading",
    isActive: (path) => path.startsWith("/reading"),
  },
  {
    href: "/oss",
    label: "oss",
    isActive: (path) => path.startsWith("/oss"),
  },
  { href: "/resume.pdf", label: "resume", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-stone-100/70 bg-white/75 backdrop-blur-md"
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          className="nav-link -ml-2 rounded-md px-2 py-1 text-sm text-stone-600 hover:bg-stone-100 hover:text-black"
        >
          amaan
        </Link>

        <ul className="flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const active = "isActive" in link && link.isActive(pathname);
            const className = [
              "nav-link rounded-md px-2 py-1 text-sm",
              active
                ? "bg-stone-100 text-black"
                : "text-stone-600 hover:bg-stone-100 hover:text-black",
            ].join(" ");

            if ("external" in link) {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
