import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "my thoughts on waterloo's co-op program | Nicholas Chen",
  description:
    "Reflections on studying at the University of Waterloo and the co-op program experience",
  openGraph: {
    title: "my thoughts on waterloo's co-op program",
    description:
      "Reflections on studying at the University of Waterloo and the co-op program experience",
    type: "article",
    images: ["https://nicholaschen.me/blogs/waterloo-coop/waterloostats.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "my thoughts on waterloo's co-op program",
    images: ["https://nicholaschen.me/blogs/waterloo-coop/waterloostats.png"],
  },
};

export default function WaterlooCoopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
