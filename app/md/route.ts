import { getOssContent, getReadingContent, getSiteContent } from "@/lib/content";
import { buildHomeMarkdown, markdownResponse } from "@/lib/markdownResponse";
import { getAllPosts } from "@/lib/posts";

// Prerendered at build time: the markdown is fully known from `_content`/`_posts`
// at build, so we render it once into a static asset rather than per request.
// `proxy.ts` rewrites `Accept: text/markdown` requests for `/` here.
export const dynamic = "force-static";

export function GET(): Response {
  const { home } = getSiteContent();
  const allPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    listTitle: post.listTitle,
    category: post.category,
  }));
  const featured = home.blogs?.featured;
  const bySlug = new Map(allPosts.map((post) => [post.slug, post]));
  const posts = featured
    ? featured.flatMap((slug) => {
        const post = bySlug.get(slug);
        return post ? [post] : [];
      })
    : allPosts;

  const reading = getReadingContent();
  const featuredReading = home.reading?.featured;
  const byTitle = new Map((reading.items ?? []).map((item) => [item.title.trim(), item]));
  const readingItems = featuredReading
    ? featuredReading.flatMap((title) => {
        const item = byTitle.get(title.trim());
        return item ? [item] : [];
      })
    : (reading.items ?? []);

  const oss = getOssContent();
  const featuredOss = home.oss?.featured;
  const byLabel = new Map((oss.items ?? []).map((item) => [item.label.trim(), item]));
  const ossItems = featuredOss
    ? featuredOss.flatMap((label) => {
        const item = byLabel.get(label.trim());
        return item ? [item] : [];
      })
    : (oss.items ?? []);

  return markdownResponse(buildHomeMarkdown(home, posts, readingItems, ossItems));
}
