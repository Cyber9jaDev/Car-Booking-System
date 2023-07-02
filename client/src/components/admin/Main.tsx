import { useEffect, useState, FormEvent } from 'react';
import '../../sass/admin/main.scss';
// import Dashboard from './Dashboard';
import Booking from '../users/Booking';
import Time from './Time';
import { Toast } from '../../utilities/utils';
import AdminService from '../../services/AdminService';


export type BookingType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
}

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [formData, setFormData] = useState<BookingType>({
    // trip: 'one-way',
    travellingFrom: '',
    travellingTo: '',
    departureDate: '',
    price: 1,
    busType: 'mini-coach',
  });

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const { price, busType, travellingTo, travellingFrom, departureDate }: BookingType = formData;
    if(!travellingFrom || !travellingTo || !departureDate || !busType || !price) {
      return Toast('error', 'Please provide all fields');
    }

    setIsLoading(true);
    setHasError(false);

    try {
      const { data } = await AdminService.AddNewTrip(formData);
      console.log(data);
    } catch (error) {
      setHasError(true);
      return error;
    } finally{
      setIsLoading(false);
    }
  }
  
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
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        hasError={hasError}
      />
    </section>
  )
}

export default Main;