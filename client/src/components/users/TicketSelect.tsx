import { useContext } from 'react';
import '../../sass/booking.scss';
import { BusImage, BusName, CityName } from '../../utilities/Functions';
import { BookingContext } from '../../contexts/BookingContext';


interface TripDataType {
  _id: string,
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  availableSeats: number[],
  bookedSeats: number[]
}

const TicketSelect = ({ busType, travellingFrom, travellingTo, availableSeats, bookedSeats, price, _id, departureDate }: TripDataType) => {
  const { setBookingState } = useContext(BookingContext);

  return (
    <div className="bus__selection-wrapper col-12 p-3">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <img src={BusImage[busType]} alt="bus-img" className="bus-img" />
        </div>
        <div className="info col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-self-center">
          <h1>{BusName(busType)}</h1>
          <h6 className='mt-1 fs-5'>{CityName(travellingFrom)} <i className="fa-solid fa-right-long mx-2"></i>{CityName(travellingTo)}</h6>
          <p className='mt-2'><i className="fa-solid fa-couch me-1"></i> {availableSeats.length} seats (available) </p>
          <p className='my-auto'><i className="fa-solid fa-person-walking-luggage"></i> Adult: 1 <i className="fa-solid fa-clock ms-3"></i> 7: 30am</p>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 d-flex align-self-center flex-column align-items-center fee-wrapper">
          <p className='fee'>N{price}</p>
          <button 
            className='w-100'
            onClick={() => { 
              localStorage.setItem('selectedSeatNo', JSON.stringify(null));
              localStorage.setItem('selectedBus', JSON.stringify({ busType, availableSeats, _id, bookedSeats }));
              localStorage.setItem("bookedData", JSON.stringify({ travellingFrom, travellingTo, departureDate, price }))
              setBookingState(prev => (
                {
                  ...prev, 
                  selectedSeatNo: null, 
                  isOpenModal: true, 
                  bookedData: { travellingFrom, travellingTo, departureDate, price },
                  selectedBus: { busType, availableSeats, _id, bookedSeats }
                }));
              }}> 
            View Seats
          </button>
        </div>
      </div>
    </div>
  )
}

export default TicketSelect;