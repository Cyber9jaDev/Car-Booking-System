import APICall from "../utilities/APICall.tsx";
import { BookingType } from '../components/users/Booking.tsx';

export default class AdminService{
  static NewTrip = async (data:BookingType) => {
    return await APICall('api/v1/trips/new-trip', 'POST', data);
  }
  
}