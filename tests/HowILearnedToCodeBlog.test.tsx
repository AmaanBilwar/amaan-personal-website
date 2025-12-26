import { render, screen } from '@testing-library/react';
import HowILearnedToCodeBlog from '../app/blogs/how-i-learned-to-code/page';
import { describe, it, expect } from 'vitest';

// No context needed for this static page
describe('How I Learned to Code Blog Page', () => {
  it('renders the title', () => {
    render(<HowILearnedToCodeBlog />);
    expect(screen.getByText('how i learned to code')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<HowILearnedToCodeBlog />);
    expect(screen.getByText('back')).toBeInTheDocument();
  });

  it('renders learning timeline', () => {
    render(<HowILearnedToCodeBlog />);
    expect(
      screen.getByText(
        '• learned the basics of c++ from my computer science teacher in high school',
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'university of waterloo' })).toHaveLength(1);
  });
});
