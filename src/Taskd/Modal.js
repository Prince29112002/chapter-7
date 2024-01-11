import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalRoot] = useState(() => document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
