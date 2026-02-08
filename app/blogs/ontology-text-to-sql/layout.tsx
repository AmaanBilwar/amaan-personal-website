import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "why ontology for text-to-sql? | Nicholas Chen",
  description: "Why ontology is crucial for text-to-SQL systems",
  openGraph: {
    title: "why ontology for text-to-sql?",
    description: "Why ontology is crucial for text-to-SQL systems",
    type: "article",
    images: ["https://nicholaschen.me/blogs/ontology/ontology.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "why ontology for text-to-sql?",
    images: ["https://nicholaschen.me/blogs/ontology/ontology.png"],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
