import { Link } from 'react-router-dom';

const PokemonList = ({ pokemons }) => {
  // console.log(pokemons);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1375px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {pokemons &&
        pokemons.map((p) => (
          <Link to={`pokemon-details/${p.id}`} key={p.id} className="my-about-div">
            <div>
              <img src={p.sprites.other.dream_world.front_default} alt={p.name} width={50} height={50} />
              <p style={{ margin: '0', textTransform: 'capitalize' }}>
                <span>{p.id}. </span>
                {p.name}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;
