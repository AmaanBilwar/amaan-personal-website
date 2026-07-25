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
  { id: "scratchpad", label: "scratchpad" },
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

  return (
    <main className="relative z-10 flex min-h-full flex-col items-center p-5 md:p-12">
      <div className="mx-auto w-full max-w-xl space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black">writing</h1>
          <p className="mt-2 text-sm md:text-base text-stone-500">
            {filter === "all"
              ? `everything published — ${posts.length} ${posts.length === 1 ? "piece" : "pieces"}`
              : `${filtered.length} of ${posts.length}`}
          </p>
        </div>

        <div className="flex flex-wrap gap-0.5" role="tablist" aria-label="Filter by category">
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
                  "nav-link rounded-md px-2 py-1 text-sm",
                  active
                    ? "bg-stone-100 text-black"
                    : "text-stone-600 hover:bg-stone-100 hover:text-black",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
            {filtered.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="nav-link block -mx-2 rounded-md px-2 py-0.5 text-stone-600"
                >
                  {post.title}
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
