import { FormEvent, useContext, useState } from 'react';
import '../../sass/BookingForm.scss';
import { Cities, Toast } from '../../utilities/Functions';
import { BookingContext } from '../../contexts/BookingContext';
import UserService from '../../services/UserService';
// import { today } from '../../utilities/constants';


const BookingForm = () => {
  const { setBookingState } = useContext(BookingContext);
  const [ tripState, setTripState ] = useState({ 
    travellingFrom: 'none', 
    travellingTo: 'none', 
    departureDate: 'none',
    page: 1, 
    pageSize: 2,
    totalPages: null
  });
  const { travellingFrom, travellingTo, departureDate } = tripState;

  const getAllTrips = async(e:FormEvent) => {
    e.preventDefault();

    // Ensure the user does not select the same city for arrival and departure
    if((travellingFrom !== 'none') && (travellingTo !== 'none') && (travellingFrom === travellingTo)) { 
      return Toast('fail', 'Departure City cannot be the same as the Arrival City'); 
    }

    try {
      const response = await UserService.GetAllTrips(travellingFrom, travellingTo, departureDate);
      console.log(response);
      // setBookingState(prev => ({ ...prev, trips: [...response?.tickets] }));
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
              <select defaultValue='none' onChange={e => setTripState({...tripState, travellingFrom: e.target.value})} 
                className="d-block mt-0 w-100" name="travellingFrom" id="travelling-from">
                  <option value="none"> --- Departure City --- </option>
                { Cities().map((city) => <option key={city.value} value={city.value}>{city.label}</option>) }
              </select>
            </div>

            {/* Travelling To */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-to">Travelling To</label>
              <select defaultValue='none' onChange={e => setTripState({...tripState, travellingTo: e.target.value})}  
                className="d-block mt-0 w-100" name="travellingTo" id="traveling-to">
                  <option value="none"> --- Arrival City --- </option>
                { Cities().map((city) => <option key={city.value} value={city.value}>{city.label}</option>) }
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="departure-date">Departure Date</label>
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