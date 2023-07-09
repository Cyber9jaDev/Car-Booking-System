import BookingTicket from '../../components/users/BookingTicket';
import { BookingContextProvider } from '../../contexts/BookingContext';
import TicketsList from '../../components/users/TicketsList';
// import SeatModal from '../../components/users/modals/SeatModal';
import '../../sass/booking.scss';

const Bookings = () => {    
  return (
    <BookingContextProvider>
      <main id='booking' className='position-relative'>
        {/* <SeatModal /> */}
        <BookingTicket />
        <TicketsList />
      </main>
    </BookingContextProvider>
  )
}

export default Bookings;