import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saving you from your Git troubles | Amaan Bilwar',
  description:
    'A guide to surviving Git: merge conflicts, rebasing, cherry picking, and making sane PRs.',
  openGraph: {
    title: 'Saving you from your Git troubles',
    description:
      'A guide to surviving Git: merge conflicts, rebasing, cherry picking, and making sane PRs.',
    type: 'article',
    images: ['/blogs/template/placeholder.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saving you from your Git troubles',
    images: ['/blogs/template/placeholder.svg'],
  },
};

export default function Git101Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
