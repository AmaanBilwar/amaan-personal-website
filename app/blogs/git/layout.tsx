import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'git commands | Nicholas Chen',
  description: 'A guide to git commands and workflows',
  openGraph: {
    title: 'git commands',
    description: 'A guide to git commands and workflows',
    url: 'https://nicholaschen.me/blogs/git',
    siteName: 'Nicholas Chen',
    images: [
      {
        url: 'https://nicholaschen.me/blogs/git/git-copy.png',
        width: 1200,
        height: 630,
        alt: 'Git',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nicholaschen__',
    title: 'git commands',
    description: 'A guide to git commands and workflows',
    images: ['https://nicholaschen.me/blogs/git/git-copy.png'],
  },
};

export default function GitBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
