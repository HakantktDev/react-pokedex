import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import PokemonCollectionPage from './pages/PokemonCollection';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import PokemonDetailPage, { loader as pokemonDetailLoader } from './pages/PokemonDetail';
import DetailErrorPage from './pages/DetailError';
import FavoritePokemonsPage from './pages/FavoritePokemons';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/pokemon-details/:pokemonId',
        element: <PokemonDetailPage />,
        errorElement: <DetailErrorPage />,
        loader: pokemonDetailLoader,
      },
      {
        path: 'pokemon-collection',
        element: <PokemonCollectionPage />,
        children: [
          {
            path: 'pokemon-details/:pokemonId',
            element: <PokemonDetailPage />,
            errorElement: <DetailErrorPage />,
            loader: pokemonDetailLoader,
          },
        ],
      },
      {
        path: 'favorite-pokemons',
        element: <FavoritePokemonsPage />,
        children: [
          {
            path: 'pokemon-details/:pokemonId',
            element: <PokemonDetailPage />,
            errorElement: <DetailErrorPage />,
            loader: pokemonDetailLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
