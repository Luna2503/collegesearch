import React from 'react'

const Marklist = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="marklist" />
      </div>
    </div>
  );
};

export default Marklist