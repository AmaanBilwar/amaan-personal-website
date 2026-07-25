import type { Metadata } from "next";
import ReadingClient from "@/components/ReadingClient";
import { getReadingContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "reading | amaan",
  description: "Things Amaan is reading, has read, or wants to read.",
};

export default function ReadingPage() {
  const reading = getReadingContent();
  return <ReadingClient reading={reading} />;
}
