import { useContext } from "react";
import BookingTicket from '../../components/users/BookingTicket';
import { BookingContext } from '../../contexts/BookingContext';
import TicketsList from '../../components/users/TicketsList';
import SeatModal from '../../components/users/modals/SeatModal';
import '../../sass/booking.scss';

const Bookings = () => {   
  const { bookingState: { isOpenModal } } = useContext(BookingContext); 

  return (
    <main id='booking' className='position-relative'>
      { isOpenModal && <SeatModal /> }
      <BookingTicket />
      <TicketsList />
    </main>
  )
}

export default Bookings;