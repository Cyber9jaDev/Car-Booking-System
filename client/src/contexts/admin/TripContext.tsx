import { ReactElement, createContext, useState } from "react";
import AdminService from "../../services/AdminService";

export type TripStateType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
}

const initTripState: TripStateType = {
  travellingFrom: 'uyuyu',
  travellingTo: 'yyuy',
  departureDate: 'yyytyt',
  price: 1,
  busType: 'mini-coach',
}

type ChildrenType = {  children?: ReactElement | ReactElement[] }

export type TripContextType = {
  addNewTrip: () => Promise<unknown>,
  cancelTrip: () => Promise<unknown>
  setState: React.Dispatch<React.SetStateAction<TripStateType>>
  updateState: (e:React.FormEvent<HTMLInputElement>) => void
}

export const TripContext = createContext<TripContextType>({} as TripContextType);

export const TripContextProvider = ({children}: ChildrenType) => {
  const [state, setState] = useState<TripStateType>(initTripState);

  const updateState = (e:React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setState(prevState => ( { ...prevState, [name]: value }) );
  }

  const addNewTrip = async () => { 
    try {
      const data = await AdminService.AddNewTrip({ ...state });
      return data;
    } catch (error) {
      return error
    }
  }

  const cancelTrip = async () => { 
    try {
      const data = await AdminService.CancelTrip({ ...state });
      return data;
    } catch (error) {
      return error
    }
  }

  const contextValue = { addNewTrip, cancelTrip, ...state, setState, updateState };

  return (
    <TripContext.Provider value={ contextValue }>
        { children }
    </TripContext.Provider>
  )
}



