import BookingTicket from '../../components/users/BookingTicket';
import BusSelection from '../../components/users/BusSelection';
import '../../sass/tickets.scss';
const Tickets = () => {
  return (
    <main id='tickets'>
      <BookingTicket />
      <BusSelection />
    </main>
  )
}

export default Tickets;