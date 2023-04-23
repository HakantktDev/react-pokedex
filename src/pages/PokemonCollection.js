import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const PokemonCollectionPage = () => {
  const { t } = useTranslation();
  const catchedPokemons = useSelector((state) => state.catchedPokemonsList);
  const [catchedPokemonsIsEmpty, setCatchedPokemonsIsEmpty] = useState(null);

  useEffect(() => {
    const catchedPokemonHandler = () => {
      if (catchedPokemons.length === 0 || !catchedPokemons) {
        setCatchedPokemonsIsEmpty(true);
      } else {
        setCatchedPokemonsIsEmpty(false);
      }
    };
    catchedPokemonHandler();
  }, [catchedPokemons]);

  if (catchedPokemonsIsEmpty) {
    return <h3 className="text-center mt-20">{t('There is no pokemon to list on this page!')}</h3>;
  }

  return <>{!catchedPokemonsIsEmpty && <PokemonList pokemons={catchedPokemons} />}</>;
};

export default PokemonCollectionPage;
