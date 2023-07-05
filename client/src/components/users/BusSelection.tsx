import img from '../../assets/car1.png';
import '../../sass/tickets.scss';

const BusSelection = () => {
  return (
    <section id='bus__selection' className='mt-5'>
      <div className="container-lg">
        <div className="row">
          <div className="col-12 bg-warning">
            <div className="row">
              <div className="col-sm-12 col-md-2 col-lg-2 bg-info">
                <img src={img} alt="bus-img" className="bus-img" />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 bg-danger">
                <h3>Toyota(Hiace X)</h3>
                <h5>Abuja <i className="fa-solid fa-right-long"></i> Lagos</h5>
                <div className='d-flex align-items-center'>
                  <h6 className='my-auto'><i className="fa-solid fa-couch"></i> 7 seats(available) </h6>
                  <p className='my-auto'><i className="fa-solid fa-person-walking-luggage"></i> Adult: 1 <i className="fa-solid fa-clock"></i> 7: 30am</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 bg-success">ewewe</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BusSelection;