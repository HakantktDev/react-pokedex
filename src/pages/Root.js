import { Outlet, useNavigation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';

const RootLayout = () => {
  const navigation = useNavigation();

  const loader =
    navigation.state === 'loading' ? (
      <Loader />
    ) : (
      <main>
        <Outlet />
      </main>
    );

  return (
    <>
      <Navigation />
      {loader}
    </>
  );
};

export default RootLayout;
