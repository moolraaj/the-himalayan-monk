'use client'
import React, { useState } from 'react';
import search from '../../../assets/headerAssets/search.png';
import call from '../../../assets/headerAssets/call.png';
import logo from '../../../assets/headerAssets/logo.png';
import window from '../../../assets/headerAssets/window.gif';
import Link from 'next/link';
 
import arrow from '../../../assets/headerAssets/megamenu.png.gif'
import PopupForm from '../../destinationpopup/popupForm';
import SliderForm from '../../slider-form/sliderForm';
 
 

function Headercustom() {
  const [isShow, setIsShow] = useState(false);
  const [ShowDestinations, setShowDestinations] = useState(false);

  const openDestinations = () => {
    setShowDestinations(true);
  };

  const closeDestinations = () => {
    setShowDestinations(false);
  };

  const openRightMenu = () => {
    setIsShow(true);
  };

  const closeRightMenu = () => {
    setIsShow(false);
  };


  


  




  return (
    <>
      <SliderForm closeRightMenu={closeRightMenu} isShow={isShow}/>
      <PopupForm ShowDestinations={ShowDestinations} closeDestinations={closeDestinations} />
      <div className='header_custom_main'>
        <div className='header_i_sec'>
          <div className='logo_r_section'>
            <img src={logo.src} alt="logo"/>
          </div>

          <div className='navbar_c_section'>
            <ul>
              <li><Link href='/'> Home</Link></li>
              <li><Link href='/about-us'> About Us</Link></li>
              <li><Link href='/destinations'> Destination</Link></li>
              <li><Link href='/activites'> Activities</Link></li>
              <li><Link href='/ways-to-travel'> Ways to Travel</Link></li>
            </ul>
            <span>        <img src={arrow.src} onClick={openDestinations} alt="arrow" />
            </span>
          </div>

          <div className='enquiry_s_number'>
            <div className='search_e'>
              <img src={search.src} alt="search"/>
              <img src={window.src} onClick={openRightMenu} alt="open menu"/>
            </div>
            <div className='header_number'>
              <div className='number_header_c'>
                <img src={call.src} style={{width:40 }} alt="call"/>
              </div>
              <div className='more_enquiery'>
                <p>For More Inquiry</p>
                <a className='tel_header_c' href='tel:+98167 88165'>+98167 88165</a>
              </div>
            </div>
          </div>
        </div>      
      </div>
      <div className='margin_custom'></div>
    </>
  );
}

export default Headercustom;
