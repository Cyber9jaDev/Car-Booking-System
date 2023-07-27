import { useEffect, useState } from 'react';
import PaymentService from '../../../services/PaymentService';
import UserService from '../../../services/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from '../../../utilities/Functions';

const VerifyPaystackTransaction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const fetchData
  }, [])
  

  useEffect(() => { 
    const verifyTransaction = async () => {
      const params = new URLSearchParams(location.search);
      const reference = params.get('reference');
      try {
        setIsLoading(true);
        const verificationResponse = await PaymentService.VerifyPaystackTransaction(reference);
        if (verificationResponse?.data?.status === 'success') {
          const {data : { amount,  metadata : { userId, ticketId, seatNumber, nextOfKinPhoneNumber, nextOfKinName } } } = verificationResponse
          const body = {
            userId, 
            ticketId, 
            metadata: { seatNumber, nextOfKinPhoneNumber, nextOfKinName, amount: amount / 100 }
          };
          const bookingResponse = await UserService.BookTicket(body);
          if (bookingResponse.message === 'Ticket booked successfully') { 
            console.log(bookingResponse)
            Toast('success', `${bookingResponse.message}`);
            setIsLoading(false);
            // return navigate('/profile');
          }
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      } 
    };

    verifyTransaction();
    
  }, [location]);

  return (
    <main>
      { isLoading ? <div>
        <strong>Loading...</strong>
        <strong>Loading...</strong>
        <strong>Loading...</strong>
        <strong>Loading...</strong>
        <strong>Loading...</strong>
        <strong>Loading...</strong>
      </div> : 'No problem'
      
      }
    </main>
  );
};

export default VerifyPaystackTransaction;
