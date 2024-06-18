import React from 'react';
import Image from 'next/image';
import { ways_to_travel } from '@/app/assets/images';

const WaystoTravel = () => {
  return (
    <div className="desti_top_banner">
      <div className="top_banner_Image">
        <Image src={ways_to_travel.src} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>Ways to Travel</h1>
      </div>
    </div>
  );
};

export default WaystoTravel;