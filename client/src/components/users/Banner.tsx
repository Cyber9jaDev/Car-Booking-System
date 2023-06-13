import { NavLink } from "react-router-dom";
import '../../sass/banner.scss';

const Banner = () => {

  // style={({isActive, isPending}) => {
  //             return {
  //               color: isActive ? 'red' : 'white'
  //             }
  //           }}
  return (
    <section id="banner">
      <header>
        <nav>
          <ul>
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/">Home</NavLink> */}
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/booking">Booking</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner-wrapper">

      </div>
    </section>
    
  );
}

export default Banner;