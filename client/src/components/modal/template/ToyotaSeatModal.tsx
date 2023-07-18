import { useContext } from 'react';
import { BusSeatObject, ToyotaSeat } from './SeatArrangement';
import { BookingContext } from '../../../contexts/BookingContext';
import '../../../sass/modal.scss';

const ToyotaSeatModal = () => {
  const { bookingState: { selectedBus, selectedSeatNo }, handleSeatSelect } = useContext(BookingContext);
  console.log(selectedSeatNo);

  return (     
    <div className='seats__container my-3'>

      { ToyotaSeat.map((seat:BusSeatObject, index) => {
        
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

export default ToyotaSeatModal;