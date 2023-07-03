import { ReactElement, createContext, useState, FormEvent } from "react";
import AdminService from "../../services/AdminService";
import { Toast } from "../../utilities/utils";

export type TripStateType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
  isLoading: boolean,
  hasError: boolean,
}

const initTripState: TripStateType = {
  travellingFrom: '',
  travellingTo: '',
  departureDate: '',
  price: 1,
  busType: 'mini-coach',
  isLoading: false,
  hasError: false,
}

type ChildrenType = {  children?: ReactElement | ReactElement[] }

export type TripContextType = {
  tripState: TripStateType,
  addNewTrip: (e:FormEvent) => Promise<unknown>,
  cancelTrip: (e:FormEvent) => Promise<unknown>
  setTripState: React.Dispatch<React.SetStateAction<TripStateType>>
  // updateTripData: (e:React.FormEvent<HTMLInputElement>) => void
}

export const TripContext = createContext<TripContextType>({} as TripContextType);

export const TripContextProvider = ({children}: ChildrenType) => {
  const [tripState, setTripState] = useState<TripStateType>(initTripState);

  // const updateTripData = (e:React.FormEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target as HTMLInputElement;
  //   setTripState(prevState => ( { ...prevState, [name]: value }) );
  // }

  const addNewTrip = async (e:FormEvent) => { 
    e.preventDefault();
    const {travellingFrom, travellingTo, busType, price, departureDate} = tripState;
    if(!travellingFrom || !travellingTo || !busType || !price || !departureDate ){
      return Toast('error', 'Please fill all fields')
    }

    setTripState((prevState) => ({ ...prevState, isLoading: true }));
    setTripState((prevState) => ({ ...prevState, hasError: false }));

    try {
      console.log(tripState);
      // const data = await AdminService.AddNewTrip({ ...tripState });
      // console.log(data);
      // return data;
    } catch (error) {
      return error;
    } finally{
      setTripState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  const cancelTrip = async () => { 
    try {
      const data = await AdminService.CancelTrip({ ...tripState });
      return data;
    } catch (error) {
      return error;
    }
  }

  const contextValue = { addNewTrip, cancelTrip, setTripState, tripState };

  return (
    <TripContext.Provider value={ contextValue }>
        { children }
    </TripContext.Provider>
  )
}



