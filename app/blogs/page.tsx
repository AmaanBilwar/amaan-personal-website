import type { Metadata } from "next";
import WritingClient from "@/components/WritingClient";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "writing | amaan",
  description: "All writing by Amaan.",
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
