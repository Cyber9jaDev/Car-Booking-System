import '../../sass/testimonial.scss';
import Carousel from './Carousel';
import img from '../../assets/team1.jpg';
import img2 from '../../assets/team2.jpg';
import img3 from '../../assets/team3.jpg';
import img4 from '../../assets/team4.jpg';


export type TestimonialCarouselType = JSX.Element[];

type ResponsiveObjType = { items: number }

export type ResponsiveType = { [index: number]: ResponsiveObjType }

export type CarouselDataType = {
  autoPlay?: boolean
  autoPlayStrategy?: 'default' | 'none' | 'action' | 'all'
  autoPlayInterval?: number
  animationDuration?: number
  animationType?: 'fadeout' | 'slide'
  infinite?: boolean
  touchTracking?: boolean
  disableButtonsControls?: boolean
  keyboardNavigation?: boolean
}

const Testimonial = () => {

  const responsive: ResponsiveType = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  const items: TestimonialCarouselType = [
    <div className='feedback-wrapper'>
      <header className='feedback-top'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</p>
      </header>
      <div className="feedback-grids d-flex align-items-center">
        <div className="feedback-img">
          <img className='img' src={img2} alt="feedback-img" />
        </div>
        <div className="ms-3">
          <h5 className='name'>Timothy Leah</h5>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='feedback-wrapper'>
      <header className='feedback-top'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</p>
      </header>
      <div className="feedback-grids d-flex align-items-center">
        <div className="feedback-img">
          <img src={img3} alt="feedback-img" />
        </div>
    
        <div className="feedback-info ms-4">
          <h5 className='name'>Timothy Leah</h5>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='feedback-wrapper'>
      <header className='feedback-top'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</p>
      </header>
      <div className="feedback-grids d-flex align-items-center">
        <div className="feedback-img">
          <img className='img-fluid' src={img4} alt="feedback-img" />
        </div>
    
        <div className="feedback-info ms-4">
          <h5 className='name'>Timothy Leah</h5>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='feedback-wrapper'>
      <header className='feedback-top'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</p>
      </header>
      <div className="feedback-grids d-flex align-items-center">
        <div className="feedback-img">
          <img src={img} alt="feedback-img" />
        </div>

        <div className="feedback-info ms-4">
          <h5 className='name'>Timothy Leah</h5>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>
  ]

  const data: CarouselDataType = {
    autoPlay: true,
    autoPlayStrategy:"none",
    autoPlayInterval: 3000,
    animationDuration: 3000,
    animationType: "fadeout",
    infinite: true,
    touchTracking: false,
    disableButtonsControls: true,
    keyboardNavigation: true,
  }

  return (
    <section id='testimonial'>
      <header>
        <h4 className="text-capitalize text-center mb-4">Testimonial</h4>
      </header>
      <div className="slider-container container-lg">
        <Carousel items={items} responsive={responsive} data={data} />
      </div>
    </section>
  )
}

export default Testimonial;