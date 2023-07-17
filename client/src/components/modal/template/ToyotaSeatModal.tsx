import { useContext } from 'react';
import { BusSeatObject, ToyotaSeat } from './SeatArrangement';
import { BookingContext } from '../../../contexts/BookingContext';
import '../../../sass/seatmodal.scss';
import { useNavigate } from 'react-router-dom';


const ToyotaSeatModal = () => {
  const { bookingState: { selectedBus, selectedSeatNo }, handleSeatSelect } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleTrip = () => {
    if(selectedSeatNo === 0 ){ return  }
    
    navigate('/passenger-details');
  }
  return (     
    <section id='seat__modal'>
      <div className="modal-wrapper">
        <h3 className='my-3'>Select Seat</h3>
        <div className="container my-3">
          <div className="row ">
            <div className="col-4 d-flex align-items-center flex-column">
              <div className='available__seat seat__sample'> </div>
              <small className='text-center mt-2'>Available Seat</small>
            </div>
            <div className="col-4 d-flex align-items-center flex-column">
              <div className='selected__seat seat__sample'> </div>
              <small className='text-center mt-2'>Selected Seat</small>
            </div>
            <div className="col-4 d-flex align-items-center flex-column">
              <div className='booked__seat seat__sample'> </div>
              <small className='text-center mt-2'>Booked Seat</small>
            </div>
          </div>
        </div>
        <div className='seats__container my-3'>
          { ToyotaSeat.map((seat:BusSeatObject, index) => {
            const isAvailable = selectedBus?.availableSeats?.includes(seat.seatNo);
            const isBooked = selectedBus?.bookedSeats?.includes(seat.seatNo);
            const seatClassName = `${seat.className} ${isBooked ? 'booked__seat' : isAvailable && selectedSeatNo === seat.seatNo ? 'selected__seat' : 'available__seat'}`
            
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
        <div className='w-100 mt-4'>
          <button onClick={handleTrip} className="btn w-100 continue">Continue</button>
        </div>
      </div>
    </section> 
  )
}

export default ToyotaSeatModal;