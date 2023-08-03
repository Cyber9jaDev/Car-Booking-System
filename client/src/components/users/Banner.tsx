import ReactSlider from "./Slider";
import '../../sass/banner.scss';

const Banner = () => {

  return (
    <section id="banner">
      <div className="slider-container">
        <ReactSlider />
      </div>
    </section>
    
  );
}

export default Banner;