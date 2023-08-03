import { useEffect, useState } from 'react';
import PaymentService from '../../../services/PaymentService';
import { useLocation } from 'react-router-dom';
import { PaystackVerificationType } from '../../../utilities/Types';
import { FormatAmount, FormatDateAndTime } from '../../../utilities/Functions';
import { findLocationByValue } from '../../../utilities/constants';
import '../../../sass/confirmation.scss';


const BookingConfirmation = () => {
  const [ bookingStatus, setIsLoading ] = useState('idle');
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

  if(bookingStatus === 'idle' || bookingStatus === 'pending'){
    return <div>Loading .......</div>
  }

  if(bookingStatus === "rejected"){
    return <div>Error message</div>
  }
  
  return (
    <main id='confirmation'>
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
              <b className='m-0'>{bookingInfo?.metadata?.passengerName}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Passenger Phone:</p>
              <b className='m-0'>{bookingInfo?.metadata?.passengerPhoneNumber}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Passenger Email:</p>
              {/* <b className='m-0'>{ bookingInfo?.metadata?.email }</b> */}
              <b className='m-0'> test@gmail.com</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Travelling From:</p>
              <b className='m-0'>{findLocationByValue(bookingInfo?.metadata?.travellingFrom)}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Travelling To:</p>
              <b className='m-0'>{findLocationByValue(bookingInfo?.metadata?.travellingTo)}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Departure Date:</p>
              {<b className='m-0'>{bookingInfo?.metadata?.departureDate && FormatDateAndTime(bookingInfo?.metadata?.departureDate, 'time')}, {" "} {FormatDateAndTime(bookingInfo?.metadata?.departureDate, 'date')}</b>}
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Next of Kin's Name:</p>
              <b className='m-0'>{bookingInfo?.metadata?.nextOfKinName}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Next of Kin's Phone Number:</p>
              <b className='m-0'>{bookingInfo?.metadata?.nextOfKinPhoneNumber}</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Ticket Fee:</p>
              <b className='m-0'>{ FormatAmount(bookingInfo?.metadata?.amount) }</b>
            </div>
            <div className='col-sm-6 col-md-4 mt-5'>
              <p className='m-0'>Booking Date:</p>
              {<b className='m-0'>{bookingInfo?.metadata?.departureDate && FormatDateAndTime(bookingInfo?.bookingDate, 'time')}, {" "} {FormatDateAndTime(bookingInfo?.bookingDate, 'date')}</b>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
