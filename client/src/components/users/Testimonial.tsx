import '../../sass/testimonial.scss';
import Carousel from './Carousel';
import img from '../../assets/team1.jpg';
import img2 from '../../assets/team2.jpg';
import img3 from '../../assets/team3.jpg';
import img4 from '../../assets/team4.jpg';


export type TestimonialCarouselType = JSX.Element[]

const Testimonial = () => {

  const items: TestimonialCarouselType = [
    <div className='mx-2 bg-black carousel-wrapper'>
      <header>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</h6>
      </header>
      <div className="d-flex align-items-center">
        <div className="img-wrapper">
          <img className='img' src={img2} alt="" />
        </div>
        <div className="info-wrapper ms-3">
          <p className='name'>Timothy Leah</p>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='mx-2 bg-info carousel-wrapper'>
      <header>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</h6>
      </header>
      <div className="d-flex align-items-center">
        <div className="img-wrapper">
          <img src={img3} alt="" />
        </div>
        <div className="info-wrapper ms-4">
          <p className='name'>Timothy Leah</p>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='mx-2 bg-success carousel-wrapper'>
      <header>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</h6>
      </header>
      <div className="d-flex align-items-center">
        <div className="img-wrapper">
          <img src={img4} alt="" />
        </div>
        <div className="info-wrapper ms-4">
          <p className='name'>Timothy Leah</p>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>,
    <div className='mx-2 bg-warning carousel-wrapper'>
      <header>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque saepe architecto provident fugit voluptates non unde eius animi aliquid,</h6>
      </header>
      <div className="d-flex align-items-center">
        <div className="img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="info-wrapper ms-4">
          <p className='name'>Timothy Leah</p>
          <p className="role">Customer</p>
        </div>
      </div>
    </div>
  ]

  return (
    <section id='testimonial'>
      <header>
        <h4 className="text-capitalize text-center mb-4">Testimonial</h4>
      </header>
      <div className="slider-container container-lg">
        <Carousel items={items}/>
      </div>
    </section>
  )
}

export default Testimonial;