import TopNav from '../../components/users/TopNav';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/users/Footer';

const SharedLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout;
