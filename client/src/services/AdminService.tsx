import APICall from "../utilities/APICall.tsx";
import { BookingType } from '../components/users/Booking.tsx';

export default class AdminService{
  static AddNewTrip = async (data:BookingType) => {
    return await APICall('api/v1/admin/trips/new-trip', 'POST', data);
  }

  static CancelTrip = async (data:BookingType) => {
    return await APICall('api/v1/admin/trips/new-trip', 'POST', data);
  }
  
}