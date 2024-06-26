'use client'
import React, { useState, useEffect } from "react";

import kullu from '../../assets/homepageAssets/kangra_tour.jpg';
import manali from '../../assets/homepageAssets/manali_tour.jpg';
import lahul from '../../assets/homepageAssets/lahaul_tour.jpg';
import Image from "next/image";
import { emptyImage } from "@/app/assets/images";

const images = [kullu, manali, lahul];

const CallSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="journy-image-container">
     
      {images===null? emptyImage.src: images.map((image, index) => (
        <div
          className={`call_slider_image ${index === currentIndex ? 'active' : ''}`}
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <img
            id={`slide-${index}`}
            src={image.src}
        
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CallSlider;
