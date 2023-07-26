import APICall from "../utilities/APICall";
import { VerificationTypes } from "../utilities/Types";

type PaystackMetadataType = { 
  userId: string,
  ticketId: string | undefined,
  nextOfKinName: string, 
  nextOfKinPhoneNumber: string, 
  amount: number, 
  passengerName: string, 
  passengerPhoneNumber: string,
  seatNumber: number | null,
}


type PaystackPaymentType = { email: string, metadata: PaystackMetadataType }

export default class PaymentService{

  static InitializePaystackTransaction = async (body: PaystackPaymentType) => {
    return await APICall('api/v1/paystack/transaction/initialize', 'POST', body);
  }

  static VerifyPaystackTransaction = async (reference: string | null) => {
    if(typeof(reference) === null){return}
    return await APICall<VerificationTypes>(`api/v1/paystack/transaction/verify/${reference}`, 'GET', {});
  }
  
}