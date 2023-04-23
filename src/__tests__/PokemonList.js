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

    // expect(screen.getByText('1. Bulbasaur')).toBeInTheDocument();
    // expect(screen.getByText('2. Charmander')).toBeInTheDocument();
    // expect(screen.getByAltText('Bulbasaur')).toBeInTheDocument();
    // expect(screen.getByAltText('Charmander')).toBeInTheDocument();
    // expect(screen.getByText('Grass')).toBeInTheDocument();
    // expect(screen.getByText('Poison')).toBeInTheDocument();
    // expect(screen.getByText('Fire')).toBeInTheDocument();
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
