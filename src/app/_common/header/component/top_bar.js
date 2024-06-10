import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import vector from '../../../assets/headerAssets/Vector.png'




function Topbar() {
  return (

    <>
      <div className='custom_navbar'>
        <div className='top_bar_details_inner_s'>
          <div className='top_bar_mail'>
            <img src={vector.src} alt='demo' width={20}/>
            <a href='mailto:thehimalayanmonks@gmail.com'>thehimalayanmonks@gmail.com</a>
          </div>

          <div className='top_bar_notifications'>
            <span><p>New Launches</p>Jodhpur, Rishikesh, Jaipur, Mcleodganj & Mcleodganj & Amiritsa</span>
          </div>

          <div className='top_bar_social_icons'>
            <ul className='social_icons_t'>
              <li> <FontAwesomeIcon icon={faFacebook} /></li>
              <li> <FontAwesomeIcon icon={faTwitter} /></li>
              <li> <FontAwesomeIcon icon={faInstagram} /></li>
              <li> <FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
          </div>


        </div>
      </div>
    </>
  )
}

export default Topbar