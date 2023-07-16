import React, { useContext } from 'react';
import '../../sass/modal.scss';
import { BookingContext } from '../../contexts/BookingContext';

type ChildrenType = { children: React.ReactNode  };

const Modal = ({ children }: ChildrenType) => {
  const { setBookingState, bookingState } = useContext(BookingContext);

  console.log(bookingState);
  return (
    <section id='modal'> 
      <div className="modal-wrapper">
        <div className="close__modal ms-auto">
          <i onClick={() => setBookingState(prev => ({ ...prev, isOpenModal:false }))} className="fs-1 fa-solid fa-circle-xmark"></i>
        </div>
      </div>
        {children}
    </section>
  )
}

export default Modal;