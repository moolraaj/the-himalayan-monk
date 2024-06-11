'use client'
import React from 'react';

import aboutone from '../../assets/homepageAssets/tourist_view_1.jpg';
import abouttwo from '../../assets/homepageAssets/tourist_view_2.jpg';
import calender from '../../assets/homepageAssets/calendar.png';
import medicine from '../../assets/homepageAssets/medicine.png';
import spy from '../../assets/homepageAssets/spy.png';
import flag from '../../assets/homepageAssets/white-flag.png';

import Image from 'next/image';





const AboutTop = () => {
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

export default AboutTop;
