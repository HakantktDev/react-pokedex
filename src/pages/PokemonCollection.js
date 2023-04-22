import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';
import { useEffect, useState } from 'react';

const PokemonCollectionPage = () => {
  const catchedPokemons = useSelector((state) => state.catchedPokemonsList);
  const [catchedPokemonsIsEmpty, setCatchedPokemonsIsEmpty] = useState(null);
  // console.log(catchedPokemons);

  useEffect(() => {
    const catchedPokemonHandler = () => {
      if (catchedPokemons.length === 0) {
        setCatchedPokemonsIsEmpty(true);
      } else {
        setCatchedPokemonsIsEmpty(false);
      }
    };
    catchedPokemonHandler();
  }, [catchedPokemons]);
  // console.log(catchedPokemonsIsEmpty);
  return (
    <>
      {!catchedPokemonsIsEmpty && <PokemonList pokemons={catchedPokemons} />}
      {catchedPokemonsIsEmpty && (
        <h3 style={{ textAlign: 'center', marginTop: '20px' }}>There is no pokemon to list on this page!</h3>
      )}
    </>
  );
};

export default PokemonCollectionPage;
