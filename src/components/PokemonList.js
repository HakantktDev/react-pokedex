import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PokemonList = ({ pokemons }) => {
  const { t } = useTranslation();

  const capitalizeFirstLetterHandler = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  return (
    <div className="pokemon-container">
      {pokemons && pokemons.map((p) => (
        <Link to={`/pokemon-details/${p.id}`} key={p.id} className="pokemon-card">
          <div>
            <img src={p.sprites?.other.dream_world.front_default} alt={p.name} width={50} height={50} />
            <p className="poke-name">
              <span>{p.id}. </span>
              {p.name}
            </p>
            {p.types?.map((type) => (
              <div className={`pokemon-types ${type.type?.name}`} key={type.type?.name}>
                {t(capitalizeFirstLetterHandler(type.type?.name))}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
