'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/headerAssets/logo.png';
import handshake from '../../../assets/headerAssets/handshake.gif';
import himachal from '../../../assets/headerAssets/himachal.png';


import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { emptyImage } from '@/app/assets/images';

function FooterPage() {
    let api = ExportAllApis()
    let [result, setResult] = useState([])

    const loadAlldestinations = async () => {
        let resp = await api.fetchAlldestinations()
        setResult(resp?.data || [])
    }
    useEffect(() => {
        loadAlldestinations()
    }, [])
    return (
        <>
            <div className="footer_outer">
                <div className="footer_inner">


                    <div className="footer_wrapper_first">
                        <div className="footer_first_section">

                            <div className="footer_logo_section">
                                <Link href={`/`}>
                                <img src={logo.src || emptyImage.src} alt="site-logo" 
                                onError={(e) => e.target.src = emptyImage.src} />
                                </Link>
                            </div>
                            <div className="footer_hand-shake">
                                <div className="footer_svg">
                                    <img src={handshake.src || emptyImage.src} alt={handshake.src || emptyImage.src} 
                                    onError={(e) => e.target.src = emptyImage.src}/>
                                    <span>Tour With Monks</span>
                                    </div>

                            </div>
                            <div className="footer_shake_heading">
                                <img src={himachal.src || emptyImage.src} alt={himachal.src || emptyImage.src} 
                                onError={(e) => e.target.src = emptyImage.src}/>
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
                                    <li><a href="mailto:thehimalayanmonks@gmail.com">thehimalayanmonks@gmail.com</a></li>
                                    <li><a href="tel:+91 98167 88165">+91 98167 88165</a></li>
                                    {/* <li><a href="tel:+9999999999">+91 9999999999</a></li> */}
                                </ul>
                            </div>

                            <div className="footer_second_third">
                                <h4>Destinations</h4>
                                <ul className='footer_client_section'>
                                    {
                                       result===null? 'no destinations found' : result?.slice(0,6).map((ele, index) => {
                                            return <li key={index}>
                                                <Link href={`/destinations/${ele.city_id}`}>{ele?.name}</Link>
                                            </li>
                                        })
                                    }

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
