"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { PostCategory } from "@/interfaces/post";

export type WritingPost = {
  slug: string;
  title: string;
  category: PostCategory;
  date: string;
};

const FILTERS: { id: "all" | PostCategory; label: string }[] = [
  { id: "all", label: "all" },
  { id: "tech", label: "tech" },
  { id: "life", label: "life" },
];

export default function WritingClient({ posts }: { posts: WritingPost[] }) {
  const [filter, setFilter] = useState<"all" | PostCategory>("all");

  const available = useMemo(() => {
    const present = new Set(posts.map((post) => post.category));
    return FILTERS.filter((f) => f.id === "all" || present.has(f.id));
  }, [posts]);

  const filtered = useMemo(
    () => (filter === "all" ? posts : posts.filter((post) => post.category === filter)),
    [filter, posts],
  );

  const writingPosts = useMemo(
    () => posts.filter((post) => post.category !== "scratchpad"),
    [posts],
  );

  const scratchpadPosts = useMemo(
    () => posts.filter((post) => post.category === "scratchpad"),
    [posts],
  );

  return (
    <main className="relative z-10 flex min-h-full flex-col items-center p-5 md:p-12">
      <div className="mx-auto w-full max-w-xl space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black">writing</h1>
        </div>
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter by category">
          {available.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id)}
                className={[
                  "px-0 py-1 text-sm transition-colors",
                  active
                    ? "text-black underline decoration-current underline-offset-4"
                    : "text-stone-600 hover:text-black",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>

        {filter === "all" ? (
          <div className="space-y-3">
            {writingPosts.length > 0 && (
              <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
                {writingPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="-mx-2 flex items-baseline justify-between gap-4 rounded-md px-2 py-0.5 text-stone-600"
                    >
                      <span className="whitespace-nowrap text-stone-400">{post.date}</span>
                      <span className="flex-1 text-right">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {scratchpadPosts.length > 0 && (
              <div className="pl-2">
                <p className="mb-1.5 text-sm text-stone-500">scratchpad</p>
                <ul className="text-sm md:text-base text-stone-600 space-y-1.5">
                  {scratchpadPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="-mx-2 flex items-baseline justify-between gap-4 rounded-md px-2 py-0.5 text-stone-600"
                      >
                        <span className="whitespace-nowrap text-stone-400">{post.date}</span>
                        <span className="flex-1 text-right">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : filtered.length > 0 ? (
          <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
            {filtered.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="-mx-2 flex items-baseline justify-between gap-4 rounded-md px-2 py-0.5 text-stone-600"
                >
                  <span className="whitespace-nowrap text-stone-400">{post.date}</span>
                  <span className="flex-1 text-right">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-base text-stone-500">nothing in this category</p>
        )}

        <Footer className="mt-10" />
      </div>
    </main>
  );
}
