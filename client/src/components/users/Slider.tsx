import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderData from './BannerSliderData';
import Slide from './Slide';


type SliderObjType = {
  dots: boolean, 
  autoplay: boolean,
  autoplaySpeed: number,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  arrows: boolean,
  fade: boolean
}


const ReactSlider = () => {
  const settings : SliderObjType = {
    arrows: true,
    fade: true,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider { ...settings }>
      { BannerSliderData.map(slide => <Slide { ...slide } /> ) }
    </Slider>
  )
}

export default ReactSlider