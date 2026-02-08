import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "how i learned to code | Nicholas Chen",
  description: "Small learnings that taught me to code",
  openGraph: {
    title: "how i learned to code",
    description: "Small learnings that taught me to code",
    type: "article",
    images: ["https://nicholaschen.me/blogs/code/iterm2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "how i learned to code",
    images: ["https://nicholaschen.me/blogs/code/iterm2.png"],
  },
};

export default function HowILearnedToCodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
