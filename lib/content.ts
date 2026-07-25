import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { OssContent, OssItem } from "@/interfaces/oss";
import type { ReadingContent, ReadingItem } from "@/interfaces/reading";
import type { SiteContent } from "@/interfaces/site";

const contentDirectory = join(process.cwd(), "_content");

export function getSiteContent(): SiteContent {
  const fullPath = join(contentDirectory, "site.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data as SiteContent;
}

export function getReadingContent(): ReadingContent {
  const fullPath = join(contentDirectory, "reading.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const raw = data as Partial<ReadingContent> & {
    sections?: Array<{ label?: string; items?: ReadingItem[] }>;
  };

  // Prefer flat `items`; fall back to legacy `sections[].items` if present.
  const items: ReadingItem[] = (Array.isArray(raw.items)
    ? raw.items
    : Array.isArray(raw.sections)
      ? raw.sections.flatMap((section) => section.items ?? [])
      : []
  ).map((item) => ({
    ...item,
    title: item.title.trim(),
  }));

  return {
    title: raw.title ?? "reading",
    description: raw.description,
    items,
  };
}

export function getOssContent(): OssContent {
  const fullPath = join(contentDirectory, "oss.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const raw = data as Partial<OssContent>;

  const items: OssItem[] = (Array.isArray(raw.items) ? raw.items : []).map((item) => ({
    ...item,
    label: item.label.trim(),
    category: item.category?.trim(),
  }));

  return {
    title: raw.title ?? "oss",
    description: raw.description,
    items,
  };
}
