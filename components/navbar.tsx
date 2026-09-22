"use client";

import { useTheme } from "@/components/theme-provider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isOneDark = theme === "one-dark";
  const nextThemeLabel = isOneDark ? "Switch to light theme" : "Switch to One Dark theme";

  return (
    <nav aria-label="Primary" className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-end px-4 md:px-8">
        <button
          type="button"
          aria-label={nextThemeLabel}
          title={nextThemeLabel}
          onClick={toggleTheme}
          className="nav-link -mr-2 flex h-8 w-8 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100 hover:text-black"
        >
          {isOneDark ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
