import { useEffect } from 'react';
import PaymentService from '../../../services/PaymentService';
import UserService from '../../../services/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from '../../../utilities/Functions';

const VerifyPaystackTransaction = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const te;

  useEffect(() => { 
    ( async () => {
      const verifyTransaction = async () => {
        const params = new URLSearchParams(location.search);
        const reference = params.get('reference');
        try {
          const verificationResponse = await PaymentService.VerifyPaystackTransaction(reference);
          console.log(verificationResponse);
          if (verificationResponse?.data?.status === 'success') {
            const body = {
              userId: verificationResponse?.data?.metadata?.userId, 
              ticketId: verificationResponse?.data?.metadata?.ticketId, 
              metadata: {
                seatNumber: verificationResponse?.data?.metadata?.seatNumber,
                amount: verificationResponse?.data?.amount / 100,
                nextOfKinPhoneNumber: verificationResponse?.data?.metadata?.nextOfKinPhoneNumber,
                nextOfKinName: verificationResponse?.data?.metadata?.nextOfKinName
              }
            };
            const bookingResponse  = await UserService.BookTicket(body);
            if (bookingResponse) { 
              Toast('success', 'Booked successfully')
              // return navigate('/');
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      await verifyTransaction();
    })();
  }, [location, navigate]);

  return (
    <main>
      Verification Successful
    </main>
  );
};

export default VerifyPaystackTransaction;
