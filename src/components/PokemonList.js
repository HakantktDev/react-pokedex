import { Link } from 'react-router-dom';

const PokemonList = ({ pokemons }) => {
  const capitalizeFirstLetterHandler = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // console.log(pokemons);
  return (
    <div className="pokemon-container">
      {pokemons &&
        pokemons.map((p) => (
          <Link to={`/pokemon-details/${p.id}`} key={p.id} className="pokemon-card">
            <div>
              <img src={p.sprites.other.dream_world.front_default} alt={p.name} width={50} height={50} />
              <p style={{ margin: '0', textTransform: 'capitalize' }}>
                <span>{p.id}. </span>
                {p.name}
              </p>
              {p.types.map((type) => (
                <div className={`pokemon-types ${type.type.name}`} key={type.type.name}>
                  {capitalizeFirstLetterHandler(type.type.name)}
                </div>
              ))}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;
