import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reflecting on my first engineering internship | Nicholas Chen",
  description: "Reflections on my first co-op experience as a software engineer intern at Ownr",
  openGraph: {
    title: "reflecting on my first engineering internship",
    description: "Reflections on my first co-op experience as a software engineer intern at Ownr",
    type: "article",
    images: ["https://nicholaschen.me/blogs/first-internship/ownr.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "reflecting on my first engineering internship",
    images: ["https://nicholaschen.me/blogs/first-internship/ownr.png"],
  },
};

export default function FirstInternshipBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
