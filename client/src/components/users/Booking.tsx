import { FormEvent, useState } from "react";
import '../../sass/booking.scss';
import sortedCities from "../../utilities/cities";
import sortedTransportCompany from "../../utilities/transportCompany";

const Booking = () => {
  const [formData, setFormData] = useState({
    trip: 'round-trip',
    departureDate: Date.now()
  });

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    return
  }

  return (
    <section id="booking" className="py-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="heading-top d-flex">
            <strong>Book now</strong>
            <div className="d-flex align-items-center ms-3">
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'one-way'})} className='me-2 my-auto' name='travel-details' type='radio' id="one-way" value='one-way' checked={ formData.trip === 'one-way' } />
                <label className='my-auto' htmlFor="one-way">One way</label>
              </div>
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'round-trip'})} className='ms-2 my-auto' name="travel-details" type='radio' id="round-trip" value='round-trip' checked={ formData.trip === 'round-trip' } />
                <label className='ms-2 my-auto' htmlFor="round-trip">Round trip</label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-from-select">Travelling From</label>
              <select className="d-block mt-0 w-100" name="travelling-from-cities" id="travelling-from-select">
                <option value="none">---Please choose a city---</option>
                { sortedCities().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-to-select">Travelling To</label>
              <select className="d-block mt-0 w-100" name="travelling-to-cities" id="traveling-to-select">
                <option value="none">---Please choose a city---</option>
                { sortedCities().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="departure-date">Departure Date</label>
              <input className='w-100' id="departure-date" type="date" value="" min="2020-01-01" max="2023-12-31"/>
            </div>
            { formData.trip === 'round-trip' && <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
                <label className="d-block mb-2 form-label" htmlFor="return-date">Return Date</label>
                <input className='w-100' id="return-date" type="date"/>
              </div>
            }
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="passengers">How many passengers?</label>
              <input min={1} className='w-100' id="passengers" type="number" placeholder="1"/>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="transport-company">Sort by</label>
              <select className="transport-company d-block mt-0 w-100" name="" id="transport-company">
                <option value="price">Price</option>
                <option value="time">Departure Time</option>
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="transport-company">Select bus</label>
              <select className="transport-company d-block mt-0 w-100" name="" id="transport-company">
                <option value="all"> All Buses </option>
                <option value="coach">Coach</option>
                <option value="hiace">Toyota Hiace</option>
                <option value="minibus">Minibus</option>
                <option value="mazda">Nissan Mazda</option>
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="transport-company">Select a Transport Company</label>
              <select className="transport-company d-block mt-0 w-100" name="" id="transport-company">
                <option value="all">All Companies</option>
                { sortedTransportCompany().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col col-sm-6 mt-3">
                <button type='submit' className="btn w-100">Book Now</button>
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