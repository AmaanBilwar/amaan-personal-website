import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'why ontology for text-to-sql? | Nicholas Chen',
  description: 'Why ontology is crucial for text-to-SQL systems',
  openGraph: {
    title: 'why ontology for text-to-sql?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    url: 'https://nicholaschen.com/blogs/ontology-text-to-sql',
    siteName: 'Nicholas Chen',
    images: [
      {
        url: 'https://nicholaschen.com/blogs/ontology/ontology.png',
        width: 1200,
        height: 630,
        alt: 'TextQL Ontology Interface',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nicholaschen__',
    title: 'why ontology for text-to-sql?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    images: ['https://nicholaschen.com/blogs/ontology/ontology.png'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
