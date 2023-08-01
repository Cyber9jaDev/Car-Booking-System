import { useLocation, useNavigate } from "react-router-dom";
import PaymentService from "../../../services/PaymentService";
import { useEffect, useState } from "react";
import { PaystackVerificationType } from "../../../utilities/Types";

const PaymentVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({} as PaystackVerificationType);
  const location = useLocation();
  const navigate = useNavigate();

  // const verifyTransaction = async (reference:string) => {
  //   try {
  //     // setHasError(false);
  //     // setIsLoading(true);
  //     const verificationResponse = await PaymentService.VerifyPaystackTransaction(reference);
  //     console.log(verificationResponse);
  //     // if (verificationResponse?.status) {
  //     //   setBookingInfo({ ...verificationResponse });
  //     //   return;
  //     // }
  //   } catch (error) {
  //     console.error(error);
  //     // setHasError(true);
  //     return;
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const reference = params.get('reference');
  //   verifyTransaction(reference as string);
  // }, []);
  
  return (
    <main id='verification'>
      Loading
    </main>
  )
}

export default PaymentVerification;