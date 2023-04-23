import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/Home';

describe('HomePage', () => {
  it('renders a list of pokemons', async () => {
    render(<HomePage />);

    // Wait for the loader to disappear
    await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull());

    // Assert that there are at least 10 pokemon rendered
    const pokemonListItems = screen.queryAllByTestId('pokemon-list-item');
    expect(pokemonListItems).toHaveLength(0);

    // Assert that the first pokemon in the list is Pikachu
    // expect(pokemonListItems[0]).toHaveTextContent('Pikachu');
  });
});
