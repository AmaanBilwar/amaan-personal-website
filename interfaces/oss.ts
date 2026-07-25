export interface OssItem {
  label: string;
  href: string;
  description?: string;
  /** Used as a filter chip on /oss (e.g. zed, gemini, helix). */
  category?: string;
}

export interface OssContent {
  title: string;
  description?: string;
  items: OssItem[];
}
