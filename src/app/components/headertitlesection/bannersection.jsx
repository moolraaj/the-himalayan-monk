import React from 'react';
import galleryleh from '../../assets/homepageAssets/destinationleh.png'; 

const DestinationBanner = () => {
  return (
    <div className="desti_top_banner">
      <div className="top_banner_img">
        <img src={galleryleh.src} alt="destinations" />
      </div>
      <div className="desti_top_heading">
        <h1>Destinations</h1>
      </div>
    </div>
  );
};

export default DestinationBanner;
