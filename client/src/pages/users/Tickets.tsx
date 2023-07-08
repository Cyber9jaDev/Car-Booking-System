import BookingTicket from '../../components/users/BookingTicket';
// import SeatModal from '../../components/users/SeatModal';
import '../../sass/tickets.scss';
import UserService from '../../services/UserService';
import { useEffect, useState } from 'react';
import BusSelection from '../../components/users/BusSelection';

interface TripDataType {
  _id: string,
  busType: string,
  createdAt: string, 
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  seats: number[],
  updatedAt: string,
  __v:  string
}

const Tickets = () => {  
  const [trips, setTrips] = useState([]);

  async function test(){
    try {
      const { data } = await UserService.GetAllTrips();
      setTrips(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    test();
  }, [])
  
  return (
    <main id='tickets' className='position-relative'>
      {/* <SeatModal /> */}
      <BookingTicket />
      <section id='bus__selection' className='py-5'>
        <div className="container-lg">
          <div className="row">
            { trips.map((trip:TripDataType) => <BusSelection { ...trip } /> ) }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tickets;