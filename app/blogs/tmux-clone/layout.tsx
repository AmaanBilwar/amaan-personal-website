import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'writing a tmux clone for windows | Amaan Bilwar',
  description: 'tmux-clone ',
  openGraph: {
    title: 'tmux-clone',
    description: 'tmux-clone structure for a blog post',
    type: 'article',
    images: ['/blogs/tmux-clone/placeholder.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'blog tmux-clone',
    images: ['/blogs/tmux-clone/placeholder.svg'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
