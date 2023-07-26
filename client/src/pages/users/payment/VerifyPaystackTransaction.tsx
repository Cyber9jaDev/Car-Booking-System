import { useEffect } from 'react';
import PaymentService from '../../../services/PaymentService';
import UserService from '../../../services/UserService';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toast } from '../../../utilities/Functions';

const VerifyPaystackTransaction = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { 
    ( async () => {
      
      const verifyTransaction = async () => {
        const params = new URLSearchParams(location.search);
        const reference = params.get('reference');
        try {
          const response = await PaymentService.VerifyPaystackTransaction(reference);
          if (response?.data?.data.status === 'success') {
            const body = {
              userId: response?.data?.data?.metadata?.userId as string, 
              ticketId: response?.data?.data?.metadata?.ticketId as string, 
              metadata: {
                seatNumber: response?.data?.data?.metadata?.seatNumber as number,
                amount: (response?.data?.data?.amount / 100) as number,
                nextOfKinPhoneNumber: response?.data?.data?.metadata?.nextOfKinPhoneNumber as string,
                nextOfKinName: response?.data?.data?.metadata?.nextOfKinName as string
              }
            };
            const { data } = await UserService.BookTicket(body);
            if (data) { 
              Toast('success', 'Booked successfully')
              // return navigate('/');
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      await verifyTransaction();
    });
  }, [location, navigate]);

  return (
    <main>
      Verification Successful
    </main>
  );
};

export default VerifyPaystackTransaction;
