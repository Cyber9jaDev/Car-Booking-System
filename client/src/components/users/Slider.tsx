import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderData from './BannerSliderData';
import Slide from './Slide';
import { ReactElement } from 'react';

type CustomDotsType = (dots:ReactElement) => ReactElement;

type CustomPagingType = (dot: number) => ReactElement;

type ArrowType = () => ReactElement;



type SliderObjType = {
  dots: boolean, 
  autoplay: boolean,
  autoplaySpeed: number,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  arrows: boolean,
  fade: boolean,
  appendDots: CustomDotsType,
  
  // customPaging: CustomPagingType
}

const ReactSlider = () => {
  const settings : SliderObjType = {
    arrows: false,
    fade: true,
    dots: false, 
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <div>
      <ul style={{ margin: "0px" }} className='slick-dots'> { dots } </ul>
    </div>,
  }

  return (
    <Slider { ...settings }>
      { BannerSliderData.map((slide, index) => <Slide key={index} { ...slide } /> ) }
    </Slider>
  )
}

export default ReactSlider