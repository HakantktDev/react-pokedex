import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? 'active' : undefined)} end>
              {t('Pokedex')}
            </NavLink>
          </li>
          <li>
            <NavLink to="pokemon-collection" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {t('Pokemon Collection')}
            </NavLink>
          </li>
          <li>
            <NavLink to="favorite-pokemons" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {t('Favorite Pokemons')}
            </NavLink>
          </li>
          <li>
            <button onClick={() => handleChangeLanguage('tr')}>TR</button>
            <button onClick={() => handleChangeLanguage('en')}>EN</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
