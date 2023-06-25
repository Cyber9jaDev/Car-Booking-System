import { NavLink } from "react-router-dom";
import '../../sass/topnav.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


const TopNav = () => {

  const { currentUser }  = useContext(UserContext);

  return (
    <section id="top-nav">
      <div className='top-bar container-fluid'>
      <div className="h-100">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="col-md-4 col sm-6 log-icons d-flex align-items-center justify-content-center">
            <p className="py-2 my-auto"><i className="fa fa-phone"></i>Call Taxi : <a href="tel:08062128170">+2348062128170</a></p>
          </div>
          <div className="col-md-4 col-sm-6 logo d-flex justify-content-center my-1 mb-2">
            <NavLink className="navbar-brand" to="/"> <i className="fas fa-taxi"></i> Taxi Cab</NavLink>
          </div>
          <div className="col-md-4 top-forms">
            { !currentUser && <div className="wrapper">
              <span className="">
                <NavLink className='nav-link' to="/login">
                  <i className="fas fa-lock me-2"></i>Sign in
                </NavLink>
              </span>
              </div>
            }
            { !currentUser && <div className="wrapper">
              <span className="">
                <NavLink className='nav-link' to="/signup" >
                  <i className="fas fa-user me-2"></i>Sign up
                </NavLink>
              </span>
              </div> 
            }
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default TopNav