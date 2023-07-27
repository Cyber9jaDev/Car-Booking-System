import APICall from "../utilities/APICall.tsx";
import { AuthUserType, BookingType } from "../utilities/Types.tsx";

interface AuthUserPayload{
  username?: string,
  email: string,
  password: string,
}

type Metadata = { 
  nextOfKinName: string, 
  nextOfKinPhoneNumber: string, 
  amount: number, 
  seatNumber: number
}

type BookTicketPayload = {userId: string, ticketId: string, metadata: Metadata } 

export default class UserService {
  static Register = async (data: AuthUserPayload) => {
    return await APICall<AuthUserType>('api/v1/register', 'POST', data);
  }

  static Login = async (data: AuthUserPayload) => {
    return await APICall<AuthUserType>('api/v1/login', 'POST', data);
  }

  static GetAllTrips = async () => {
    return await APICall<BookingType[]>('api/v1/all-trips', 'GET', {});
  }

  static BookTicket = async (body:BookTicketPayload) => {
    return await APICall<{ message: string }>('api/v1/book-ticket', 'POST', body);
  }

}
