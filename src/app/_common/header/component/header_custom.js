
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PopupForm from '../../destinationpopup/popupForm';
import SliderForm from '../../slider-form/sliderForm';
import { CloseMenu, logo, arrow, search, call, window, emptyImage } from '@/app/assets/images';
import SearchPackages from '../../SearchBar/SearchPackages';

function Headercustom() {
  const [isShow, setIsShow] = useState(false);
  const [ShowDestinations, setShowDestinations] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearch = () => {
    setIsSearchVisible(true);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  const NavigationLink = ({ href, children }) => (
    <Link href={href} className="nav-link" onClick={closeMobileMenu}>
      {children}
    </Link>
  );

  return (
    <>
      <SliderForm closeRightMenu={closeRightMenu} isShow={isShow} setIsShow={setIsShow} />
      <PopupForm ShowDestinations={ShowDestinations} closeDestinations={closeDestinations} setShowDestinations={setShowDestinations} />
      <SearchPackages closeSearch={closeSearch} isSearchVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible}/>
      <div className='header_custom_main'>
        <div className='header_i_sec'>
          <div className='logo_r_section'>
            <Link href={'/'}>
              <img src={logo.src || logo.src} alt="logo" 
              onError={(e) => e.target.src = logo.src}/>
            </Link>
          </div>

          <div className='navbar_c_section'>
            <ul className='desktop_menus'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about-us'>About Us</Link></li>
              <li><Link href='/destinations'>Destination</Link></li>
              <li><Link href='/activities'>Activities</Link></li>
              <li><Link href='/ways-to-travel'>Ways to Travel</Link></li>
            </ul>
            <span className='filter_destinations'>
              <img src={arrow.src || emptyImage.src} onClick={openDestinations} alt="arrow" 
              onError={(e) => e.target.src = emptyImage.src}/>
            </span>
          </div>

          <div className='enquiry_s_number'>
            <div className='search_e'>
              <img src={search.src || emptyImage.src} alt="search" onClick={openSearch} 
              onError={(e) => e.target.src = emptyImage.src}/>
              <div className="mobile_toggler_menu">
                <button className="toggle_navigation_menu" onClick={toggleMobileMenu} aria-label="toggle_navigation_menu">
                  <span className="nav-toggler-icon"></span>
                  <span className="nav-toggler-icon"></span>
                  <span className="nav-toggler-icon"></span>
                </button>
              </div>
              <img src={window.src || emptyImage.src} onClick={openRightMenu} alt="open menu" 
              onError={(e) => e.target.src = emptyImage.src}/>
            </div>
            <div className='header_number'>
              <div className='number_header_c'>
                <img src={call.src || emptyImage.src} style={{ width: 40 }} alt="call" 
                onError={(e) => e.target.src = emptyImage.src}/>
              </div>
              <div className='more_enquiery'>
                <p>For More Inquiry</p>
                <a className='tel_header_c' href='tel:+98167 88165'>+98167 88165</a>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen===null? 'no menu' : isMobileMenuOpen && (
          <div className={`mobile_menu ${isMobileMenuOpen ? 'mobile_menu_open' : ''}`}>
            <div className="mobile_menu_header">
              <img src={logo.src || emptyImage.src} alt="logo" className="mobile_menu_logo" 
              onError={(e) => e.target.src = emptyImage.src}/>
              <img src={CloseMenu.src} alt={CloseMenu.src || emptyImage.src} onClick={closeMobileMenu} className='mobile_close_menu' 
              onError={(e) => e.target.src = emptyImage.src}/>
            </div>
            <div className="mobile_menu_links">
              <div className="mobile_links">
                <NavigationLink href='/'>Home</NavigationLink>
              </div>
              <div className="mobile_links">
                <NavigationLink href='/about-us'>About Us</NavigationLink>
              </div>
              <div className="mobile_links">
                <NavigationLink href='/destinations'>Destination</NavigationLink>
              </div>
              <div className="mobile_links">
                <NavigationLink href='/activities'>Activities</NavigationLink>
              </div>
              <div className="mobile_links">
                <NavigationLink href='/ways-to-travel'>Ways to Travel</NavigationLink>
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
