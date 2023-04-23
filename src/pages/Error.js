import Navigation from '../components/Navigation';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <main>
        <h1>{t('An error occurred!')}</h1>
        <p>{t('Could not find this page!')}</p>
      </main>
    </>
  );
};

export default ErrorPage;
