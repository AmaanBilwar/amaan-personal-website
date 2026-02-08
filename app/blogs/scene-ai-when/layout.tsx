import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scene AI When | Amaan Bilwar',
  description: 'Scene AI When',
  openGraph: {
    title: 'Scene AI when',
    description: '',
    type: 'article',
    images: ['/blogs/template/placeholder.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scene AI when',
    images: ['/blogs/template/placeholder.svg'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
