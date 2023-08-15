import APICall from "../utilities/APICall.tsx";
import { AuthUserType, TicketType } from "../utilities/Types.tsx";

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

  static GetAllTickets = async (travellingFrom='none', travellingTo='none', departureDate='none', page=Number(1), pageSize=Number(7) ) => {
    let url = `api/v1/all-trips?page=${page}&pageSize=${pageSize}`;
    if(travellingFrom){ url = url + `&travellingFrom=${travellingFrom}`}
    if(travellingTo){ url = url + `&travellingTo=${travellingTo}`}
    if(departureDate){ url = url + `&departureDate=${departureDate}`}

    return await APICall<TicketType>(url, 'GET', {});
  }

  static BookTicket = async (body:BookTicketPayload) => {
    return await APICall<{ message: string }>('api/v1/book-ticket', 'POST', body);
  }

}
