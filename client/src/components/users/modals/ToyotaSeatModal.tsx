import { useContext, useState } from 'react';
import { BusSeatObject, ToyotaSeat } from './template/Toyota';
import { BookingContext } from '../../../contexts/BookingContext';
import '../../../sass/booking.scss';


const ToyotaSeatModal = () => {
  const { bookingState: { selectedBus } } = useContext(BookingContext);
  const bookedSeat: number[] = selectedBus?.seats ?? [];
  const [clicked, setClicked] = useState(false);


  const handleClick = (seatNo: number): unknown => {
    if (seatNo === 0 || selectedBus?.seats.includes(seatNo)) { return }

    console.log(seatNo);



  }

  return (      
    <div className='seats__container my-3'>
      { ToyotaSeat.map((seat:BusSeatObject, index) => (
          <div
            key={index}
            className={`seats__wrapper ${selectedBus?.seats.includes(seat.seatNo) ? 'available__seat' : clicked && !bookedSeat.includes(seat.seatNo) ? 'booked__seat' : 'selected__seat' } ${seat.className}`} 
            onClick={() => {
              if(seat.seatNo === 0) { return }
              alert(seat.seatNo);
            }} 
            > { seat.element }
          </div>
      ))}
    </div>
  )
}

export default ToyotaSeatModal;