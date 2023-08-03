import { Outlet } from 'react-router-dom';
import Header from '../../components/users/Header';
import Footer from '../../components/users/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout;
