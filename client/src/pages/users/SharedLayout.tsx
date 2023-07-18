// import TopNav from '../../components/users/TopNav';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      {/* <TopNav /> */}
      <Outlet />
    </>
  )
}

export default SharedLayout;
