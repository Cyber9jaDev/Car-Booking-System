import { useEffect, useState } from 'react';
import PaymentService from '../../../services/PaymentService';
import { useLocation } from 'react-router-dom';
import '../../../sass/verification.scss';
import { PaystackVerificationType } from '../../../utilities/Types';
import { FormatAmount, FormatDateAndTime } from '../../../utilities/Functions';


const BookingConfirmation = () => {
  const [isLoading, setIsLoading] = useState('idle');
  const [ bookingInfo, setBookingInfo ] = useState({} as PaystackVerificationType);
  const location = useLocation();

  useEffect(() => {
    const verifyTransaction = async () => {
      const params = new URLSearchParams(location.search);
      const reference = params.get('reference');
  
      try {
        setIsLoading('pending');
        const verificationResponse = await PaymentService.VerifyPaystackTransaction(reference);
        if (verificationResponse?.status === 'success') {
          console.log(verificationResponse);
          setBookingInfo({ ...verificationResponse });
          setIsLoading('successful');
        }
      } catch (error) {
        setIsLoading('rejected');
      }
    }
  
    verifyTransaction();

  }, [location.search]);
  
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
          <p className='m-0'>PNR: <strong>{bookingInfo?.reference}</strong></p> 
        </div>

        <div className="booking__info d-flex align-self-center w-75 justify-content-between my-5 mx-auto">
          <div className="row">
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Passenger Name:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.passengerName}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Passenger Phone:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.passengerPhoneNumber}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Passenger Email:</p>
              {/* <span className='m-0 fw-semibold'>{ bookingInfo?.metadata?.email }</span> */}
              <span className='m-0 fw-semibold'> test@gmail.com</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Next of Kin's Name:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.nextOfKinName}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Next of Kin's Phone Number:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.nextOfKinPhoneNumber}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Ticket Fee:</p>
              <span className='m-0 fw-semibold'>{ FormatAmount(bookingInfo?.metadata?.amount) }</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Travelling From:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.travellingFrom}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Travelling To:</p>
              <span className='m-0 fw-semibold'>{bookingInfo?.metadata?.travellingTo}</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Departure Date:</p>
              {<span className='m-0 fw-semibold'>{FormatDateAndTime(bookingInfo?.metadata?.departureDate, 'date')}</span>}
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Departure Time:</p>
              { bookingInfo?.metadata?.departureDate && <span className='m-0 fw-semibold'>{FormatDateAndTime(bookingInfo?.metadata?.departureDate, 'time')}</span> }
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Booking Date</p>
              <span className='m-0 fw-semibold'>WED JUNE, 2023</span>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Booking Date</p>
              <span className='m-0 fw-semibold'>WED JUNE, 2023</span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
