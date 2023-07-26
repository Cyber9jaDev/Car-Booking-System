import { useCallback, useContext, useEffect } from 'react';
import '../../sass/booking.scss';
import TicketSelect from './TicketSelect';
import { BookingContext } from '../../contexts/BookingContext';
import Modal from '../modal/Modal';
import SeatModal from '../modal/SeatModal';
import { BookingType } from '../../utilities/Types';


const TicketsList = () => {
  const { bookingState:{ trips }, getTicketsList } = useContext(BookingContext);

  const memoizedTicketLists = useCallback( () => { getTicketsList() }, [getTicketsList] );

  useEffect(() => { memoizedTicketLists() }, []);

  return (
    <>
      <section id='bus__selection' className='py-5'>
        <div className="container-lg">
          <div className="row">
            { trips.map(( trip:BookingType ) => <TicketSelect key={trip._id} { ...trip } /> ) }
          </div>
        </div>
        
      </section>
      <Modal>
        <SeatModal />
      </Modal>      
    </>
  )
}

export default TicketsList