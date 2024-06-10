import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/headerAssets/logo.png';
import handshake from '../../../assets/headerAssets/handshake.png';
import himachal from '../../../assets/headerAssets/himachal.png';


import Link from 'next/link';
 
function FooterPage() {
    return (
        <>
            <div className="footer_outer">
                <div className="footer_inner">
                   

                    <div className="footer_wrapper_first">
                    <div className="footer_first_section">
                            
                    <div className="footer_logo_section">
                                <img src={logo.src} alt="site-logo" />
                            </div>
                            <div className="footer_hand-shake">
                                <div className="footer_svg">
                                    <img src={handshake.src} alt="demo" />
                                    <span>Tour With Monks</span>                                </div>                              

                            </div>
                            <div className="footer_shake_heading">
                                <img src={himachal.src} alt="demo" />
                                </div>
                            <div className="footer_copywrite_first">
                            <p>The Himalayan Monks. All Right Reserved.</p>
                        </div>

                        </div>
                        
                        
                    </div>

                    <div className="footer_wrapper_second">
                      <div className='footer_i'>

                        <div className="footer_second_section">
                            <h4>Contact Us</h4>
                            <ul className='footer_client_section'>
                                <li><a href="mailto:">demo@gmail.com</a></li>
                                <li><a href="tel:+8894229191">+91 8894229191</a></li>
                                <li><a href="tel:+8894229191">+91 9999999999</a></li>
                            </ul>
                        </div>

                        <div className="footer_second_third">
                            <h4>Destinations</h4>
                            <ul className='footer_client_section'>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>
                            </ul>
                        </div>



                        <div className="footer_second_fourth">
                            <h4>Other Links</h4>
                            <ul className='footer_client_section'>
                                <li><Link href="/about-us">about</Link> </li>
                                <li><Link href="/">services</Link> </li>
                                <li><Link href="/">terms and conditions</Link> </li>
                                <li><Link href="/contact-us">contact us</Link> </li>
                                
                            </ul>

                        </div>
                        </div>

                        <div className="footer_social_icons">
                            <div className='follow_name'>
                            <h4>Follow More Us :</h4>
                            <ul className='social_icons_t'>
                                <li><Link href='/'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                <li><Link href='/'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                <li><Link href='/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                <li><Link href='/'><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                            </ul>
                            </div>
                            <div className="footer_copywrite_second">
                            <p>Designed & Developed by: Eligo CS</p>
                        </div>
                        </div>
                       

                    </div>
                    
                    

                </div>
            </div>
        </>
    )
}

export default FooterPage
