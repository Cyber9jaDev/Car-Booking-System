import { FormEvent, useState } from "react";
import Select from 'react-select'
import '../../sass/booking.scss';
import cities from "../../utilities/cities";

const Booking = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    trip: 'one-way'
  });

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    return
  }

  return (
    <section id="booking">
      <div className="container-lg">
        <form onSubmit={handleSubmit}>
          <div className="heading-top d-flex ">
            <strong>Book now</strong>
            <div className="d-flex align-items-center ms-lg-4 ms-sm-2">
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'one-way'})} className='me-2 my-auto' name='contact' type='radio' id="one-way" value='one-way' checked = { formData.trip == 'one-way' ? true : false } />
                <label className='my-auto' htmlFor="one-way">One way</label>
              </div>
              <div className="d-flex align-items-center">
                <input onChange={() => setFormData({...formData, trip: 'round-trip'})} className='ms-2 my-auto' name="contact" type='radio' id="round-trip" value='round-trip' checked={ formData.trip === 'round-trip' ? true : false } />
                <label className='ms-2 my-auto' htmlFor="round-trip">Round trip</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-4 col-lg-3">
              <label htmlFor="from">From</label>
              <Select id="from" options={cities} placeholder='Enter a town or city' isSearchable />
            </div>
            <div className="form-group col-sm-12 col-md-4 col-lg-3">
              <label htmlFor="to">To</label>
              <Select id="to" options={cities} placeholder='Enter a town or city' isSearchable />
            </div>
            <div className="form-group col-sm-12 col-md-4 col-lg-3">
              <label className="d-block" htmlFor="leaving">Leaving</label>
              <input id="leaving" type="date" placeholder="Pick a date"/>
            </div>
            <div className="form-group col-sm-12 col-md-4 col-lg-3">
              <label className="d-block" htmlFor="returning">Returning</label>
              <input id="returning" type="date" placeholder="Pick a date"/>
            </div>
            <div className="form-group col-sm-12 col-md-4 col-lg-3">
              <label htmlFor="">From</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking;