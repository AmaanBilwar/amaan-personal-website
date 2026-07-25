"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import type { ReadingContent, ReadingItem } from "@/interfaces/reading";
import { fuzzyScore } from "@/lib/fuzzy";

function ReadingRow({ item }: { item: ReadingItem }) {
  const meta = [item.author, item.note].filter(Boolean).join(" — ");
  const className =
    "-mx-2 rounded-md px-2 py-0.5 text-stone-600";

  const body = (
    <>
      <span>{item.title}</span>
      {meta && <span className="text-stone-400"> — {meta}</span>}
    </>
  );

  if (item.href) {
    return (
      <li>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`nav-link flex flex-wrap items-center gap-1 ${className}`}
        >
          {body}
        </a>
      </li>
    );
  }

  return <li className={`flex flex-wrap items-center gap-1 ${className}`}>{body}</li>;
}

function listItems(reading: ReadingContent, query: string): ReadingItem[] {
  const items = reading.items ?? [];
  const trimmed = query.trim();
  if (!trimmed) return items;

  return items
    .map((item) => ({
      item,
      score: fuzzyScore(trimmed, item.title, item.author, item.note, item.status),
    }))
    .filter((row): row is { item: ReadingItem; score: number } => row.score !== null)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);
}

export default function ReadingClient({ reading }: { reading: ReadingContent }) {
  const [query, setQuery] = useState("");
  const items = reading.items ?? [];
  const totalCount = items.length;
  const filtered = useMemo(() => listItems(reading, query), [query, reading]);
  const searching = Boolean(query.trim());

  return (
    <main className="relative z-10 flex min-h-full flex-col items-center p-5 md:p-12">
      <div className="mx-auto w-full max-w-xl space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black">{reading.title}</h1>
          {reading.description && (
            <p className="mt-2 text-sm md:text-base text-stone-500">{reading.description}</p>
          )}
        </div>

        <div className="sticky top-12 z-40 -mx-1 bg-white/80 px-1 py-2 backdrop-blur-md">
          <label className="sr-only" htmlFor="reading-search">
            Search reading list
          </label>
          <input
            id="reading-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search (typos ok)…"
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 placeholder:text-stone-400 outline-none transition-[border-color] duration-200 ease focus:border-stone-400"
          />
          <p className="mt-1.5 text-xs text-stone-400">
            {searching
              ? `${filtered.length} of ${totalCount}`
              : `${totalCount} ${totalCount === 1 ? "item" : "items"}`}
          </p>
        </div>

        {filtered.length > 0 ? (
          <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
            {filtered.map((item) => (
              <ReadingRow key={item.title} item={item} />
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-base text-stone-500">nothing matched “{query.trim()}”</p>
        )}

        <Footer className="mt-10" />
      </div>
    </main>
  );
}
