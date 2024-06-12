import React from 'react';
import galleryleh from '../../assets/homepageAssets/destinationleh.png'; 
import Image from 'next/image';

const AboutTopbanner = () => {
  return (
    <div className="desti_top_banner">
      <div className="top_banner_Image">
        <Image src={galleryleh.src} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>About</h1>
      </div>
    </div>
  );
};

export default AboutTopbanner;