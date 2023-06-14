import { SliderObjType } from "./BannerSliderData";
import { Link } from 'react-router-dom';

const Slide = ({ h4, h5, img }: SliderObjType)  => {

  return (
    <div className="wrapper" style={{ backgroundImage: `url(${img})`}}>
      <div className="banner-info">
        <h4>{h4}</h4>
        <h5 className="mb-5">{h5}</h5>
        <Link role='button' className="nav-link" to="/booking">Book Now</Link>
      </div>
			</div>
  )
}

export default Slide;

