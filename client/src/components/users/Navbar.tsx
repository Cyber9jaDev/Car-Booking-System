import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-icon-wrapper">

      </div>
      <ul>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Booking</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar