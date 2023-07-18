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
  bookedSeats: number[],
  availableSeats: number[],
}; 

type BookingStateType = {
  selectedSeatNo: number | null,
  isOpenModal: boolean,
  trips: TicketType[],
  selectedBus:Pick< TicketType, 'busType' | 'bookedSeats' | 'availableSeats' | '_id'> | null
}

const selectedBus: string | null = localStorage.getItem('selectedBus');
const parsedSelectedBus : Pick< TicketType, 'busType' | 'bookedSeats' | 'availableSeats' | '_id'> | null = selectedBus ? JSON.parse(selectedBus) : null;

const selectedSeatNo : string | null = localStorage.getItem("selectedSeatNo");
const parsedSelectedSeatNo : number | null = selectedSeatNo ? JSON.parse(selectedSeatNo) : null;

const initBookingState: BookingStateType = {
  isOpenModal: false,
  trips: [],
  selectedBus: parsedSelectedBus,
  selectedSeatNo: parsedSelectedSeatNo as number | null,
}

type BookingContextType = {
  bookingState: BookingStateType,
  setBookingState: React.Dispatch<React.SetStateAction<BookingStateType>>
  getTicketsList: () => void,
  getSeatInfo : (id: string) => Promise<unknown>
  handleSeatSelect:(seatNo: number) => void
  openModal: () => void
  closeModal: (option?: boolean) => void
} 

export const BookingContext = createContext<BookingContextType>( {} as BookingContextType );

export const BookingContextProvider = ({ children }: ChildrenType) : ReactElement => {
  const [bookingState, setBookingState] = useState<BookingStateType>(initBookingState);
  
  const openModal = () => { setBookingState(prev => ({ ...prev, isOpenModal: true }))}
  
  // const closeModal = (option?: boolean) => {
  //   if(option){
  //     setBookingState(prev => ({ ...prev, isOpenModal: false, selectedSeatNo: null }))
  //   } else{
  //     setBookingState(prev => ({ ...prev, isOpenModal: false }))
  //   }
  // }

  const closeModal = () => { setBookingState(prev => ({ ...prev, isOpenModal: false }))}


  const getTicketsList = async() => {
    try {
      const { data } = await UserService.GetAllTrips();
      setBookingState(prev => ({ ...prev, trips: [ ...data ] }))
    } catch (error) {
      return error
    } 
  }

  const getSeatInfo = async (id: string): Promise<unknown> =>  {
    try {
      return id
    } catch (error) {
      return error;
    }
  }

  const handleSeatSelect = (seatNo: number): void => {
    const availableSeats = bookingState.selectedBus?.availableSeats;
    const bookedSeats = bookingState.selectedBus?.bookedSeats;

    if(bookedSeats?.includes(seatNo)){ return }
    else if(availableSeats?.includes(seatNo)) {
      setBookingState(previousState => ({ ...previousState, selectedSeatNo: seatNo}));
    }
    return
  }

  const contextValue = { openModal, closeModal, bookingState, setBookingState, getTicketsList, getSeatInfo, handleSeatSelect }
  
  return(
    <BookingContext.Provider value={contextValue}>
      { children }
    </BookingContext.Provider>
  )
}
