import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'git commands | Nicholas Chen',
  description: 'A guide to git commands and workflows',
  openGraph: {
    title: 'git commands',
    description: 'A guide to git commands and workflows',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/git/git-copy.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'git commands',
    images: ['https://nicholaschen.me/blogs/git/git-copy.png'],
  },
};

export default function GitBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
