import React, { useState } from 'react';

import '../Styles/PopUp.css';

import FormulariPopUp from './FormularioPopUp';

const PopUp = () => {

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;
      
        return (
          <div className="modal-overlay">
            <div className="modal">
              <span className="modal-close" onClick={onClose}>
                &times;
              </span>
              <div className="modal-content">{children}</div>
            </div>
          </div>
        );
      };

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <button className='button-susb' onClick={openModal}>Subscribe</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Subscribe to your We Run</h2>
        <FormulariPopUp/>
      </Modal>
    </div>
  );
}

export default PopUp;