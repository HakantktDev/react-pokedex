import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('renders previous and next buttons', () => {
  const mockNextPage = jest.fn();
  const mockPrevPage = jest.fn();
  render(<Pagination gotoNextPage={mockNextPage} gotoPrevPage={mockPrevPage} />);

  const prevButton = screen.getByRole('button', { name: /previous page/i });
  const nextButton = screen.getByRole('button', { name: /next page/i });

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  fireEvent.click(prevButton);
  fireEvent.click(nextButton);

  expect(mockPrevPage).toHaveBeenCalled();
  expect(mockNextPage).toHaveBeenCalled();
});
