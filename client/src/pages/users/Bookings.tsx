import BookingForm from '../../components/users/BookingForm';
import TicketsList from '../../components/users/TicketsList';
import '../../sass/booking.scss';

const Bookings = () => {   

  return (
    <main id='booking' className='position-relative'>
      <BookingForm />
      <TicketsList />
    </main>
  )
}

export default Bookings;