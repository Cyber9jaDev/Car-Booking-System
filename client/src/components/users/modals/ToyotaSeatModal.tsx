import { useContext, useState } from 'react';
import { BusSeatObject, ToyotaSeat } from './template/Toyota';
import { BookingContext } from '../../../contexts/BookingContext';
import '../../../sass/booking.scss';


const ToyotaSeatModal = () => {
  const [selectedSeat, setSelectedSeat] = useState<number>(0);
  const { bookingState: { selectedBus } } = useContext(BookingContext);
  const availableSeats = selectedBus?.availableSeats;
  const bookedSeats = selectedBus?.bookedSeats;

  const handleSeatSelect = (seatNo: number): void => {
    if(bookedSeats?.includes(seatNo)){ return }
    else if(availableSeats?.includes(seatNo)) {
      setSelectedSeat(seatNo);
    }
    return
  }

  return (      
    <div className='seats__container my-3'>
      { ToyotaSeat.map((seat:BusSeatObject, index) => {
        const isAvailable = availableSeats?.includes(seat.seatNo);
        const isBooked = bookedSeats?.includes(seat.seatNo);
        const seatClassName = `${seat.className} ${isBooked ? 'booked__seat' : isAvailable && selectedSeat === seat.seatNo ? 'selected__seat' : 'available__seat'}`
        
        return(
          <div
            key={index}
            className={seatClassName}
            onClick={() => handleSeatSelect(seat.seatNo)} 
            > { seat.element }
          </div>
        )
      })}
    </div>
  )
}

export default ToyotaSeatModal;