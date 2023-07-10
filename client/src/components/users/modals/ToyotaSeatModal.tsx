import { useContext } from 'react';
import { BusSeatObject, ToyotaSeat } from './template/Toyota';
import { BookingContext } from '../../../contexts/BookingContext';
import '../../../sass/booking.scss';

const ToyotaSeatModal = () => {
  const { bookingState: { selectedBus, selectedSeat }, handleSeatSelect } = useContext(BookingContext);

  return (      
    <div className='seats__container my-3'>
      { ToyotaSeat.map((seat:BusSeatObject, index) => {
        const isAvailable = selectedBus?.availableSeats?.includes(seat.seatNo);
        const isBooked = selectedBus?.bookedSeats?.includes(seat.seatNo);
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