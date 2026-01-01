import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'why ontology for text-to-sql? | Nicholas Chen',
  description: 'Why ontology is crucial for text-to-SQL systems',
  openGraph: {
    title: 'why ontology for text-to-sql?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'why ontology for text-to-sql?',
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
