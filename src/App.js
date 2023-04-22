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
        path: 'pokemon-details/:pokemonId',
        element: <PokemonDetailPage />,
        errorElement: <DetailErrorPage />,
        loader: pokemonDetailLoader,
      },
      {
        path: '/pokemon-collection',
        element: <PokemonCollectionPage />,
        // children: [
        //   {
        //     path: 'pokemon-details/:pokemonId',
        //     element: <PokemonDetailPage />,
        //     errorElement: <DetailErrorPage />,
        //     loader: pokemonDetailLoader,
        //   },
        // ],
      },
      {
        path: 'favorite-pokemons',
        element: <FavoritePokemonsPage />,
        // children: [
        //   {
        //     path: '/favorite-pokemons/pokemon-details/:pokemonId',
        //     element: <PokemonDetailPage />,
        //     errorElement: <DetailErrorPage />,
        //     loader: pokemonDetailLoader,
        //   },
        // ],
      },
    ],
  },
]);

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
    //       <Route index={true} element={<HomePage />} />
    //       <Route path="pokemon-details/:pokemonId" element={<PokemonDetailPage />} errorElement={<DetailErrorPage />} />
    //       <Route path="pokemon-collection" element={<PokemonCollectionPage />}>
    //         <Route path="pokemon-details/:pokemonId" element={<PokemonDetailPage />} />
    //       </Route>
    //       <Route path="favorite-pokemons" element={<FavoritePokemonsPage />}>
    //         <Route path="pokemon-details/:pokemonId" element={<PokemonDetailPage />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
};

export default App;
