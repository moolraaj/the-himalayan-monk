'use client'
import DestinationBanner from '@/app/components/headertitlesection/bannersection';
import React, { useState } from 'react';
import BookTourForm from './component/formRightSide';
import TravelPackage from './component/packagesInnerLeftSection';
import ImageModal from './component/imageModal'; 

function Page({ params }) {
  let { id } = params;

  const [galleryImages, setGalleryImages] = useState([]);
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
      <div className="destination_inner_page_wrapper">
        <DestinationBanner innerid={id} />
        <div className='left_section_inner_package'>
          <TravelPackage innerid={id} setGalleryImages={setGalleryImages} />
          <BookTourForm />
        </div>
        <div className='main-gallery-section'>
          <div className="gallery_inner">
            <div className="gallery_all_img">
              {galleryImages===null||galleryImages.length===0||galleryImages===undefined?('no gallery found'):(galleryImages.map((image, index) => (
                <img key={index} src={image} alt={`${index + 1}`} onClick={() => openModal(image)} style={{ cursor: 'pointer' }} />
              )))}
            </div>
          </div>
        </div>
    
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default Page;
