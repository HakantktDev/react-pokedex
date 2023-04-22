import { createStore } from 'redux';

const pokemonListReducer = (state = { catchedPokemonsList: [], favoritePokemonsList: [], pokemonId: null }, action) => {
  if (action.type === 'catch') {
    // console.log(action.catchedPokemon);
    // console.log(state.catchedPokemonsList);
    // console.log(state.favoritePokemonsList);

    return {
      catchedPokemonsList: [...state.catchedPokemonsList, action.catchedPokemon],
      favoritePokemonsList: state.favoritePokemonsList,
      pokemonId: state.pokemonId,
    };
  }
  if (action.type === 'release') {
    // console.log(action.pokemonId);
    // const newState = state.catchedPokemonList.filter((catchedPokemon) => action.pokemonId !== catchedPokemon.id);
    // console.log(newState);
    return {
      catchedPokemonsList: state.catchedPokemonsList.filter((catchedPokemon) => action.pokemonId !== catchedPokemon.id),
      favoritePokemonsList: state.favoritePokemonsList.filter(
        (favoritePokemon) => action.pokemonId !== favoritePokemon.id
      ),
      pokemonId: state.pokemonId,
    };
  }
  if (action.type === 'add-favorite') {
    // console.log(action.favoritePokemon);
    // console.log(state.favoritePokemonsList);

    return {
      favoritePokemonsList: [...state.favoritePokemonsList, action.favoritePokemon],
      catchedPokemonsList: state.catchedPokemonsList,
      pokemonId: state.pokemonId,
    };
  }
  if (action.type === 'remove-favorite') {
    return {
      favoritePokemonsList: state.favoritePokemonsList.filter(
        (favoritePokemon) => action.pokemonId !== favoritePokemon.id
      ),
      catchedPokemonsList: state.catchedPokemonsList,
      pokemonId: state.pokemonId,
    };
  }

  return state;
};

const store = createStore(pokemonListReducer);

export default store;
