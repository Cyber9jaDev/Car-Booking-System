import '../../../sass/booking.scss';
import steering from '../../../assets/steering-black.svg';

const MinibusSeatModal = () => {
  return (      
    <div className='seats__container my-3'>
      <div className='seats__wrapper'>
        <div className="steering"> 
          <img src={ steering } alt="steering" /> 
        </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats">  </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats">  </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 1 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 2 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 3 </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats">  </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats"> 1 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 4 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 5 </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats">  </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 6 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 7 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 8 </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats"> </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 9 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 10 </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 11 </div>
      </div>
      <div className='seats__wrapper hidden'>
        <div className="seats">  </div>
      </div>
      <div className='seats__wrapper'>
        <div className="seats"> 12 </div>
      </div>
    </div>
  )
}

export default MinibusSeatModal;