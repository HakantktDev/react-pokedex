import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const PokemonDetailPage = () => {
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
      <div>PokemonDetail</div>
      <p>{data.name}</p>
      <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
      <p>
        <Link to="..">Back</Link>
      </p>
      {!isCatched && <button onClick={catchedPokemonHandler}>Catch</button>}
      {isCatched && <button onClick={releasePokemonHandler}>Release</button>}
      {isCatched && !isFavorite && <button onClick={addFavoritePokemonHandler}>Add Favorite</button>}
      {isCatched && isFavorite && <button onClick={removeFavoritePokemonHandler}>Remove Favorite</button>}
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
