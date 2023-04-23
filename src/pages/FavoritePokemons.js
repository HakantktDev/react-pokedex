import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FavoritePokemonsPage = () => {
  const { t } = useTranslation();
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
        <h3 className="text-center mt-20">{t('There is no pokemon to list on this page!')}</h3>
      )}
    </>
  );
};

export default FavoritePokemonsPage;
