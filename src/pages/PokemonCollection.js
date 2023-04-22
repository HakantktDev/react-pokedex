import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import PokemonList from '../components/PokemonList';

const PokemonCollectionPage = () => {
  const catchedPokemons = useSelector((state) => state.catchedPokemonsList);
  // console.log(catchedPokemons);
  return (
    <PokemonList pokemons={catchedPokemons} />
    // <div
    //   style={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     maxWidth: '1375px',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     height: '800px',
    //   }}
    // >
    //   {catchedPokemons.map((p) => (
    //     <Link
    //       to={`/pokemon-collection/pokemon-details/${p.id}`}
    //       style={{
    //         textDecoration: 'none',
    //         flex: '1 0 20%',
    //         background: 'white',
    //         margin: '5px',
    //         height: '150px',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}
    //       key={p.id}
    //       className="my-about-div my-icon-box"
    //     >
    //       <div>
    //         <img src={p.sprites.other.dream_world.front_default} alt={p.name} width={50} height={50} />
    //         <p style={{ margin: '0', textTransform: 'capitalize' }}>
    //           <span>{p.id}. </span>
    //           {p.name}
    //         </p>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
  );
};

export default PokemonCollectionPage;
