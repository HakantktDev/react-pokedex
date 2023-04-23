import Navigation from '../components/Navigation';
import { useTranslation } from 'react-i18next';

const DetailErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <main>
        <h1>{t('Can not find this pokemon detail!')}</h1>
      </main>
    </>
  );
};

export default DetailErrorPage;
