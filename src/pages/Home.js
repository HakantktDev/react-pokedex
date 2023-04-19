import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';
import axios from 'axios';
import Loader from '../components/Loader';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getPokemonList = async () => {
      try {
        setLoading(true);
        const response = await axios.get(currentPageUrl, { signal: AbortController.signal });
        console.log(response);

        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setPokemons(response.data.results);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getPokemonList();
    return () => {
      controller.abort();
    };
  }, [currentPageUrl]);

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return <Loader />;
  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </>
  );
};

export default HomePage;
