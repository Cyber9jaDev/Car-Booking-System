import { NavLink } from "react-router-dom";
import '../../sass/banner.scss';
import ReactSlider from "./Slider";
import { useState } from "react";

const Banner = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <section id="banner">
      <div onClick={() => setShowMenu(!showMenu)} className="menu">
        <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>
      <header>
        <nav className={showMenu ? `active` : ''}>
          <ul>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/services">Services</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/booking">Booking</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="slider-container">
        <ReactSlider />
      </div>
    </section>
    
  );
}

export default Banner;