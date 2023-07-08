import '../../sass/booking.scss';
import img from '../../assets/toyota.jpg';
import { BusName, CityName } from '../../utilities/Functions';

interface TripDataType {
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  seats: number[],
}

const TicketSelect = ({ busType, travellingFrom, travellingTo, seats, price }: TripDataType) => {

  return (
    <div className="bus__selection-wrapper col-12 p-3">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <img src={img} alt="bus-img" className="bus-img" />
        </div>
        <div className="info col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-self-center">
          <h1>{BusName(busType)}</h1>
          <h6 className='mt-1 fs-5'>{CityName(travellingFrom)} <i className="fa-solid fa-right-long mx-2"></i>{CityName(travellingTo)}</h6>
          <p className='mt-2'><i className="fa-solid fa-couch me-1"></i> {seats.length} seats (available) </p>
          <p className='my-auto'><i className="fa-solid fa-person-walking-luggage"></i> Adult: 1 <i className="fa-solid fa-clock ms-3"></i> 7: 30am</p>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 d-flex align-self-center flex-column align-items-center fee-wrapper">
          <p className='fee'>N{price}</p>
          <button className='w-100'>View Seats</button>
        </div>
      </div>
    </div>
  )
}

export default TicketSelect;