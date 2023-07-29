import { useEffect, useState } from 'react';
import PaymentService from '../../../services/PaymentService';
import UserService from '../../../services/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from '../../../utilities/Functions';
import '../../../sass/verification.scss';
import {PaystackVerificationType} from '../../../utilities/Types'


const BookingConfirmation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({} as PaystackVerificationType);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { 
    const verifyTransaction = async () => {
      const params = new URLSearchParams(location.search);
      const reference = params.get('reference');
      
      try {
        setIsLoading(true);
        const verificationResponse = await PaymentService.VerifyPaystackTransaction(reference);
        if(verificationResponse?.status){
          setBookingInfo({...verificationResponse });
          return;
        }
      } catch (error) {
        console.error(error);
        setHasError(true);
      }  finally{
        setIsLoading(false)
      }
    };

    verifyTransaction();
    
  }, []);

  console.log(bookingInfo);

  return (
    <main id='verification'>
      <div className='container-lg'>
        <div className="icon d-flex justify-content-center align-items-center mx-auto my-4">
          <i className="fa-solid fa-check"></i>
        </div>
        <h3 className='text-center fw-bolder'>Booking Confirmation</h3>
        <p className="text-center w-50 mx-auto my-4 confirmation__text">Thank you, your booking order will be processed soon.
          An email has been sent to you as a confirmation of this flight booking. You will be contacted soon by our agent as your booking is being processed.
        </p>
        <div className="reference d-flex justify-content-center align-items-center mx-auto mt-4">
          <p className='m-0'>PNR: <strong>55S468</strong></p> 
        </div>

        <div className="booking__info d-flex align-self-center w-75 justify-content-between my-5 mx-auto">
          <div className="row">
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Name:</p>
              <strong className='m-0'>{bookingInfo?.metadata?.passengerName}</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Phone:</p>
              <strong className='m-0'>08062128170</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Email:</p>
              <strong className='m-0'>ayodejioladapo15@gmail.com</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Travelling From:</p>
              <strong className='m-0'>ABUJA</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Travelling To:</p>
              <strong className='m-0'>LAGOS</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Departure Date:</p>
              <strong className='m-0'>SATURDAY, JAN 2024</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Departure Time:</p>
              <strong className='m-0'>6:30AM</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Booking Date</p>
              <strong className='m-0'>WED JUNE, 2023</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Booking ID:</p>
              <strong className='m-0'>55S468</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Booking Status</p>
              <strong className='m-0'>APPROVED</strong>
            </div>
            <div className='col-sm-6 col-md-4 mt-4'>
              <p className='m-0'>Booking Date</p>
              <strong className='m-0'>WED JUNE, 2023</strong>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
