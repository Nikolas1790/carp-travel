'use client'

import React, { useState } from 'react';
import Modal from './modal/modal';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    document.body.classList.toggle('modal-open');
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button type='button' onClick={toggleModal}>
        MENU
      </button>
      {isOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default BurgerMenu;