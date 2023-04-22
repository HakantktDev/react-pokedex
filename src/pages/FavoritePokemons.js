import { useSelector } from 'react-redux';
import PokemonList from '../components/PokemonList';

const FavoritePokemonsPage = () => {
  const favoritePokemons = useSelector((state) => state.favoritePokemonsList);
  return <PokemonList pokemons={favoritePokemons} />;
};

export default FavoritePokemonsPage;
