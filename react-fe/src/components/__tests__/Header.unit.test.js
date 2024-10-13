import React from 'react';
import { render, screen } from '@testing-library/react';
import matchMediaMock from 'jest-matchmedia-mock';
import '@testing-library/jest-dom';

import Header from '../Header';

let matchMedia;

beforeAll(() => {
  matchMedia = new matchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

describe('Header Component', () => {
  test('renders correctly without props', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders correctly with props', () => {
    const testProps = { testProp: 'test' };
    render(<Header {...testProps} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  /* Test disabled until fixed for testing purposes
  test('mobile menu toggle button visibility', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });

    // Simulate a mobile screen
    matchMedia.useMediaQuery('(max-width: 1199px)');
    expect(toggleButton).toBeVisible();

    // Simulate a desktop screen
    matchMedia.useMediaQuery('(min-width: 1200px)');
    expect(toggleButton).not.toBeVisible();
  });

  */

  test('all navigation links are present', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks).toHaveLength(6);
    
    const expectedLinks = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];
    expectedLinks.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  test('applies correct CSS classes for styling', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
    expect(headerElement).toHaveClass('d-flex');
    expect(headerElement).toHaveClass('flex-column');
    expect(headerElement).toHaveClass('justify-content-center');

    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('navmenu');
  });
});