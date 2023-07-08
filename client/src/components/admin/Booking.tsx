import { useContext } from "react";
import '../../sass/booking.scss';
import { Cities, Buses } from "../../utilities/utils";
import { AdminContext } from "../../contexts/admin/AdminContext";

export type BookingType = {
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
}

const Booking = () => {
  const { tripState, setTripState, addNewTrip } = useContext( AdminContext );
  const { price, busType, isLoading, departureDate, travellingFrom, travellingTo } = tripState;
  
  return (
    <section id="booking" className="py-5">
      <div className="container">
        <form onSubmit={addNewTrip} >
        {/* <form onSubmit={handleSubmit}> */}
          <div className="heading-top d-flex">
            {/* <strong>Book now</strong> */}
            <strong>New Trip</strong>
            <div className="d-flex align-items-center ms-3">
              <div className="d-flex align-items-center">
                {/* <input onChange={() => setFormData({...formData, trip: 'one-way'})} className='me-2 my-auto' name='trip' type='radio' id="one-way" value='one-way' checked={trip==='one-way'} /> */}
                <input className='me-2 my-auto' name='trip' type='radio' id="one-way" value='one-way' />
                <label className='my-auto' htmlFor="one-way">One way trip</label>
              </div>
              {/* <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'round-trip'})} className='ms-2 my-auto' name="trip" type='radio' id="round-trip" value='round-trip' checked={trip==='round-trip'} />
                <label className='ms-2 my-auto' htmlFor="round-trip">Round trip</label>
              </div> */}
            </div>
          </div>
          <div className="row mt-3">

            {/* Travelling From*/}
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
              <input onChange={e => setTripState({ ...tripState, departureDate: e.target.value })} name='departure' className='w-100' id="departure-date" type='datetime-local' min="2020-01-01" max="2023-12-31"/>
            </div>

            {/* Ticket Price */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="price">Ticket Price (₦)</label>
              <input 
                onChange={(e) => { setTripState({ ...tripState, price: Number(e.target.value)})}} 
                value={price} min={1} className='w-100' name='price' id="price" type="number" placeholder='1'
              />
            </div>

            {/* Select Bus */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="bus-type">Select bus</label>
              <select defaultValue={busType} onChange={ e => setTripState({ ...tripState, busType: e.target.value }) } className="d-block mt-0 w-100" name="busType" id="bus-type">
                { Buses().map(bus => <option value={bus.value} key={bus.value}>{bus.label}</option>) }
              </select>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="row">
              <div className="col col-sm-6 mt-3">
                <button disabled={(!price || !departureDate || !travellingFrom || !travellingTo || !busType) && !isLoading } type='submit' className="btn w-100"> { isLoading? 'Loading...' : 'Add New Trip'} </button>
              </div>
              <div className="col col-sm-6 mt-3">
                <button type='reset' className="btn w-100">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking;