import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [activeLanguage, setActiveLanguage] = useState('');
  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);
  return (
    <header className="header">
      <nav style={{ maxWidth: '1375px', display: 'contents' }}>
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
        </ul>
        <div style={{ display: 'flex', marginLeft: '30%', gap: '5px' }}>
          {activeLanguage !== 'tr' && (
            <p style={{ margin: '0', color: '#ffffff', cursor: 'pointer' }} onClick={() => handleChangeLanguage('tr')}>
              TR
            </p>
          )}
          {activeLanguage !== 'en' && (
            <p style={{ margin: '0', color: '#ffffff', cursor: 'pointer' }} onClick={() => handleChangeLanguage('en')}>
              EN
            </p>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
