import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'why ontology for text-to-sql? | Nicholas Chen',
  description: 'Why ontology is crucial for text-to-SQL systems',
  metadataBase: new URL('https://nicholaschen.me'),
  alternates: {
    canonical: '/blogs/ontology-text-to-sql',
  },
  openGraph: {
    title: 'why ontology for text-to-sql?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    url: 'https://nicholaschen.me/blogs/ontology-text-to-sql',
    siteName: 'Nicholas Chen',
    images: [
      {
        url: 'https://nicholaschen.me/blogs/ontology/ontology.png',
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
    creator: '@nicholaschen__',
    title: 'why ontology for text-to-sql?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    images: ['https://nicholaschen.me/blogs/ontology/ontology.png'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
