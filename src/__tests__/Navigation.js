import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: { changeLanguage: jest.fn(), language: 'en' } }),
}));

describe('Navigation', () => {
  test('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Pokedex')).toBeInTheDocument();
    expect(screen.getByText('Pokemon Collection')).toBeInTheDocument();
    expect(screen.getByText('Favorite Pokemons')).toBeInTheDocument();
  });

  test('changes the language when the button is clicked', () => {
    const { i18n } = useTranslation();

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('TR'));
    expect(i18n.changeLanguage).toHaveBeenCalledWith('tr');

    fireEvent.click(screen.getByText('EN'));
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });
});
