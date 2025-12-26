import { render, screen } from '@testing-library/react';
import SoftwareEngineeringLearningBlog from '../app/blogs/software-engineering-learning/page';
import { describe, it, expect } from 'vitest';

// No context needed for this static page
describe('Software Engineering Learning Blog Page', () => {
  it('renders the title', () => {
    render(<SoftwareEngineeringLearningBlog />);
    expect(screen.getByText('how i learned to code')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<SoftwareEngineeringLearningBlog />);
    expect(screen.getByText('back')).toBeInTheDocument();
  });

  it('renders learning timeline', () => {
    render(<SoftwareEngineeringLearningBlog />);
    expect(
      screen.getByText(
        '• learned the basics of c++ from my computer science teacher in high school',
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'university of waterloo' })).toHaveLength(2);
  });
});
