import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import PokemonDetailPage from '../pages/PokemonDetail';
import store from '../store';

describe('PokemonDetailPage', () => {
  const pokemonData = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        stat: { name: 'hp' },
      },
      {
        base_stat: 49,
        stat: { name: 'attack' },
      },
      {
        base_stat: 49,
        stat: { name: 'defense' },
      },
      {
        base_stat: 65,
        stat: { name: 'special-attack' },
      },
      {
        base_stat: 65,
        stat: { name: 'special-defense' },
      },
      {
        base_stat: 45,
        stat: { name: 'speed' },
      },
    ],
  };

  it('should render the Pokemon name', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetailPage data={pokemonData} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it('should render the "Catch" button when the Pokemon is not caught', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetailPage data={pokemonData} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/catch/i)).toBeInTheDocument();
  });

  it('should render the "Release Pokemon" button when the Pokemon is caught', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetailPage data={pokemonData} />
        </MemoryRouter>
      </Provider>
    );

    const catchButton = screen.getByText(/catch/i);
    fireEvent.click(catchButton);

    expect(screen.getByText(/release pokemon/i)).toBeInTheDocument();
  });
});
