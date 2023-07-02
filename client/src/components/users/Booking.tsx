import { FormEvent } from "react";
import '../../sass/booking.scss';
import sortedCities from "../../utilities/cities";

export type BookingType = {
  // trip: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  busType: string,
}

type FormDataType = {
  formData: BookingType,
  setFormData: React.Dispatch<React.SetStateAction<BookingType>>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
  isLoading: boolean,
  hasError: boolean,
}

const Booking = ({ formData, setFormData, handleSubmit, isLoading, hasError }: FormDataType ) => {

  const { price, busType }: BookingType = formData;

  // console.log(formData);
  return (
    <section id="booking" className="py-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="heading-top d-flex">
            {/* <strong>Book now</strong> */}
            <strong>New Trip</strong>
            <div className="d-flex align-items-center ms-3">
              <div className="d-flex align-items-center">
                {/* <input onChange={() => setFormData({...formData, trip: 'one-way'})} className='me-2 my-auto' name='trip' type='radio' id="one-way" value='one-way' checked={trip==='one-way'} /> */}
                <input className='me-2 my-auto' name='trip' type='radio' id="one-way" value='one-way' checked />
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
              <select onChange={e => setFormData({ ...formData, travellingFrom : e.target.value })} className="d-block mt-0 w-100" name="from" id="travelling-from">
                <option value="none">---Please choose a city---</option>
                { sortedCities().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>

            {/* Travelling To */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-to">Travelling To</label>
              <select onChange={e => setFormData({ ...formData, travellingTo : e.target.value })} className="d-block mt-0 w-100" name="to" id="traveling-to">
                <option value="none">---Please choose a city---</option>
                { sortedCities().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="departure-date">Departure Date and Time</label>
              <input onChange={e => setFormData({ ...formData, departureDate: e.target.value})} name='departure' className='w-100' id="departure-date" type='datetime-local' min="2020-01-01" max="2023-12-31"/>
            </div>

            {/* Return Date and Time */}
            {/* { formData.trip === 'round-trip' && <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
                <label className="d-block mb-2 form-label" htmlFor="return-date">Return Date</label>
                <input onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })} name='return' className='w-100' id="return-date" type="date"/>
              </div>
            }  */}

            {/* Passengers */}
            {/* <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="passengers">How many passengers?</label>
              <input 
                onChange={(e) => { setFormData({ ...formData, passengers: Number(e.target.value)})}} 
                value={passengers} min={1} className='w-100' name='passengers' id="passengers" type="number" placeholder='1'
              />
            </div> */}

            {/* Ticket Price */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="price">Ticket Price (₦)</label>
              <input 
                onChange={(e) => { setFormData({ ...formData, price: Number(e.target.value)})}} 
                value={price} min={1} className='w-100' name='price' id="price" type="number" placeholder='1'
              />
            </div>

            {/* Sort By */}
            {/* <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="sort-by">Sort by</label>
              <select onChange={e => setFormData({ ...formData, sortBy: e.target.value })} className="d-block mt-0 w-100" name="sortBy" id="sort-by">
                <option value="price">Price</option>
                <option value="time">Departure Time</option>
              </select>
            </div> */}

            {/* Select Bus */}
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="bus-type">Select bus</label>
              <select defaultValue={busType} onChange={ e => setFormData({ ...formData, busType: e.target.value }) } className="d-block mt-0 w-100" name="busType" id="bus-type">
                {/* <option value="all"> All Buses </option> */}
                <option value="mini-coach">Mini Coach (32 Seats) </option>
                <option value="hiace">Hummer Bus (16 Seats) </option>
                <option value="mini-bus">Minibus (12 Seats) </option>
                <option value="mazda">Nissan Mazda Bus (14 Seats) </option>
                <option value="luxurious-bus">Luxurious Bus (32 Seats)</option>
                <option value="sienna">Sienna (7 Seats) </option>
              </select>
            </div>
            {/* <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="transport-company">Select a Transport Company</label>
              <select onChange={(e) => { setFormData({ ...formData, transportCompany: e.target.value })}} className="d-block mt-0 w-100" name="transportCompany" id="transport-company">
                <option value="all">All Companies</option>
                { sortedTransportCompany().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div> */}
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col col-sm-6 mt-3">
                <button type='submit' className="btn w-100"> { isLoading? 'Loading' : 'Add New Trip'} </button>
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