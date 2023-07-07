import '../../sass/tickets.scss';
import steering from '../../assets/steering-black.svg';

const SeatModal = () => {

  const createSeats = (): number[] => {
    const elements: number[] = [];
    for (let index = 1; index <= 20; index++) {
      elements.push(index);
    }
    return elements;
  }

  return (
    <section id="seat__modal">
      
      <div className="seat__modal-wrapper">
        <div className="close__modal ms-auto">
          <i className="fs-1 fa-solid fa-circle-xmark"></i>
        </div>
        <h3 className='my-3'>Select Seat</h3>
        <div className="container my-3">
            <div className="row ">
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='available__seat seat__sample'> </div>
                <small className='text-center mt-2'>Available Seat</small>
              </div>
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='selected__seat seat__sample'> </div>
                <small className='text-center mt-2'>Selected Seat</small>
              </div>
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='booked__seat seat__sample'> </div>
                <small className='text-center mt-2'>Booked Seat</small>
              </div>
            </div>
        </div>
        <div className='seats__container my-3'>
          <div className='seats__wrapper'>
            <div className="steering"> 
              <img src={ steering } alt="steering" /> 
            </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats">  </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats">  </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 1 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 2 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 3 </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats">  </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats"> 1 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 4 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 5 </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats">  </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 6 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 7 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 8 </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats"> </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 9 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 10 </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 11 </div>
          </div>
          <div className='seats__wrapper hidden'>
            <div className="seats">  </div>
          </div>
          <div className='seats__wrapper'>
            <div className="seats"> 12 </div>
          </div>
        </div>

        <form className='bg-danger w-100 mt-4'>
          <button className="btn w-100">Continue</button>
        </form>
      </div>
    </section>
  )
}

export default SeatModal