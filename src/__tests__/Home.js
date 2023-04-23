import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/Home';

describe('HomePage', () => {
  it('renders a list of pokemons', async () => {
    render(<HomePage />);

    await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull());

    const pokemonListItems = screen.queryAllByTestId('pokemon-list-item');
    expect(pokemonListItems).toHaveLength(0);
  });
});
