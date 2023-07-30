import APICall from "../utilities/APICall.tsx";
import { BookingType, TripStateType } from "../utilities/Types.tsx";

export default class AdminService{
  static AddNewTrip = async (data:Omit<TripStateType, 'isLoading' | 'hasError'>) => {
    return await APICall<{message: string}>('api/v1/admin/trips/new-trip', 'POST', data);
  }

  static CancelTrip = async (data:BookingType) => {
    return await APICall('api/v1/admin/trips/new-trip', 'POST', data);
  }
  
}