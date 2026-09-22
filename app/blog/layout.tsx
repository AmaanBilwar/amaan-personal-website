import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Amaan",
  description: "Blog posts by Amaan",
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
