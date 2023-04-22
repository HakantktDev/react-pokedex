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
  console.log(data);
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
  // console.log(data.id);

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
    if (!isFavorite) {
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
        <Link to=".." style={{ textAlign: 'left', width: '100%', textDecoration: 'none', color: '#000000' }}>
          {t('Back to Pokedex')}
        </Link>
        <h2 style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>{t('Pokemon Details')}</h2>
        {/* <img src={pokeball} alt="pokeball" width={50} />
        <img src={starOutlined} alt="star" width={50} />
        <img src={starFilled} alt="star" width={50} /> */}
        <div style={{ width: '40%', textAlign: 'center', background: '#e5e5e5', borderRadius: '3px' }}>
          <h3 className="capital-letters" style={{}}>
            {data.name}{' '}
          </h3>
          <img src={data.sprites.other.dream_world.front_default} alt={data.name} width={250} />
        </div>
        <div style={{ width: '60%', padding: '0 30px' }} className="pokemon-stats-container">
          {data.stats.map((stats) => (
            <div className="pokemon-stats" key={stats.stat.name}>
              {stats.stat.name}: {stats.base_stat}{' '}
            </div>
          ))}
        </div>
        {!isCatched && <button onClick={catchedPokemonHandler}>{t('Catch')}</button>}
        {isCatched && <button onClick={releasePokemonHandler}>{t('Release Pokemon')}</button>}
        {isCatched && !isFavorite && <button onClick={addFavoritePokemonHandler}>{t('Add to favorites')}</button>}
        {isCatched && isFavorite && (
          <button onClick={removeFavoritePokemonHandler}>{t('Remove from favorites')}</button>
        )}
      </div>
    </>
  );
};

export default PokemonDetailPage;

export const loader = async ({ params }) => {
  const pokemonId = params.pokemonId;
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }

  // console.log(response);
  // if (response.status !== 200) {
  //   throw json({ message: 'Could not fetch details of selected Pokemon!' }, { status: 500 });
  // } else {
  //   return response;
  // }
};
