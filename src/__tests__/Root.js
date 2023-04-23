import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../pages/Root';

describe('RootLayout', () => {
  it('renders Navigation component and main content', () => {
    render(<RootLayout />);
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders Loader component when navigation state is "loading"', () => {
    const { rerender } = render(<RootLayout />);
    rerender(<RootLayout navigation={{ state: 'loading' }} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByRole('main')).not.toBeInTheDocument();
  });
});
