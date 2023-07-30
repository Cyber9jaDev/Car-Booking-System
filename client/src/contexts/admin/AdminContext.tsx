import { ReactElement, createContext, useState, FormEvent } from "react";
import AdminService from "../../services/AdminService";
import { Toast } from "../../utilities/Functions";
import { TripStateType } from "../../utilities/Types";

const initTripState: TripStateType = {
  travellingFrom: 'aba',
  travellingTo: 'aba',
  departureDate: '',
  price: 1,
  busType: 'minibus',
  isLoading: false,
  hasError: false,
}

type ChildrenType = {  children?: ReactElement | ReactElement[] }

export type AdminContextType = {
  tripState: TripStateType,
  addNewTrip: (e:FormEvent) => Promise<unknown>,
  cancelTrip: (e:FormEvent) => Promise<unknown>
  setTripState: React.Dispatch<React.SetStateAction<TripStateType>>
}

export const AdminContext = createContext<AdminContextType>({} as AdminContextType);

export const AdminContextProvider = ({children}: ChildrenType) => {
  const [tripState, setTripState] = useState<TripStateType>(initTripState);

  const addNewTrip = async (e:FormEvent) => { 
    e.preventDefault();
    const {travellingFrom, travellingTo, busType, price, departureDate} = tripState;
    if( travellingFrom === 'none' || travellingTo === 'none' || !price || !departureDate ){
      return Toast('fail', 'Please fill all fields');
    }

    try {
      setTripState((prevState) => ({ ...prevState, isLoading: true, hasError: false }));
      const body: Omit<TripStateType, 'isLoading' | 'hasError'> = { travellingFrom, travellingTo, departureDate, price, busType }
      const response  = await AdminService.AddNewTrip(body);
      if(response?.message){
          Toast('success', 'Trip updated successfully');
          setTripState({...initTripState });
          window.location.reload();
      }

    } catch (error) {
      setTripState((prevState) => ({ ...prevState, hasError: true }));
      console.error(error)
      return error;
    } 
  }

  const cancelTrip = async () => { 
    try {
      // const data = await AdminService.CancelTrip({ ...tripState });
      // return data;
    } catch (error) {
      return error;
    }
  }

  const contextValue = { addNewTrip, cancelTrip, setTripState, tripState };

  return (
    <AdminContext.Provider value={ contextValue }>
        { children }
    </AdminContext.Provider>
  )
}



