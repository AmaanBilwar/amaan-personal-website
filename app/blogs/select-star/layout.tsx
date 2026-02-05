import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why SELECT * Hurts Database Performance | Nicholas Chen',
  description: 'Understanding why SELECT * is bad for database performance and what to do instead',
  openGraph: {
    title: 'Why SELECT * Hurts Database Performance',
    description: 'Understanding why SELECT * is bad for database performance and what to do instead',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/select-star/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why SELECT * Hurts Database Performance',
    images: ['https://nicholaschen.me/blogs/select-star/cover.png'],
  },
};

export default function SelectStarBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
