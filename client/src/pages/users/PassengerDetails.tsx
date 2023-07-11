import { Link } from 'react-router-dom';
import '../../sass/passenger-details.scss';

const PassengerDetails = () => {
  return (
    <main id='passenger-details' className='py-5'>
      <div className="container-lg">
        
        <h4 className="text-center">Hi Name Name, we just need few details about you</h4>

        <div className="row mt-5">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-12 my-4">
                <h3>Passenger Details</h3>
                <h6>Please enter name as they appear on identification document</h6>
                <div className="passenger-details">
                  <div className='d-flex align-items-center justify-content-center'>
                    <img src={new URL('../../assets/payment.png', import.meta.url).href} alt="" />
                  </div>
                  <div className="form-group">
                    <label className='mb-2' htmlFor="name">Full Name</label>
                    <input type="text" className="form-control w-100" />
                  </div>
                </div>
              </div>
              <div className="col-12 my-4">
                <h3>Contact and Next of Kin Details</h3>
                <h6>We need your contact details for booking confirmation</h6>
                <div className="row">
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="email">Customer Email Address</label>
                      <input className="form-control w-100" id='email' type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="phone">Customer Phone Number</label>
                      <input className="form-control w-100" id='phone' type='tel' />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="next-of-kin-name">Next of Kin Name</label>
                      <input className="form-control w-100" id='next-of-kin-name' type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="next-of-kin-number">Next of Kin's Mobile Phone Number</label>
                      <input className="form-control w-100" id='next-of-kin-number' type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-4">
                <h3> <Link to='/terms'>Terms and Conditions</Link> </h3>
                <h6>Please Note that ************ does not have a refund policy, however our tickets valid for a month from day of purchase and we have a no refund policy. By proceeding to make payment, you agree to the Terms and Conditions of GIGM.</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="trip__summary-wrapper">
              <div>
                <h3 className="text-center"> Trip Summary </h3>
                <div className="row">
                  <div className="col-12 w-100 d-flex my-2">
                    <span>From</span>
                    <span className="ms-auto">Lagos</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
                    <span>To</span>
                    <span className="ms-auto">Abuja</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
                    <span>Date</span>
                    <span className="ms-auto">July 7, 2020</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
                    <span>Time</span>
                    <span className="ms-auto">05: 30 AM</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
                    <span>Passenger</span>
                    <span className="ms-auto">1</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
                    <span>Seat Number</span>
                    <span className="ms-auto">3</span>
                  </div>
                  <div className="col-12 w-100 d-flex my-2">
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