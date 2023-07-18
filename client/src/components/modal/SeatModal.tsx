import { useContext } from 'react';
import MinibusSeatModal from './template/MinibusSeatModal';
import SiennaSeatModal from './template/SiennaSeatModal';
import ToyotaSeatModal from './template/ToyotaSeatModal';
import { BookingContext } from '../../contexts/BookingContext';
import { useNavigate } from 'react-router-dom';
import '../../sass/modal.scss';
import { UserContext } from '../../contexts/UserContext';
import { Toast } from '../../utilities/Functions';


const SeatModal = () => {
  const { bookingState: { selectedBus, selectedSeatNo }, closeModal } = useContext(BookingContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleTrip = () => {
    if(!currentUser){
      return Toast('error', 'Please log in to book this seat');
    }
    if(selectedSeatNo === 0 ){ return }
    closeModal();
    navigate('/passenger-details');
  }


  return (
    <section id="seat__modal">
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

        { selectedBus?.busType === 'toyota' && <ToyotaSeatModal /> }
        { selectedBus?.busType === 'sienna' && <SiennaSeatModal /> }
        { selectedBus?.busType === 'minibus' && <MinibusSeatModal /> }

        <div className='w-100 mt-4'>
          <button 
            className="btn w-100 continue"
            disabled={selectedSeatNo === 0 ? true : false } 
            onClick={handleTrip} 
            > Continue
          </button>
        </div>
      </div>
    </section>
  )
}

export default SeatModal;