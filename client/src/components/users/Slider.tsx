import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderData from './BannerSliderData';
import Slide from './Slide';
import { ReactElement } from 'react';

type CustomDotsType = (dots:ReactElement) => ReactElement;

type CustomPagingType = (dot: number) => ReactElement;

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
    arrows: true,
    fade: true,
    dots: true, 
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <ul className='slick-dots'> { dots } </ul>,
    // customPaging: (i) => <button style={{
    //   fontSize: '2em',

    // }}>{i + 1}</button>
    // customPaging: (i) => <button style={{
    //   content: '',
    //   color: 'white',
    //   fontSize: '1em',
    //   // width: '50px', 
    //   // height: '50px',
    //   // background: 'white'
    // }}>{i + 1}</button>
  }

  return (
    <Slider { ...settings }>
      { BannerSliderData.map(slide => <Slide { ...slide } /> ) }
    </Slider>
  )
}

export default ReactSlider