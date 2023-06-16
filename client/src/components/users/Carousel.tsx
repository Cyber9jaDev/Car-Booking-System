import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TestimonialCarouselType } from './Testimonial';

type ChildrenProp = {
  items: TestimonialCarouselType
}

const Carousel = ({ items }: ChildrenProp) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <AliceCarousel
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={3000}
      animationDuration={3000}
      animationType="fadeout"
      infinite
      touchTracking={false}
      disableButtonsControls={true}
      items={items}
      keyboardNavigation={true}
      responsive={responsive}
    />
  )
}

export default Carousel