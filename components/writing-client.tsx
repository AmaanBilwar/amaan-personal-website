"use client";

import { useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import type { PostCategory } from "@/interfaces/post";

export type WritingPost = {
  slug: string;
  title: string;
  category: PostCategory;
  date: string;
};

export default function WritingClient({ posts }: { posts: WritingPost[] }) {
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black">blog</h1>
        </div>
        <div className="space-y-3">
          {writingPosts.length > 0 && (
            <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
              {writingPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
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
                      href={`/blog/${post.slug}`}
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

        <Footer className="mt-10" />
      </div>
    </main>
  );
}
