import '../../sass/why.scss';

const Why = () => {
  return (
    <section id='why' className='why'>
      <div className="container-fluid p-md-5 p-3">
        <header>
          <h3 className="heading text-capitalize text-center">Why taxi cab</h3>
          <h5 className="heading mb-5 text-center">Taxi Cab</h5>
        </header>
        <div className="row why-grids">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-4 grid1 text-center">
              <h4 className="mx-auto"><span>1</span></h4>
              <p className="mt-5">Top Rated Drivers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-4 grid2 text-center">
              <h4 className="mx-auto"><span>2</span></h4>
              <p className="mt-5">Safe Journey</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-4 grid3 text-center">
              <h4 className="mx-auto"><span>3</span></h4>
              <p className="mt-5">Without Peak Pricing</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-4 grid4 text-center">
              <h4 className="mx-auto"><span>4</span></h4>
              <p className="mt-5">Fast And Secure</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-md-0 mb-4 grid5 text-center">
              <h4 className="mx-auto"><span>5</span></h4>
              <p className="mt-5">Lowest Rates</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-md-0 mb-4 grid6 text-center">
              <h4 className="mx-auto"><span>6</span></h4>
              <p className="mt-5">Best Quality Cabs</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 mb-sm-0 mb-4 grid7 text-center">
              <h4 className="mx-auto"><span>7</span></h4>
              <p className="mt-5">Online Booking</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="py-5 px-2 grid8 text-center">
              <h4 className="mx-auto"><span>8</span></h4>
              <p className="mt-5">24/7 Cab Service</p>
            </div>
          </div>
        </div>
		</div>
    </section>
  )
}

export default Why;