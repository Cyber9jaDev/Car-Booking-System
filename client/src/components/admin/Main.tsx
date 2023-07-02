import { useEffect, useState, FormEvent } from 'react';
import '../../sass/admin/main.scss';
import Dashboard from './Dashboard';
import Booking from '../users/Booking';
import Time from './Time';

type BookingType = {
  trip: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  bus: string,
}

const Main = () => {
  const [formData, setFormData] = useState<BookingType>({
    trip: 'one-way',
    travellingFrom: '',
    travellingTo: '',
    departureDate: '',
    price: 1,
    bus: 'all',
  });
  
  return (
    <section id='main' className='p-0 col-sm-12 col-md-8 col-lg-10'>
      <header className='d-flex align-items-center h-100 w-100'>
        <i className="ms-sm-2 ms-lg-3 me-auto fa-solid fa-bars-staggered"></i>
        <Time />
      </header>

      {/* <Dashboard /> */}
      <Booking 
        formData={formData} 
        setFormData={setFormData} 
      />
    </section>
  )
}

export default Main;