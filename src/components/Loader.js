import pokeballSpinner from '../assets/gif/pokeball-pokemon.gif';

const Loader = () => {
  return (
    <div className="pokemon-container">
      <div>
        <img src={pokeballSpinner} alt="pokeball" style={{ marginTop: '200px' }} />
        <h3 style={{ textAlign: 'center' }}>Loading...</h3>
      </div>
    </div>
  );
};
export default Loader;
