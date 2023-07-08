import { useState } from 'react';
import '../../sass/bookingTicket.scss';
import { Cities } from '../../utilities/Functions';

export type BookingType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
}

const BookingTicket = () => {
  const [tripState, setTripState] = useState({
    travellingFrom: 'none',
    travellingTo: 'none',
    departureDate: '',
  });

  const { travellingFrom, travellingTo } = tripState;

  return (
    <section id='booking__ticket-wrapper' className='booking__ticket-wrapper py-5'>
      <div className="container">
        <form className="container">
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
                className="d-block mt-0 w-100" name="to" id="traveling-to">
                { Cities().map((city) => <option key={city.value} value={city.value}>{city.label}</option>) }
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="departure-date">Departure Date and Time</label>
              <input onChange={e => setTripState({ ...tripState, departureDate: e.target.value })} name='departure' className='w-100' id="departure-date" type='date' min="2020-01-01" max="2023-12-31"/>
            </div>

            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block form-label form-submit" htmlFor="submit">j</label>
              <button id='submit' type='submit' className="w-100"> Find Ticket </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookingTicket;