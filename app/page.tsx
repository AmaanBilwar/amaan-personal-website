import HomeClient from "@/components/HomeClient";
import type { OssItem } from "@/interfaces/oss";
import type { ReadingItem } from "@/interfaces/reading";
import { getOssContent, getReadingContent, getSiteContent } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";

function pickFeaturedReading(items: ReadingItem[], featured?: string[]): ReadingItem[] {
  if (!featured) return items;
  const byTitle = new Map(items.map((item) => [item.title.trim(), item]));
  return featured.flatMap((title) => {
    const item = byTitle.get(title.trim());
    return item ? [item] : [];
  });
}

function pickFeaturedOss(items: OssItem[], featured?: string[]): OssItem[] {
  if (!featured) return items;
  const byLabel = new Map(items.map((item) => [item.label.trim(), item]));
  return featured.flatMap((label) => {
    const item = byLabel.get(label.trim());
    return item ? [item] : [];
  });
}

export default function HomePage() {
  const { home } = getSiteContent();
  const allPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.listTitle,
    category: post.category,
  }));

  const featuredBlogs = home.blogs?.featured;
  const postsBySlug = new Map(allPosts.map((post) => [post.slug, post]));
  const blogPosts = featuredBlogs
    ? featuredBlogs.flatMap((slug) => {
        const post = postsBySlug.get(slug);
        return post ? [post] : [];
      })
    : allPosts;

  const reading = getReadingContent();
  const readingItems = pickFeaturedReading(reading.items ?? [], home.reading?.featured);
  const currentlyReadingTitle = home.currentlyReading?.title?.trim();
  const currentlyReading = currentlyReadingTitle
    ? (reading.items ?? []).find((item) => item.title.trim() === currentlyReadingTitle) ?? null
    : null;

  const oss = getOssContent();
  const ossItems = pickFeaturedOss(oss.items ?? [], home.oss?.featured);

  return (
    <HomeClient
      home={home}
      blogPosts={blogPosts}
      readingItems={readingItems}
      currentlyReading={currentlyReading}
      ossItems={ossItems}
    />
  );
}
