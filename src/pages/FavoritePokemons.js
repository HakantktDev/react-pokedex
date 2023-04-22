import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';
import { useState, useEffect } from 'react';

const FavoritePokemonsPage = () => {
  const favoritePokemons = useSelector((state) => state.favoritePokemonsList);
  const [favoritePokemonsIsEmpty, setFavoritePokemonsIsEmpty] = useState(null);

  useEffect(() => {
    const catchedPokemonHandler = () => {
      if (favoritePokemons.length === 0) {
        setFavoritePokemonsIsEmpty(true);
      } else {
        setFavoritePokemonsIsEmpty(false);
      }
    };
    catchedPokemonHandler();
  }, [favoritePokemons]);

  return (
    <>
      {!favoritePokemonsIsEmpty && <PokemonList pokemons={favoritePokemons} />}
      {favoritePokemonsIsEmpty && (
        <h3 style={{ textAlign: 'center', marginTop: '20px' }}>There is no pokemon to list on this page!</h3>
      )}
    </>
  );
};

export default FavoritePokemonsPage;
