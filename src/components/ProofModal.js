// ProofModal.jsx
import React, { useEffect } from 'react';
import './ProofModal.css';

const ProofModal = ({ images, closeModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>×</button>
        <div className="image-scroll-container">
          {images.map((img, idx) => (
            <img src={img} alt={`Proof ${idx + 1}`} key={idx} className="proof-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofModal;
