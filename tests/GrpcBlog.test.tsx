import { render, screen } from '@testing-library/react';
import GrpcBlog from '../app/blogs/grpc/page';
import { describe, it, expect } from 'vitest';

describe('gRPC Blog Page', () => {
  it('renders title', () => {
    render(<GrpcBlog />);
    expect(screen.getByText('what is gRPC?')).toBeInTheDocument();
  });

  it('renders back link', () => {
    render(<GrpcBlog />);
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
