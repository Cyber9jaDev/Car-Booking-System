import { Link } from 'react-router-dom';
import '../../sass/passenger-details.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
// import Modal from '../../components/modal/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Modal } from '@mui/material';

const PassengerDetails = () => {
  const {currentUser, setNextOfKin} = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <main id='passenger-details' className='py-5'>
      <div className="container-lg">
        
        <h4 className="text-center">Hi {currentUser?.fullName}, we just need few details about you</h4>

        <div className="row mt-3">
          <div className="col-sm-12 col-md-6">
            <div className="row">

              {/* Passenger Details */}
              <div className="col-12 my-4">
                <h3>Passenger Details</h3>
                {/* <h6>Please enter name as they appear on identification document</h6> */}
                <div className="passenger-details">
                  <div className='d-flex align-items-center justify-content-center'>
                    <img src={new URL('../../assets/payment.png', import.meta.url).href} alt="" />
                  </div>
                  <div className="form-group my-3">
                    <label className='mb-2' htmlFor="name">Full Name</label>
                    <input defaultValue={currentUser?.fullName} readOnly  type="text" id='name' className="form-control w-100" />
                  </div>
                  <div className="form-group my-3">
                    <label className='mb-2' htmlFor="email">Customer Email Address</label>
                    <input defaultValue={currentUser?.email} readOnly className="form-control w-100" id='email' type="text" />
                  </div>
                  <div className="form-group my-3">
                    <label className='mb-2' htmlFor="phone">Customer Phone Number</label>
                    <input defaultValue={currentUser?.phone} readOnly  className="form-control w-100" id='phone' type='tel' />
                  </div>
                </div>
              </div>
              {/* Passenger Details End */}

              {/* Contact and Next of Kin Details Start */}
              <div className="col-12 my-4">
                <h3>Contact and Next of Kin Details</h3>
                <h6>We need your contact details for booking confirmation</h6>
                <div className="row">
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="next-of-kin-name">Next of Kin Name</label>
                      <input onChange={(e) => setNextOfKin((prev) => ({ ...prev, fullName: e.target.value }))}  className="form-control w-100" id='next-of-kin-name' type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 my-2">
                    <div className="form-group">
                      <label className='mb-2' htmlFor="next-of-kin-number">Next of Kin's Phone Number</label>
                      <input onChange={(e) => setNextOfKin((prev) => ({ ...prev, phone: e.target.value, fullName: '' }))} className="form-control w-100" id='next-of-kin-number' type="tel" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact and Next of Kin Details End */}

              {/* Terms and Conditions Start */}
              <div className="col-12 my-4">
                <h3> <Link to='/terms'>Terms and Conditions</Link> </h3>
                <h6>Please Note that ************ does not have a refund policy, however our tickets valid for a month from day of purchase and we have a no refund policy. By proceeding to make payment, you agree to the Terms and Conditions of GIGM.</h6>
              </div>
              {/* Terms and Conditions End */}
            </div>
          </div>

          {/* Trip Summary */}
          <div className="col-sm-12 col-md-6">
            <div className="trip__summary-wrapper">
              <div>
                <h3 className="text-center"> Trip Summary </h3>
                <p className='w-100 d-flex'> <span>From</span> <span className='ms-auto fw-bold opacity-75'>Lagos</span></p>
                <p className='w-100 d-flex'> <span>To</span> <span className='ms-auto fw-bold opacity-75'>Abuja</span></p>
                <p className='w-100 d-flex'> <span>Date</span> <span className='ms-auto fw-bold opacity-75'>July 7, 2020</span></p>
                <p className='w-100 d-flex'> <span>Time</span> <span className='ms-auto fw-bold opacity-75'>05: 30 AM</span></p>
                <p className='w-100 d-flex'> <span>Passenger</span> <span className='ms-auto fw-bold opacity-75'>1</span></p>
                <p className='w-100 d-flex'> <span>Seat Number</span> <span className='ms-auto fw-bold opacity-75'>2</span></p>
                <p className='w-100 d-flex'> <span>Amount</span> <span className='ms-auto fw-bold opacity-75'>N20000</span></p>
                <button className="btn w-100 pay">Pay</button>
              </div>
            </div>
          </div>
          {/* Trip Summary End */}

        </div>
      </div>

      {/* <Modal>test</Modal> */}
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    </main>
  )
}

export default PassengerDetails;