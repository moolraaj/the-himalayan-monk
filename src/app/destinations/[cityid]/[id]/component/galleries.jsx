'use client'
import React, { useState } from 'react'
import ImageModal from './imageModal';


function Galleries({ image }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    return (
        <>
            <div className='main-gallery-section'>
                <div className="gallery_inner">
                    <div className='gallery_all_img'>
                        {
                            image.slice(0, 5).map((e, index) => {
                                return <img src={e} onClick={() => openModal(e)} alt={index + 1} openModal={openModal} />
                            })
                        }
                    </div>
                </div>
            </div>




            <ImageModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                image={selectedImage}
            />



        </>
    )
}

export default Galleries
