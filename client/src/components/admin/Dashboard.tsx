import '../../sass/admin/dashboard.scss';
import img1 from '../../assets/insurance.png';
import img2 from '../../assets/choices.png';
import img3 from '../../assets/smartphone.png';
import img4 from '../../assets/smartphone.png';

const Dashboard = () => {
  return (
    <section id="dashboard" className='mt-4'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 content d-block my-2">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="img"> <img src={img1} alt="img" /> </div>
                <div className='ms-4 d-flex flex-column justify-content-center w-100 w-100'>
                  <h6 className='my-auto'>Total Trip</h6>
                  <h2 className='my-auto mt-1 fs-2'>100</h2>
                  <small className='d-inline-block my-auto mt-1 position-relative'><span className='h-100 w-75 d-inline-block position-absolute'></span> </small>
                  <p className='my-auto mt-2'><i className="fa-solid fa-caret-down"></i> <span>Today</span></p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 content d-block my-2">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="img"> <img src={img2} alt="img" /> </div>
                <div className='ms-4 d-flex flex-column justify-content-center w-100'>
                  <h6 className='my-auto'>Total Ticket Booking</h6>
                  <h2 className='my-auto fs-2 mt-1'>10</h2>
                  <small className='d-inline-block my-auto mt-1 position-relative'><span className='h-100 w-75 d-inline-block position-absolute'></span> </small>
                  <p className='my-auto mt-2'><i className="fa-solid fa-caret-down"></i> <span>Today</span></p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 content d-block my-2">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="img"> <img src={img3} alt="img" /> </div>
                <div className='ms-4 d-flex flex-column justify-content-center w-100'>
                  <h6 className='my-auto'>Total Booking Amount</h6>
                  <h2 className='my-auto mt-1 fs-2'>12</h2>
                  <small className='d-inline-block my-auto mt-1 position-relative'><span className='h-100 w-75 d-inline-block position-absolute'></span> </small>
                  <p className='my-auto mt-2'><i className="fa-solid fa-caret-down"></i> <span>Today</span></p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 content d-block my-2">
              <div className="d-flex align-items-center h-100 w-100">
                <div className="img"> <img src={img4} alt="img" /> </div>
                <div className='ms-4 d-flex flex-column justify-content-center w-100'>
                  <h6 className='my-auto'>Total Passenger</h6>
                  <h2 className='my-auto mt-1 fs-2'>0</h2>
                  <small className='d-inline-block my-auto mt-1 position-relative'><span className='h-100 w-75 d-inline-block position-absolute'></span> </small>
                  <p className='my-auto mt-2'><i className="fa-solid fa-caret-down"></i> <span>Today</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Dashboard