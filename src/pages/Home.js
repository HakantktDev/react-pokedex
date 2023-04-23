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

  const getPokemonData = async (results) => {
    results.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((prevState) => {
        prevState = [...prevState, result.data];
        prevState.sort((a, b) => (a.id > b.id ? 1 : -1));
        return prevState;
      });
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const getPokemonList = async () => {
      try {
        setLoading(true);
        setPokemons([]);
        const response = await axios.get(currentPageUrl, { signal: AbortController.signal });
        setLoading(false);
        getPokemonData(response.data.results);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
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
      <div className="h-800">
        <PokemonList pokemons={pokemons} />
      </div>
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </>
  );
};

export default HomePage;
