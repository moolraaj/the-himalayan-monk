'use client'
import React from 'react';

import about from '../../assets/homepageAssets/aboutimg.png'
import calender from '../../assets/homepageAssets/calendar.png';
import medicine from '../../assets/homepageAssets/medicine.png';
import spy from '../../assets/homepageAssets/spy.png';
import flag from '../../assets/homepageAssets/white-flag.png';

import Image from 'next/image';
import { about_page_bg, emptyImage } from '@/app/assets/images';





const AboutTop = () => {
  return (

    <div className="about_page_bg_section" style={{ backgroundImage: `url(${about_page_bg.src})` }}>
    <div className="aboutus-container" id="about">
      <div className="aboutus-content">
        <div className="aboutus-images">
          <img className="one_image_c" src={about.src || emptyImage.src} alt="About Us 1" style={{width:'100%'}}/>
        </div>


        <div className="aboutus-text">

          
          <h2>Its a huge world out there Come discover it with us</h2>
          <p>
            Band of Travelers is the story of our travels. The moments that moved us, people we met and the place where it takes place. Know us!
          </p>
          <div className="aboutus-features">
            <div className="feature">
              <img src={medicine.src || emptyImage.src} alt="Safety First Always" style={{width:'100%'}}/>
              <span>Safety First Always</span>
            </div>
            <div className="feature">
              <img src={calender.src || emptyImage.src} alt="Trusted Travel Guide"style={{width:'100%'}} />
              <span>Trusted Travel Guide</span>
            </div>
            <div className="feature">
              <img src={spy.src || emptyImage.src} alt="Time Stress Savings" style={{width:'100%'}}/>
              <span>Time Stress Savings</span>
            </div>
            <div className="feature">
              <img src={flag.src || emptyImage.src} alt="3.5K Tour Success" style={{width:'100%'}}/>
              <span>3.5K Tour Success</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutTop;
