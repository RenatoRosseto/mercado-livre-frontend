import React from 'react';
import { render, screen, fireEvent } from 'utils/test-utils';
import each from 'jest-each';

import Button from './Button';

describe('Button Component', () => {
  it('renders button with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies fullWidth style when fullWidth prop is true', () => {
    render(<Button fullWidth>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('width: 100%;');
  });

  each(['small', 'large']).it('applies size "%s" style', (size) => {
    render(<Button size={size}>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(
      size === 'small'
        ? 'font-size: 1.2rem; height: 24px; line-height: 24px; padding: 0px; border-radius: 0.6rem;'
        : 'font-size: 1.6rem; height: 48px; line-height: 48px; padding: 0 2.4rem; border-radius: 0.6rem;',
    );
  });
});
