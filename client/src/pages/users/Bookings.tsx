import BookingTicket from '../../components/users/BookingTicket';
// import SeatModal from '../../components/users/SeatModal';
import '../../sass/booking.scss';
import { BookingContextProvider } from '../../contexts/BookingContext';
import TicketsList from '../../components/users/TicketsList';

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