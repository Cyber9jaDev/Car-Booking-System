import { FormEvent, useState } from "react";
import '../../sass/booking.scss';
import cities from "../../utilities/cities";

interface SelectObj{
  value: string,
  label: string
}

const Booking = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    trip: 'round-trip'
  });

  const sortedCities = () => {
    return cities.sort((a: SelectObj, b:SelectObj) => {
      const nameA = a.value.toUpperCase();
      const nameB = b.value.toUpperCase();
      if(nameA < nameB) return -1;
      if(nameA > nameB) return 1;
      return 0;
    });
  }

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    return
  }

  return (
    <section id="booking" className="py-5">
      <div className="container-lg">
        <form onSubmit={handleSubmit}>
          <div className="heading-top d-flex ">
            <strong>Book now</strong>
            <div className="d-flex align-items-center ms-lg-4 ms-sm-2">
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'one-way'})} className='me-2 my-auto' name='contact' type='radio' id="one-way" value='one-way' checked = { formData.trip === 'one-way' } />
                <label className='my-auto' htmlFor="one-way">One way</label>
              </div>
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'round-trip'})} className='ms-2 my-auto' name="contact" type='radio' id="round-trip" value='round-trip' checked={ formData.trip === 'round-trip' } />
                <label className='ms-2 my-auto' htmlFor="round-trip">Round trip</label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-from">Travelling From</label>
              <select className="traveling-from d-block mt-0 w-100" name="" id="traveling-from">
                { sortedCities().sort().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="travelling-to">Travelling To</label>
              <select className="traveling-to d-block mt-0 w-100" name="" id="traveling-to">
                { sortedCities().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="leaving">Leaving</label>
              <input className='w-100' id="leaving" type="date"/>
            </div>
            { formData.trip === 'round-trip' && <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
                <label className="d-block mb-2 form-label" htmlFor="returning">Returning</label>
                <input className='w-100' id="returning" type="date"/>
              </div>
            }
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="d-block mb-2 form-label" htmlFor="leaving">How many travellers?</label>
              <input min={1} className='w-100' id="leaving" type="number" placeholder="1"/>
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-3 my-3">
              <label className="form-label" htmlFor="transport-company">Select a Transport Company</label>
              <select className="transport-company d-block mt-0 w-100" name="" id="transport-company">
                { sortedCities().sort().map((city) => <option key={city.label} value={city.label}>{city.value}</option>) }
              </select>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking;