import { Link } from 'react-router-dom';
import '../../sass/admin/highlight.scss';

const Highlight = () => {

  return (
    <section id='highlight' className='p-0 col-sm-12 col-md-4 col-lg-2 h-100'>
      <header className='d-flex align-items-center justify-content-center w-100'>
        {/* <div className="logo"> */}
          BusBus
        {/* </div> */}  
      </header>
      
      <div className="container mt-4">
        <ul className="row p-0">
          <li className="col-sm-12 d-block py-4 my-auto">
            <Link to='' className="ps-4 w-100 nav-link d-flex align-items-center h-100 h-100">
              <div className="icon"> <i className="fa-solid fa-chart-simple"></i></div>
              <div className=""><h5 className='my-auto'>Dashboard</h5></div>
            </Link>
          </li>
          <li className="col-sm-12 d-block py-4">
            <Link to='' className="ps-4 nav-link w-100 d-flex align-items-center h-100">
              <div className="icon"> <i className="fa-solid fa-suitcase-rolling"></i></div>
              <div className=""><h5 className='my-auto'>All Trips</h5></div>
            </Link>
          </li>
          <li className="col-sm-12 d-block py-4">
            <Link to='' className="ps-4 nav-link d-flex align-items-center h-100">
              <div className="icon"> <i className="fa-solid fa-circle-plus"></i></div>
              <div className=""><h5 className='my-auto'>Add Trip</h5></div>
            </Link>
          </li>
          <li className="col-sm-12 d-block py-4">
            <Link to='' className="ps-4 nav-link d-flex align-items-center h-100">
              <div className="icon"> <i className="fa-solid fa-chart-simple"></i></div>
              <div className=""><h5 className='my-auto'>All Bookings</h5></div>
            </Link>
          </li>
          <li className="col-sm-12 d-block py-4">
            <Link to='' className="ps-4 w-100 nav-link d-flex align-items-center h-100">
              <div className="icon"> <i className="fa-solid fa-chart-simple"></i></div>
              <div className=""><h5 className='my-auto'>Dashboard</h5></div>
            </Link>     
          </li>
          <li className="col-sm-12 d-block py-4">
            <Link to='' className="ps-4 nav-link w-100 d-flex align-items-center h-100">
              <div className="icon"> <i className="fa-solid fa-chart-simple"></i></div>
              <div className=""><h5 className='my-auto'>Dashboard</h5></div>
            </Link>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default Highlight;