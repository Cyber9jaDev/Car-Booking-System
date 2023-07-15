import { useContext } from 'react';
import '../../../sass/booking.scss';
import MinibusSeatModal from './MinibusSeatModal';
import SiennaSeatModal from './SiennaSeatModal';
import ToyotaSeatModal from './ToyotaSeatModal';
import { BookingContext } from '../../../contexts/BookingContext';
import { useNavigate } from 'react-router-dom';

const SeatModal = () => {
  const { bookingState: { selectedBus, selectedSeatNo }, setBookingState } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleTrip = () => {
    if(selectedSeatNo === 0 ){
      // ;

      navigate('/passenger-details')
    }
  }


  return (
    <section id="modal">
      <div className="modal-wrapper">
        <div className="close__modal ms-auto">
          <i onClick={() => setBookingState(prev => ({ ...prev, isOpenModal:false }))} className="fs-1 fa-solid fa-circle-xmark"></i>
        </div>
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

        { selectedBus?.busType === 'toyota' && <ToyotaSeatModal /> }
        { selectedBus?.busType === 'sienna' && <SiennaSeatModal /> }
        { selectedBus?.busType === 'minibus' && <MinibusSeatModal /> }

        <div className='w-100 mt-4'>
          <button onClick={handleTrip} className="btn w-100 continue">Continue</button>
        </div>
      </div>
    </section>
  )
}

export default SeatModal