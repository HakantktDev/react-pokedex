import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import pokeball from '../assets/img/pokeball.png';
import starOutlined from '../assets/svg/star-regular.svg';
import starFilled from '../assets/svg/star-solid.svg';

const PokemonDetailPage = () => {
  const { t } = useTranslation();
  const [isCatched, setIsCatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const data = useLoaderData();
  const catchedPokemons = useSelector((state) => state.catchedPokemonsList);
  const favoritePokemons = useSelector((state) => state.favoritePokemonsList);

  useEffect(() => {
    const isPokemonCatchedHandler = () => {
      if (catchedPokemons) {
        catchedPokemons.forEach((pokemon) => {
          if (pokemon.id === data.id) {
            setIsCatched(true);
          }
        });
      }
    };
    isPokemonCatchedHandler();
  }, [catchedPokemons, data.id]);

  useEffect(() => {
    const isPokemonFavoriteHandler = () => {
      if (favoritePokemons) {
        favoritePokemons.forEach((pokemon) => {
          if (pokemon.id === data.id) {
            setIsFavorite(true);
          }
        });
      }
    };
    isPokemonFavoriteHandler();
  }, [favoritePokemons, data.id]);

  const catchedPokemonHandler = () => {
    if (!isCatched) {
      dispatch({ type: 'catch', catchedPokemon: data });
    }
  };
  const releasePokemonHandler = () => {
    dispatch({ type: 'release', pokemonId: data.id });
    setIsCatched(false);
    setIsFavorite(false);
  };
  const addFavoritePokemonHandler = () => {
    if (!isFavorite && isCatched) {
      dispatch({ type: 'add-favorite', favoritePokemon: data });
    }
  };
  const removeFavoritePokemonHandler = () => {
    dispatch({ type: 'remove-favorite', pokemonId: data.id });
    setIsFavorite(false);
  };

  return (
    <>
      <div className="pokemon-container">
        <div className="w-100">
          <Link to=".." className="pokemon-button">
            {t('Back to Pokedex')}
          </Link>
        </div>
        <div className="pokemon-left-container mt-20 text-center">
          <div className="icon-container">
            <div className="w-15">
              {!isFavorite && (
                <img
                  src={starOutlined}
                  alt="star"
                  width={30}
                  onClick={addFavoritePokemonHandler}
                  style={{ cursor: isCatched ? 'pointer' : 'default' }}
                />
              )}
              {isFavorite && (
                <img
                  src={starFilled}
                  alt="star"
                  width={30}
                  onClick={removeFavoritePokemonHandler}
                  style={{ cursor: isCatched ? 'pointer' : 'default' }}
                />
              )}
            </div>
            <div className="w-70">
              <h3 className="capital-letters">{data.name}</h3>
            </div>
            <div className="w-15">{isCatched && <img src={pokeball} alt="pokeball" width={30} height={30} />}</div>
          </div>
          <img src={data.sprites.other.dream_world.front_default} alt={data.name} className="pokemon-detail-img" />
        </div>
        <div className="pokemon-stats-container">
          {data.stats.map((stats) => (
            <div className="pokemon-stats" key={stats.stat.name}>
              <p className="stat-p">
                {stats.stat.name} <span className="stat-span">{stats.base_stat}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="w-100 text-center mt-30">
          {!isCatched && (
            <button className="pokemon-button" onClick={catchedPokemonHandler}>
              {t('Catch')}
            </button>
          )}
          {isCatched && (
            <button className="pokemon-button" onClick={releasePokemonHandler}>
              {t('Release Pokemon')}
            </button>
          )}
          {isCatched && !isFavorite && (
            <button className="pokemon-button" onClick={addFavoritePokemonHandler}>
              {t('Add to favorites')}
            </button>
          )}
          {isCatched && isFavorite && (
            <button className="pokemon-button" onClick={removeFavoritePokemonHandler}>
              {t('Remove from favorites')}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;

export const loader = async ({ params }) => {
  const pokemonId = params.pokemonId;
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
