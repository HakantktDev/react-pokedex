import { useTranslation } from 'react-i18next';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  const { t } = useTranslation();
  return (
    <div className="pokemon-container" style={{ marginTop: '20px' }}>
      {gotoPrevPage && (
        <button className="pokemon-button" onClick={gotoPrevPage}>
          {t('Previous page')}
        </button>
      )}
      {gotoNextPage && (
        <button className="pokemon-button" onClick={gotoNextPage}>
          {t('Next page')}
        </button>
      )}
    </div>
  );
};

export default Pagination;
