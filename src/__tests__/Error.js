import { render, screen } from '@testing-library/react';
import ErrorPage from '../pages/Error';

describe('ErrorPage', () => {
  it('renders the heading and message', () => {
    render(<ErrorPage />);
    expect(screen.getByRole('heading', { name: /an error occurred!/i })).toBeInTheDocument();
    expect(screen.getByText(/could not find this page!/i)).toBeInTheDocument();
  });
});
