import { SliderObjType } from "./BannerSliderData";

const Slide = ({ h4, h5, img }: SliderObjType)  => {

  return (
    <div className="banner-img" style={{background: `url(${img})` }}>
      <div className="bs-slider-overlay">
        <div className="banner-info text-center">
          <h4>{h4}</h4>
          { h5 && <h5 className="mb-5"><i className="fas fa-phone"></i> 12(00) 123 1234</h5>}
          <a href="booking.html">Book Now</a>
        </div>
      </div>
			</div>
  )
}

export default Slide;

{/* <div>
      <h4 className="">{h4}</h4>
      {h5 && <h5 className="">{h5}</h5>}
      <img className="" src={img} alt={h4} />
    </div> */}