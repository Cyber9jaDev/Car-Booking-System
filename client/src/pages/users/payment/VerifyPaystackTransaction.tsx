import { useEffect, useMemo, useCallback } from 'react';
import PaymentService from '../../../services/PaymentService';
import UserService from '../../../services/UserService';

const VerifyPaystackTransaction = () => {
  const location = window.location;

  async function verifyTransaction(){
    const params = new URLSearchParams(location.search);
    const reference: string | null = params.get('reference');

    try {
      const response = await PaymentService.VerifyPaystackTransaction(reference);
      console.log(response?.data?.data);
      if(response?.data?.data.status === 'success'){
        // const res = await UserService.BookTicket()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const verification = useCallback(() => { verifyTransaction()}, []);
  
  useEffect(() => {
    verification();
  }, [])

  return (
    <main>
        Verification Successful
    </main>
  )
}

export default VerifyPaystackTransaction;