import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import FavoritePokemonsPage from '../pages/FavoritePokemons';
import store from '../store';

describe('FavoritePokemonsPage', () => {
  test('renders the page with the text "There is no pokemon to list on this page!" when the favoritePokemons list is empty', () => {
    render(
      <Provider store={store}>
        <FavoritePokemonsPage />
      </Provider>
    );

    const emptyListText = screen.getByText('There is no pokemon to list on this page!');
    expect(emptyListText).toBeInTheDocument();
  });

  test('renders the list of favorite pokemons when the favoritePokemons list is not empty', () => {
    render(
      <Provider store={store}>
        <FavoritePokemonsPage />
      </Provider>
    );

    // // replace the following line with a suitable query
    // const pokemonList = screen.getByRole('pokemon-list');
    // expect(pokemonList).toBeInTheDocument();
  });
});
