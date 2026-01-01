import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'git commands | Nicholas Chen',
  description: 'A guide to git commands and workflows',
  openGraph: {
    title: 'git commands',
    description: 'A guide to git commands and workflows',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'git commands',
  },
};

export default function GitBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
