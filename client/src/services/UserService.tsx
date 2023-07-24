import APICall from "../utilities/APICall.tsx";

interface AuthUserPayload{
  username?: string,
  email: string,
  password: string,
}

type Metadata = { 
  nextOfKinName: string, 
  nextOfKinPhone: string, 
  amount: number, 
  seatNo: number | null
}

type PaystackMetadataType = { 
  "userId": string,
  "ticketId": string | undefined,
  "nextOfKinName": string, 
  "nextOfKinPhoneNumber": string, 
  "amount": number, 
  "passengerName": string, 
  "passengerPhoneNumber": string,
  "seatNumber": number | null,
}

type PaystackType = { email: string, metadata: PaystackMetadataType }

type BookTicketPayload = {userId: string, ticketId: string | undefined, metadata:  Metadata } 

export default class UserService {
  static Register = async (data: AuthUserPayload) => {
    return await APICall('api/v1/register', 'POST', data);
  }

  static Login = async (data: AuthUserPayload) => {
    return await APICall('api/v1/login', 'POST', data);
  }

  static GetAllTrips = async () => {
    return await APICall('api/v1/all-trips', 'GET', {});
  }

  static InitializePaystackTransaction = async (body: PaystackType) => {
    return await APICall('api/v1/paystack/transaction/initialize', 'POST', body);
  }

  static VerifyPaystackTransaction = async () => {
    return await APICall('api/v1/paystack/transaction/verify', 'GET', {});
  }

  static BookTicket = async (body:BookTicketPayload) => {
    return await APICall('api/v1/book-ticket', 'PATCH', body);
  }

}