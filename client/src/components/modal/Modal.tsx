import React, { useState, useContext } from 'react';
import '../../sass/modal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../utilities/Constants';
import { BookingContext } from '../../contexts/BookingContext';

type ChildrenType = { children: React.ReactNode  };

const ModalContainer = ({ children }: ChildrenType) => {
  const { bookingState: { isOpenModal }, closeModal } = useContext(BookingContext);

  return (
    <Modal
      open={ isOpenModal }
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description" >
      <Box sx={modalStyle}> 
        <div className="close__modal ms-auto">
          <i onClick={closeModal} className="fs-1 fa-solid fa-circle-xmark"></i>
        </div>
        {children}
      </Box>
    </Modal>
  )
}

export default ModalContainer;