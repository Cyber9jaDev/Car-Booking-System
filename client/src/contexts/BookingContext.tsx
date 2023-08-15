import { createContext, ReactElement, useState } from 'react';
import UserService from '../services/UserService';
import { BookingType } from '../utilities/Types';

type ChildrenType = { children?: ReactElement | ReactElement[]} 

type BookingStateType = {
  selectedSeatNo: number | null,
  isOpenModal: boolean,
  trips: BookingType[],
  selectedBus:Pick<BookingType, 'busType' | 'bookedSeats' | 'availableSeats' | '_id'> | null,
  bookedData: Pick<BookingType, 'travellingFrom' | 'travellingTo' | 'price' | 'departureDate'> | null
}

const selectedBus: string | null = localStorage.getItem('selectedBus');
const parsedSelectedBus : Pick<BookingType, 'busType' | 'bookedSeats' | 'availableSeats' | '_id'> | null = selectedBus ? JSON.parse(selectedBus) : null;

const selectedSeatNo : string | null = localStorage.getItem("selectedSeatNo");
const parsedSelectedSeatNo : number | null = selectedSeatNo ? JSON.parse(selectedSeatNo) : null;

const bookedData: string | null = localStorage.getItem("bookedData");
const parsedBookedData : Pick<BookingType, 'travellingFrom' | 'travellingTo' | 'price' | 'departureDate'> | null = bookedData ? JSON.parse(bookedData) : null

const initBookingState: BookingStateType = {
  isOpenModal: false,
  trips: [],
  selectedBus: parsedSelectedBus,
  selectedSeatNo: parsedSelectedSeatNo as number | null,
  bookedData: parsedBookedData
}

type BookingContextType = {
  bookingState: BookingStateType,
  setBookingState: React.Dispatch<React.SetStateAction<BookingStateType>>
  getTicketsList: () => void,
  handleSeatSelect:(seatNo: number) => void
  openModal: () => void
  closeModal: (option?: boolean) => void
} 

export const BookingContext = createContext<BookingContextType>( {} as BookingContextType );

export const BookingContextProvider = ({ children }: ChildrenType) : ReactElement => {
  const [bookingState, setBookingState] = useState<BookingStateType>(initBookingState);
  
  const openModal = () => { setBookingState(prev => ({ ...prev, isOpenModal: true }))}
  
  const closeModal = () => { setBookingState(prev => ({ ...prev, isOpenModal: false }))}

  const getTicketsList = async() => {
    try {
      const { tickets } = await UserService.GetAllTickets();
      setBookingState(prev => ({ ...prev, trips: [...tickets] }));
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

  const contextValue = { openModal, closeModal, bookingState, setBookingState, getTicketsList, handleSeatSelect }
  
  return(
    <BookingContext.Provider value={contextValue}>
      { children }
    </BookingContext.Provider>
  )
}
