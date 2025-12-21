import { render, screen } from '@testing-library/react';
import GitBlog from '../app/blogs/concepts-and-commands-for-git/page';
import { describe, it, expect } from 'vitest';

// No context needed for this static page
describe('Git Blog Page', () => {
  it('renders the title', () => {
    render(<GitBlog />);
    expect(screen.getByText('concepts and commands for git')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<GitBlog />);
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});