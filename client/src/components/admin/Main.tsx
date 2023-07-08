import '../../sass/admin/main.scss';
import Dashboard from './Dashboard';
import Booking from './Tickets';
import Time from './Time';

const Main = () => {  
  return (
    <section id='main' className='p-0 col-sm-12 col-md-8 col-lg-10'>
      <header className='d-flex align-items-center h-100 w-100 px-3'>
        <i className="ms-sm-2 ms-lg-3 me-auto fa-solid fa-bars-staggered"></i>
        <Time />
      </header>

      <Dashboard />
      <Booking/>
    </section>
  )
}

export default Main;