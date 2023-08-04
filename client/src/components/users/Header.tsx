import { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../sass/header.scss';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);
  const { pathname } = useLocation();

  return (
    <header id='header' style={{ position: pathname === '/' ? 'fixed' : 'sticky' }}>
      <div className="wrapper container-lg">
        <div className="logo">
          <Link to='' className='nav-link'>
            <i className="fas fa-taxi"></i>BUSCITY
          </Link>
        </div>
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
            { !currentUser && <li onClick={() => setShowMenu(false)} className={`nav-item ${ currentUser ? 'hide' : 'nav-item mobile-login'}`}>
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/login">Login</NavLink>
            </li> }
            <li onClick={() => setShowMenu(false)} className={`nav-item ${ currentUser ? 'mobile-profile' : 'hide'}`}>
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu" onClick={() => setShowMenu(prev => !prev)} >
          <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
        { !currentUser && <div className="authentication">
          <ul>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/login">Login</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/register">Register</NavLink>
            </li>
          </ul>
          </div>
        }
        { currentUser && <div className="profile">
          <div onClick={() => setShowProfileDropdown(prev => !prev)} className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          { showProfileDropdown && <div className="dropdown">
            <ul>
              <li onClick={() => setShowProfileDropdown(false)} className='nav-item'>
                <Link to='/profile' className='nav-link'>Profile</Link>
              </li>
              <li onClick={() => setShowProfileDropdown(false)} className='nav-item'>
                <Link to='/profile/settings' className='nav-link'>Settings</Link>
              </li>
              <li onClick={() => setShowProfileDropdown(false)} className='nav-item'>
                <span className='nav-link'>Logout</span>
              </li>
            </ul>
          </div> }
        </div>}
      </div>
    </header>
  )
}

export default Header;