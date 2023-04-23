import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonList from '../components/PokemonList';

describe('PokemonList', () => {
  test('renders a list of Pokemon cards', () => {
    const mockPokemons = [
      {
        id: 1,
        name: 'bulbasaur',
        sprites: { other: { dream_world: { front_default: 'https://fakeurl.com/bulbasaur.png' } } },
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      },
      {
        id: 2,
        name: 'charmander',
        sprites: {
          other: {
            dream_world: {
              front_default: 'https://fakeurl.com/charmander.png',
            },
          },
        },
        types: [
          {
            type: {
              name: 'fire',
            },
          },
        ],
      },
    ];

    render(
      <MemoryRouter>
        <PokemonList pokemons={mockPokemons} />
      </MemoryRouter>
    );
  });

  test('renders a message when there are no pokemons to list', () => {
    const mockPokemons = [];

    render(
      <MemoryRouter>
        <PokemonList pokemons={mockPokemons} />
      </MemoryRouter>
    );

    expect(screen.getByText('There is no pokemon to list on this page!')).toBeInTheDocument();
  });
});
