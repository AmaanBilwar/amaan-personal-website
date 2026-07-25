import type { Post } from "@/interfaces/post";
import type { SiteHome, SiteLinkItem, SiteRoleLinkItem, SiteSection } from "@/interfaces/site";

const SITE_URL = "https://amaandoes.tech";

// Rough token estimate (~4 characters per token, matching common LLM tokenizers).
// Surfaced to agents via the `x-markdown-tokens` response header so they can
// budget context before fetching the body.
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// Wraps a markdown string in a Response with the headers agents negotiate for.
// `Vary: Accept` keeps caches from serving this markdown to browsers that asked
// for HTML (and vice versa).
export function markdownResponse(markdown: string): Response {
  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(estimateTokens(markdown)),
      // Content is prerendered and only changes on redeploy, so let the CDN
      // edge-cache it indefinitely (Vercel purges the cache on each deploy)
      // while browsers revalidate. `stale-while-revalidate` avoids a latency
      // spike on the first request after a purge.
      "Cache-Control": "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
      Vary: "Accept",
    },
  });
}

function frontmatter(fields: Record<string, string | undefined>): string {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

export function buildPostMarkdown(post: Post): string {
  const fm = frontmatter({
    title: post.title,
    date: post.date,
    author: post.author,
    description: post.excerpt,
    readingMinutes: post.readingMinutes.toString(),
    url: `${SITE_URL}/blogs/${post.slug}`,
  });
  return `${fm}${post.content.trim()}\n`;
}

function isRoleLink(item: SiteLinkItem | SiteRoleLinkItem): item is SiteRoleLinkItem {
  return "role" in item;
}

function renderSection(section?: SiteSection<SiteLinkItem | SiteRoleLinkItem>): string {
  if (!section) return "";
  const lines = [`## ${section.label}`, ""];
  for (const item of section.items) {
    if (isRoleLink(item)) {
      const detail = item.detail ? ` — ${item.detail}` : "";
      lines.push(`- ${item.role} — [${item.name}](${item.href})${detail}`);
    } else {
      const desc = item.description ? ` — ${item.description}` : "";
      lines.push(`- [${item.label}](${item.href})${desc}`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

export function buildHomeMarkdown(
  home: SiteHome,
  posts: Pick<Post, "slug" | "listTitle" | "category">[],
  readingItems: Array<{ title: string; href?: string; author?: string; note?: string }> = [],
  ossItems: Array<{ label: string; href: string; description?: string }> = [],
  currentlyReading: { title: string; href?: string; author?: string; note?: string } | null = null,
): string {
  const fm = frontmatter({ title: home.title, url: SITE_URL });

  const sections: string[] = [`# ${home.title}`, "", renderSection(home.currently)];

  if (home.currentlyReading && currentlyReading) {
    const meta = [currentlyReading.author, currentlyReading.note].filter(Boolean).join(" — ");
    const suffix = meta ? ` — ${meta}` : "";
    const line = currentlyReading.href
      ? `- [${currentlyReading.title}](${currentlyReading.href})${suffix}`
      : `- ${currentlyReading.title}${suffix}`;
    sections.push(`## ${home.currentlyReading.label}`, "", line, "");
  }

  sections.push(
    renderSection(home.previously),
    renderSection(home.projects),
  );

  // Mirror the home page: curated flat list.
  if (home.blogs) {
    const blogLines = [`## ${home.blogs.label}`, ""];
    for (const post of posts) {
      blogLines.push(`- [${post.listTitle}](${SITE_URL}/blogs/${post.slug})`);
    }
    blogLines.push("", `- [see everything →](${SITE_URL}/blogs)`, "");
    sections.push(blogLines.join("\n"));
  }

  if (home.reading && readingItems.length > 0) {
    const lines = [`## ${home.reading.label}`, ""];
    for (const item of readingItems) {
      const meta = [item.author, item.note].filter(Boolean).join(" — ");
      const suffix = meta ? ` — ${meta}` : "";
      if (item.href) {
        lines.push(`- [${item.title}](${item.href})${suffix}`);
      } else {
        lines.push(`- ${item.title}${suffix}`);
      }
    }
    lines.push("", `- [see everything →](${SITE_URL}/reading)`, "");
    sections.push(lines.join("\n"));
  } else {
    sections.push(renderSection(home.reading as SiteSection<SiteLinkItem> | undefined));
  }

  if (home.oss && ossItems.length > 0) {
    const lines = [`## ${home.oss.label}`, ""];
    for (const item of ossItems) {
      const desc = item.description ? ` — ${item.description}` : "";
      lines.push(`- [${item.label}](${item.href})${desc}`);
    }
    lines.push("", `- [see everything →](${SITE_URL}/oss)`, "");
    sections.push(lines.join("\n"));
  } else {
    sections.push(renderSection(home.oss as SiteSection<SiteLinkItem> | undefined));
  }

  if (home.scratchpad) {
    const scratchpadPosts = posts.filter((post) => post.category === "scratchpad");
    if (scratchpadPosts.length > 0) {
      const lines = [`## ${home.scratchpad.label}`, ""];
      for (const post of scratchpadPosts) {
        lines.push(`- [${post.listTitle}](${SITE_URL}/blogs/${post.slug})`);
      }
      lines.push("");
      sections.push(lines.join("\n"));
    }
  }

  sections.push(renderSection(home.resume));

  return `${fm}${sections.join("\n")}`;
}
