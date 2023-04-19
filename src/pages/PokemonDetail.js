import axios from 'axios';
import { Link, useLoaderData, json } from 'react-router-dom';

const PokemonDetailPage = () => {
  const data = useLoaderData();
  console.log(data.data.name);

  return (
    <>
      <div>PokemonDetail</div>
      <p>{data.data.name}</p>
      <p>
        <Link to="..">Back</Link>
      </p>
    </>
  );
};

export default PokemonDetailPage;

export const loader = async ({ request, params }) => {
  const pokemonName = params.pokemonName;
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    return response;
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
