
'use client'
import React, { useState } from 'react';
import search from '../../../assets/headerAssets/search.png';
import call from '../../../assets/headerAssets/call.png';
import window from '../../../assets/headerAssets/window.gif';
import Link from 'next/link';
import arrow from '../../../assets/headerAssets/megamenu.png.gif';
import PopupForm from '../../destinationpopup/popupForm';
import SliderForm from '../../slider-form/sliderForm';
import { CloseMenu, logo } from '@/app/assets/images';

function Headercustom() {
  const [isShow, setIsShow] = useState(false);
  const [ShowDestinations, setShowDestinations] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu=()=>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const NavigationLink = ({ href, children }) => (

    <Link href={href} className="nav-link" onClick={closeMobileMenu}>
      {children}
    </Link>


  );
  return (
    <>
      <SliderForm closeRightMenu={closeRightMenu} isShow={isShow} setIsShow={setIsShow} />
      <PopupForm ShowDestinations={ShowDestinations} closeDestinations={closeDestinations} setShowDestinations={setShowDestinations} />
      <div className='header_custom_main'>
        <div className='header_i_sec'>
          <div className='logo_r_section'>
            <Link href={'/'}>
            <img src={logo.src} alt="logo" />
            </Link>
          </div>

          <div className='navbar_c_section'>
            <ul className='desktop_menus'>
              <li><Link href='/'> Home</Link></li>
              <li><Link href='/about-us'> About Us</Link></li>
              <li><Link href='/destinations'> Destination</Link></li>
              <li><Link href='/activites'> Activities</Link></li>
              <li><Link href='/ways-to-travel'> Ways to Travel</Link></li>
            </ul>
            <span className='filter_destinations'>
              <img src={arrow.src} onClick={openDestinations} alt="arrow" />
            </span>
          </div>

          <div className='enquiry_s_number'>
            <div className='search_e'>
              <img src={search.src} alt="search" />
              <div className="mobile_toggler_menu">
                <button className="toggle_navigation_menu" onClick={toggleMobileMenu} aria-label="toggle_navigation_menu">
                  <span className="nav-toggler-icon"></span>
                  <span className="nav-toggler-icon"></span>
                  <span className="nav-toggler-icon"></span>
                </button>
              </div>
              <img src={window.src} onClick={openRightMenu} alt="open menu" />
            </div>
            <div className='header_number'>
              <div className='number_header_c'>
                <img src={call.src} style={{ width: 40 }} alt="call" />
              </div>
              <div className='more_enquiery'>
                <p>For More Inquiry</p>
                <a className='tel_header_c' href='tel:+98167 88165'>+98167 88165</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`mobile_menu ${isMobileMenuOpen ? 'mobile_menu_open' : ''}`}>
            <div className="mobile_menu_header">
              <img src={logo.src} alt="logo" className="mobile_menu_logo" />
              <img src={CloseMenu.src} alt={CloseMenu.src} onClick={closeMobileMenu} className='mobile_close_menu' />
            </div>
            <div className="mobile_menu_links">
              <div className="mobile_links">
              <NavigationLink href='/'>Home</NavigationLink>
              </div>
              <div className="mobile_links">
              <NavigationLink href='/about-us'> About Us</NavigationLink>
              </div>
              <div className="mobile_links">
              <NavigationLink href='/destinations'> Destination</NavigationLink>
              </div>
              <div className="mobile_links">
              <NavigationLink href='/activites'> Activities</NavigationLink>
              </div>
              <div className="mobile_links">
              <NavigationLink href='/ways-to-travel'> Ways to Travel</NavigationLink>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='margin_custom'></div>
    </>
  );
}

export default Headercustom;
