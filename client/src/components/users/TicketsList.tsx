import { useCallback, useContext, useEffect } from 'react';
import '../../sass/booking.scss';
import BusSelection from './TicketSelect';
import { BookingContext, TicketType } from '../../contexts/BookingContext';

const TicketsList = () => {
  const { bookingState, getTicketsList } = useContext(BookingContext);
  const { trips } = bookingState;

  const memoizedTicketLists = useCallback( () => { getTicketsList() }, [getTicketsList] );

  useEffect(() => { memoizedTicketLists()}, []);

  return (
    <section id='bus__selection' className='py-5'>
      <div className="container-lg">
        <div className="row">
          { trips.map(( trip:TicketType ) => <BusSelection key={trip._id} { ...trip } /> ) }
        </div>
      </div>
    </section>
  )
}

export default TicketsList