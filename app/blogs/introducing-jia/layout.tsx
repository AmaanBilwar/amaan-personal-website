import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'blog template | Amaan Bilwar',
  description: 'Template structure for a blog post',
  openGraph: {
    title: 'blog template',
    description: 'Template structure for a blog post',
    type: 'article',
    images: ['/blogs/template/placeholder.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'blog template',
    images: ['/blogs/template/placeholder.svg'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
