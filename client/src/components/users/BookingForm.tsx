import { FormEvent, useContext, useState } from 'react';
import '../../sass/BookingForm.scss';
import { Cities } from '../../utilities/Functions';
import { BookingContext } from '../../contexts/BookingContext';
import UserService from '../../services/UserService';

const BookingForm = () => {
  const { setBookingState } = useContext(BookingContext);
  const [ tripState, setTripState ] = useState({ travellingFrom: 'all', travellingTo: 'all', departureDate: 'all' });
  const { travellingFrom, travellingTo, departureDate } = tripState;

  const getAllTrips = async(e:FormEvent) => {
    // e.preventDefault();
    console.log('test')

    try {
      const response = await UserService.GetAllTrips(travellingFrom, travellingTo, departureDate);
      console.log(response)
      setBookingState(prev => ({ ...prev, trips: [...response] }));
    } catch (error) {
      return error;
    } 
  }

  return (
    <section id='booking__form-wrapper' className='py-5'>
      <div className="container">
        <form className="container" onSubmit={getAllTrips}>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-from">Travelling From</label>
              <select defaultValue={travellingFrom} onChange={e => setTripState({...tripState, travellingFrom: e.target.value})} 
                className="d-block mt-0 w-100" name="travellingFrom" id="travelling-from">
                { Cities().map((city) => <option key={city.value} value={city.value}>{city.label}</option>) }
              </select>
            </div>

            {/* Travelling To */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-to">Travelling To</label>
              <select defaultValue={travellingTo} onChange={e => setTripState({...tripState, travellingTo: e.target.value})}  
                className="d-block mt-0 w-100" name="travellingTo" id="traveling-to">
                { Cities().map((city) => <option key={city.value} value={city.value}>{city.label}</option>) }
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="departure-date">Departure Date and Time</label>
              <input 
                name='departureDate' 
                defaultValue={departureDate}
                className='w-100' id="departure-date" type='date' min="2020-01-01" max="2023-12-31"
                onChange={e => setTripState({ ...tripState, departureDate: e.target.value })} 
              />
            </div>

            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block form-label form-submit" htmlFor="submit">{'Empty'}</label>
              <button id='submit' type='submit' className="w-100"> Find Ticket </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookingForm;