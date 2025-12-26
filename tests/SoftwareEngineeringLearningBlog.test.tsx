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
        '• started learning programming in high school with introduction to programming courses',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText('• got accepted to university of waterloo for systems design engineering'),
    ).toBeInTheDocument();
  });
});
