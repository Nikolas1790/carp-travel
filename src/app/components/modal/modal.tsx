'use client'

import React from 'react';

interface ModalProps {
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {

  
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className=' p-4 rounded shadow-lg relative'>
        <div>
          <button type='button' onClick={toggleModal}>CLOSE</button>
          jjjjjjjj
        </div>
      </div>
    </div>
  );
};

export default Modal;