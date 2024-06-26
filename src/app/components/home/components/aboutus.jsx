'use client'
import React from 'react';

import Image from 'next/image';
import { aboutone, abouttwo, calender, flag, medicine, spy } from '@/app/assets/images';


const AboutUs = () => {
  return (
    <div className="aboutus-container" id="about">
      <div className="aboutus-content">
        <div className="aboutus-images">
          <img className="one_image_c" src={aboutone.src} alt="About Us 1" style={{width:'100%'}}/>
          <img className="two_image_c" src={abouttwo.src} alt="About Us 2" style={{width:'100%'}}/>
        </div>
        
        <div className="aboutus-text">
          <h2>Its a huge world out there Come discover it with us</h2>
          <p>
            Band of Travelers is the story of our travels. The moments that moved us, people we met and the place where it takes place. Know us!
          </p>
          <div className="aboutus-features">
            <div className="feature">
              <img src={medicine.src} alt="Safety First Always" style={{width:'100%'}}/>
              <span>Safety First Always</span>
            </div>
            <div className="feature">
              <img src={calender.src} alt="Trusted Travel Guide"style={{width:'100%'}} />
              <span>Trusted Travel Guide</span>
            </div>
            <div className="feature">
              <img src={spy.src} alt="Time Stress Savings" style={{width:'100%'}}/>
              <span>Time Stress Savings</span>
            </div>
            <div className="feature">
              <img src={flag.src} alt="3.5K Tour Success" style={{width:'100%'}}/>
              <span>3.5K Tour Success</span>
            </div>
          </div>
          <button className="aboutus-button">More About</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
