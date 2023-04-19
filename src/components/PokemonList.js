import { Link } from 'react-router-dom';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((p) => (
        <div key={p.name}>
          <Link to={`pokemon-details/${p.name}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
