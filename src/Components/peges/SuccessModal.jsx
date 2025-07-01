import React from 'react';
import Modal from 'react-modal';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Заказ успешно оформлен!</h2>
      <p>Спасибо за покупку. Мы свяжемся с вами в ближайшее время.</p>
      <button onClick={onClose}>Закрыть</button>
    </Modal>
  );
};

export default SuccessModal;