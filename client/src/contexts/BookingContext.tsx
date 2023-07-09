import { createContext, ReactElement, useState } from 'react';
import UserService from '../services/UserService';

type ChildrenType = { children?: ReactElement | ReactElement[]} 

export type TicketType = {
  _id: string,
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  seats: number[],
}

type BookingStateType = {
  isOpenModal: boolean,
  trips: TicketType[],
  selectedBus: TicketType | null
}
const initBookingState: BookingStateType = {
  isOpenModal: false,
  trips: [],
  selectedBus: null
}

type BookingContextType = {
  bookingState: BookingStateType,
  setBookingState: React.Dispatch<React.SetStateAction<BookingStateType>>
  getTicketsList: () => void
} 

export const BookingContext = createContext<BookingContextType>( {} as BookingContextType );

export const BookingContextProvider = ({ children }: ChildrenType) : ReactElement => {
  const [bookingState, setBookingState] = useState<BookingStateType>(initBookingState);
  
  const getTicketsList = async() => {
    try {
      const { data } = await UserService.GetAllTrips();
      setBookingState(prev => ({ ...prev, trips: [ ...data ] }))
    } catch (error) {
      return error
    } 
  }

  const contextValue = { bookingState, setBookingState, getTicketsList }
  
  return(
    <BookingContext.Provider value={contextValue}>
      { children }
    </BookingContext.Provider>
  )
}
