import pokeballSpinner from '../assets/gif/pokeball-pokemon.gif';
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { t } = useTranslation();
  return (
    <div className="pokemon-container">
      <div>
        <img src={pokeballSpinner} alt="pokeball" className="mt-200" />
        <h3 className="text-center">{t('Loading...')}</h3>
      </div>
    </div>
  );
};
export default Loader;
