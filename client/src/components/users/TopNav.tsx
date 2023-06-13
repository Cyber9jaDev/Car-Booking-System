import { NavLink } from "react-router-dom";
import '../../sass/topnav.css';


const TopNav = () => {
  return (
    <div className='top-bar container-fluid'>
      <div className="container h-100">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="col-md-4 col sm-6 log-icons d-flex align-items-center">
            <p className="py-2 my-auto"><i className="fa fa-phone"></i>Call Taxi : 12(00) 123 1234</p>
          </div>
          <div className="col-md-4 col-sm-6 logo">
            <NavLink className="navbar-brand" to="/"> <i className="fas fa-taxi"></i> Taxi Cab</NavLink>
          </div>
          <div className="col-md-4">
            <div className="row align-items-center">
              <div className="col-6">
                <span className="">
                  <NavLink className='nav-link' to="/sign-in">
                    <i className="fas fa-lock"></i> Sign In
                  </NavLink>
                </span>
              </div>
              <div className="col-6">
                <span className="">
                  <NavLink className='nav-link' to="/signup" >
                    <i className="fas fa-user"></i> Register
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav