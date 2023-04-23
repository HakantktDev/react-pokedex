import { render, screen } from '@testing-library/react';
import DetailErrorPage from '../pages/DetailError';

describe('DetailErrorPage', () => {
  test('renders error message', () => {
    render(<DetailErrorPage />);
    const errorMessage = screen.getByRole('heading', { name: /Can not find this pokemon detail!/i });
    expect(errorMessage).toBeInTheDocument();
  });
});
