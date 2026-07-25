export type ReadingStatus = "reading" | "read" | "want";

export interface ReadingItem {
  title: string;
  href?: string;
  author?: string;
  note?: string;
  status?: ReadingStatus;
}

export interface ReadingContent {
  title: string;
  description?: string;
  items: ReadingItem[];
}
