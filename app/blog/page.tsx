import type { Metadata } from "next";
import WritingClient from "@/components/writing-client";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "blog | amaan",
  description: "All blog posts by Amaan.",
};

export default function BlogsIndexPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.listTitle,
    category: post.category,
    date: post.date,
  }));

  return <WritingClient posts={posts} />;
}
