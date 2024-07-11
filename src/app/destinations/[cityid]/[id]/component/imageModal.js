import React from 'react';
import Modal from 'react-modal';



const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Preview"
            className="image-modal"
            overlayClassName="image-modal-overlay">
            <div className="image-modal-content">
                <button onClick={onRequestClose}>x</button>
                <img src={image} alt="Preview"/>
                
            </div>
        </Modal>
    );
};

export default ImageModal;
