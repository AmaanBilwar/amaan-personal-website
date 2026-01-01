import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'how i learned to code | Nicholas Chen',
  description: 'Small learnings that taught me to code',
  openGraph: {
    title: 'how i learned to code',
    description: 'Small learnings that taught me to code',
    url: 'https://nicholaschen.me/blogs/how-i-learned-to-code',
    siteName: 'Nicholas Chen',
    images: [
      {
        url: 'https://nicholaschen.me/blogs/code/iterm2.png',
        width: 1200,
        height: 630,
        alt: 'How I Learned to Code',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nicholaschen__',
    title: 'how i learned to code',
    description: 'Small learnings that taught me to code',
    images: ['https://nicholaschen.me/blogs/code/iterm2.png'],
  },
};

export default function HowILearnedToCodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
