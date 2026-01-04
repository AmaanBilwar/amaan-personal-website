import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'what is gRPC? | Nicholas Chen',
  description: 'An introduction to gRPC and how it works',
  openGraph: {
    title: 'what is gRPC?',
    description: 'An introduction to gRPC and how it works',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/grpc/grpc.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'what is gRPC?',
    images: ['https://nicholaschen.me/blogs/grpc/grpc.png'],
  },
};

export default function GrpcBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
