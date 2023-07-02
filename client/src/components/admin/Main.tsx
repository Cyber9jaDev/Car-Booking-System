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
  returnDate: string,
  passengers: number,
  sortBy: string,
  bus: string,
}

const Main = () => {
  const [formData, setFormData] = useState<BookingType>({
    trip: 'round-trip',
    travellingFrom: '',
    travellingTo: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    sortBy: 'price',
    bus: 'all',
  });

  // const [time, setTime] = useState({ 
  //   hour: new Date().getHours(),
  //   minute: new Date().getMinutes(),
  //   second: new Date().getSeconds(),
  // });

  // useEffect(() => {
  //   const time_ = setInterval(() => {
  //     setTime({ hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()})
  //   }, 1000);
  //   return () => clearInterval(time_); 
  // }, []);
  
  // const { hour, minute, second } = time;

  // const updateForm = (e: FormEvent) => {
    
  // }

  
  return (
    <section id='main' className='p-0 col-sm-12 col-md-10'>
      <header className='d-flex align-items-center h-100 w-100'>
        <i className="ms-sm-2 ms-lg-3 me-auto fa-solid fa-bars-staggered"></i>
        {/* <div className="date py-2 px-3 me-sm-2 me-lg-3 ms-auto border border-1 border-black">
          <span>{ hour }</span> <span>:</span> <span> { minute } </span> <span className=''>:</span> <span> { second } </span>
        </div> */}
        <Time />
      </header>

      <Dashboard />
      <Booking formData={formData} setFormData={setFormData} />
    </section>
  )
}

export default Main;