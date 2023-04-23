import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Loader', () => {
  it('displays the loading message with translated text', () => {
    render(<Loader />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('displays the pokeball spinner image with alt text', () => {
    render(<Loader />);
    const spinnerImage = screen.getByAltText('pokeball');
    expect(spinnerImage).toBeInTheDocument();
  });
});
