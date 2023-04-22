import { useTranslation } from 'react-i18next';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  const { t } = useTranslation();
  return (
    <>
      {gotoPrevPage && <button onClick={gotoPrevPage}>{t('Previous page')}</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>{t('Next page')}</button>}
    </>
  );
};

export default Pagination;
