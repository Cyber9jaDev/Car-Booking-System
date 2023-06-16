import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselDataType, ResponsiveType, TestimonialCarouselType } from './Testimonial';


type ChildrenProp = {
  items: TestimonialCarouselType,
  responsive: ResponsiveType,
  data: CarouselDataType
}

const Carousel = ({ items, responsive, data }: ChildrenProp) => {

  return (
    <AliceCarousel
      items={items}
      autoPlay={data?.autoPlay}
      autoPlayStrategy={data?.autoPlayStrategy}
      autoPlayInterval={data?.autoPlayInterval}
      animationDuration={data?.animationDuration}
      animationType={data?.animationType}
      infinite={data?.infinite}
      touchTracking={data?.touchTracking}
      disableButtonsControls={data?.disableButtonsControls}
      keyboardNavigation={data.keyboardNavigation}
      responsive={responsive}
    />
  )
}

export default Carousel