// import { useContext } from 'react';
import '../../../sass/booking.scss';
import { BusSeatObject, ToyotaSeat } from './template/Toyota';
// import { BookingContext } from '../../../contexts/BookingContext';

const ToyotaSeatModal = () => {

  // const { bookingState: { trips, selectedBus } } = useContext(BookingContext);
  // console.log(selectedBus);
  return (      
    <div className='seats__container my-3'>
      { ToyotaSeat.map((seat:BusSeatObject, index) => (
          <div onClick={() => console.log(seat)} className={`seats__wrapper ${seat.className}`} key={index}>{seat.element}</div>
      ))}
    </div>
  )
}

export default ToyotaSeatModal;