import { Link } from 'react-router-dom';

const PassengerDetails = () => {
  return (
    <main id='passenger-details'>
      <div className="container-lg">
        
        <h5 className="text-center">Hi Name Name, we just need few details about you</h5>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <h3>Passenger Details</h3>
                  <p>Please enter name as they appear on identification document</p>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className="form-control w-100" />
                  </div>
                </div>
                <div className="col-12">
                  <h3>Contact and Next of Kin Details</h3>
                  <p>We need your contact details for booking confirmation</p>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 my-2">
                      <div className="form-group">
                        <label htmlFor="email">Customer Email Address</label>
                        <input className="form-control w-100" id='email' type="text" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 my-2">
                      <div className="form-group">
                        <label htmlFor="phone">Customer Phone Number</label>
                        <input className="form-control w-100" id='phone' type='tel' />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 my-2">
                      <div className="form-group">
                        <label htmlFor="next-of-kin-name">Next of Kin Name</label>
                        <input className="form-control w-100" id='next-of-kin-name' type="text" />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 my-2">
                      <div className="form-group">
                        <label htmlFor="next-of-kin-number">Next of Kin's Mobile Phone Number</label>
                        <input className="form-control w-100" id='next-of-kin-number' type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h3> <Link to='/terms'>Terms and Conditions</Link> </h3>
                  <p>Please Note that ************ does not have a refund policy, however our tickets valid for a month from day of purchase and we have a no refund policy. By proceeding to make payment, you agree to the Terms and Conditions of GIGM.</p>
                </div>
              </div>

            </div>
            <div className="col-sm-12 col-md-6 bg-danger">
              <div className="container">
                <h2 className="text-center"> Trip Summary </h2>
                <div className="row">
                  <div className="col-12 w-100 d-flex">
                    <span>From</span>
                    <span className="ms-auto">Lagos</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>To</span>
                    <span className="ms-auto">Abuja</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Date</span>
                    <span className="ms-auto">July 7, 2020</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Time</span>
                    <span className="ms-auto">05: 30 AM</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Passenger</span>
                    <span className="ms-auto">1</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Seat Number</span>
                    <span className="ms-auto">3</span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Price</span>
                    <span className="d-d-block ms-auto"></span>
                  </div>
                  <div className="col-12 w-100 d-flex">
                    <span>Total Amount</span>
                    <span className="ms-auto price">N20000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PassengerDetails