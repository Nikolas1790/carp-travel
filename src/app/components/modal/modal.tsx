'use client'

import React, { useEffect } from 'react';
import NavMenu from '../navMenu';

interface ModalProps {
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {  
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal();
      }
    };
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
    
  return (
    <div className='fixed w-full h-full inset-0 flex items-center justify-center bg-[rgba(1,10,5,0.75)]  backdrop-blur z-500'>
      <div className='p-4 rounded shadow-lg'>
        <div>
          <button className='absolute top-11 right-5' type='button' onClick={toggleModal}>CLOSE</button>          
          <NavMenu toggleModal={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;