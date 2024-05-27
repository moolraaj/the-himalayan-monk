import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
function FooterPage() {
    return (
        <>
            <div className="footer_outer">
                <div className="footer_inner">
                    <div className="footer_wrapper_first">
                        <div className="footer_first_section">


                            <div className="footer_logo_section">
                                <img src="" alt="site-logo" />
                            </div>
                            <div className="footer_hand-shake">
                                <div className="footer_svg">
                                    <img src="" alt="" />
                                </div>
                                <div className="footer_shake_heading">
                                    <h1>Tour With Travel</h1>
                                </div>

                            </div>

                        </div>

                        <div className="footer_second_section">
                            <h1>Contact Us</h1>
                            <ul className='footer_client_section'>
                                <li><a href="mailto:">demo@gmail.com</a></li>
                                <li><a href="tel:+8894229191">+91 8894229191</a></li>
                                <li><a href="tel:+8894229191">+91 9999999999</a></li>
                            </ul>

                        </div>

                        <div className="footer_second_third">
                            <h1>Destinations</h1>
                            <ul className='footer_client_section'>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>
                                <li><a href="/">home</a> </li>

                            </ul>

                        </div>



                        <div className="footer_second_fourth">
                            <h1>Other Links</h1>
                            <ul className='footer_client_section'>
                                <li><a href="/">about</a> </li>
                                <li><a href="/">services</a> </li>
                                <li><a href="/">terms and conditions</a> </li>
                                <li><a href="/">contact us</a> </li>

                            </ul>

                        </div>


                    </div>

                    <div className="footer_wrapper_second">
                        <div className="footer_copywrite_first">
                            <p>The Himalayan Monks. All Right Reserved.</p>
                        </div>
                        <div className="footer_social_icons">
                            <h1>Follow More Us :</h1>
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
        </>
    )
}

export default FooterPage
