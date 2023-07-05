import BookingTicket from '../../components/users/BookingTicket';
import BusSelection from '../../components/users/BusSelection';
import SeatModal from '../../components/users/SeatModal';
import '../../sass/tickets.scss';
const Tickets = () => {
  return (
    <main id='tickets' className='position-relative'>
      <SeatModal />
      <BookingTicket />
      <BusSelection />
    </main>
  )
}

export default Tickets;