import React from 'react'
import Modal from './Modal'
import { useState } from 'react';

const Model2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div>
    <h1>Modal Dialog Example</h1>
    <button onClick={openModal}>Open Modal</button>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2>Modal Content</h2>
      <p>This is the content inside the modal.</p>
    </Modal>

  </div>
  </>
  )
}

export default Model2