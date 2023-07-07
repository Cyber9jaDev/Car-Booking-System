import '../../sass/tickets.scss';

const HiaceModal = () => {
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
              <div className="seats"> 1 </div>
            </div>
          { createSeats().map(number => {
            return (
              <div className='seats__wrapper'>
                <div className="seats"> {number} </div>
              </div>
              )
          }) 
        }
        </div>
      </div>
    </section>
  )
}

export default HiaceModal