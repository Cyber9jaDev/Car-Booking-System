import { useContext } from 'react';
import { BookingContext } from '../../../contexts/BookingContext';
import { BusSeatObject, MinibusSeat } from './SeatArrangement';
import '../../../sass/modal.scss';


const MinibusSeatModal = () => {
  const { bookingState: { selectedBus, selectedSeatNo }, handleSeatSelect } = useContext(BookingContext);

  return (      
    <div className='seats__container my-3'>
      { MinibusSeat.map((seat:BusSeatObject, index) => {
        const isAvailable = selectedBus?.availableSeats?.includes(seat.seatNo);
        const isBooked = selectedBus?.bookedSeats?.includes(seat.seatNo);
        const seatClassName = `${seat.className} ${isBooked ? 'booked__seat' : isAvailable && selectedSeatNo === seat.seatNo ? 'selected__seat' : 'available__seat'}`
        
        return(
          <div
            key={index}
            className={seatClassName}
            onClick={() => {
              handleSeatSelect(seat.seatNo);
              localStorage.setItem('selectedSeatNo', JSON.stringify(seat.seatNo));
            }} 
            > { seat.element }
          </div>
        )
      })}
    </div>
  )
}

export default MinibusSeatModal;