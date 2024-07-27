'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import vector from '../../../assets/headerAssets/Vector.png'
import { emptyImage, header_car } from '@/app/assets/images';
import Link from 'next/link';




function Topbar() {
  return (

    <>
      <div className='custom_navbar'>
        <div className='top_bar_details_inner_s'>
          <div className='top_bar_mail'>
            <img src={vector.src ||emptyImage.src} alt='demo' width={20}
            onError={(e) => e.target.src = emptyImage.src}/>
            <a href='mailto:thmholidays@gmail.com'>thmholidays@gmail.com</a>
          </div>

          <div className='top_bar_notifications'>
            <span><p>New Launches</p>Jodhpur, Rishikesh, Jaipur, Mcleodganj & Mcleodganj & Amiritsar <img style={{marginLeft: '5px'}} src={header_car.src} alt={header_car} /></span>
          </div>

          <div className='top_bar_social_icons'>
            <ul className='social_icons_t'>
              <li> <FontAwesomeIcon icon={faFacebook} /></li>
              <li> <FontAwesomeIcon icon={faTwitter} /></li>
              <li><Link href={`https://www.instagram.com/thm_holidays`} target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link></li>
              <li> <FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
          </div>


        </div>
      </div>
    </>
  )
}

export default Topbar