import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'how i made my personal website | Nicholas Chen',
  description: 'A look into the process and technology behind building my personal website',
  openGraph: {
    title: 'how i made my personal website',
    description: 'A look into the process and technology behind building my personal website',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/personal-website/github-repo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'how i made my personal website',
    images: ['https://nicholaschen.me/blogs/personal-website/github-repo.png'],
  },
};

export default function PersonalWebsiteBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
