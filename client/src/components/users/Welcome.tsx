import { Link } from "react-router-dom";
import '../../sass/welcome.scss';

const Welcome = () => {
  return (
    <section id='welcome'>
      <div className="wrapper">
        <div className="container">

          <header className="mb-5">
            <h3 className="text-center"> Welcome</h3>
          </header>

          <div className="row welcome-grids-top mb-4">
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fas fa-money-bill-alt" aria-hidden="true"></i>
              <h4>Low Charges</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h4>Safe & Secure</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fa fa-road" aria-hidden="true"></i>
              <h4>Traffic Roads</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fa fa-taxi" aria-hidden="true"></i>
              <h4>Taxi Cabs</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <h4>24/7 Service</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-grid-top my-4 d-flex flex-column align-items-center">
              <i className="fa fa-smile" aria-hidden="true"></i>
              <h4>Customers</h4>
            </div>
          </div>

          <div className="row welcome-grids-bottom">
            <div className="col-md-4 mb-md-0 mb-5 welcome-grid-bottom">
              <h4 className="mb-4">Lorem ipsum dolor sit amet, In consectetur adipiscing elit. Etiam commodo urna dolor,</h4>
              <Link className="about-link" to ='/about'> More About Us</Link>
            </div>
            <div className="col-md-4 welcome-grid-bottom">
              <p>Lorem ipsum dolor sit init amet, consectetur elit adipiscing elit. Etiam commodo urna dolor, eget lacinia
                est aliquam id. Proin velit libero, vestibul umac orci eu, faucibus consectetur dolor. Cras ullamcorper
                elit eros, nec bibendum lacus accumsan eu. Donec non </p>
            </div>
            <div className="col-md-4 welcome-grid-bottom">
              <p>Lorem ipsum dolor sit init amet, consectetur elit adipiscing elit. Etiam commodo urna dolor, eget lacinia
                est aliquam id. Proin velit libero, vestibul umac orci eu, faucibus consectetur dolor. Cras ullamcorper
                elit eros, nec bibendum lacus accumsan eu. Donec non </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;