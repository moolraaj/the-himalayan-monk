'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leh from '../../../assets/homepageAssets/lehroad.png';
import { ExportAllApis } from '@/utils/apis/apis';



// Dynamically import react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false });



const images = [
  { src: leh.src, alt: 'Leh Ladakh' },
];



function LocationBanner({ id }) {
  let api = ExportAllApis()
  let [result, setResult] = useState([])
  let loadDestinations = async () => {
    let resp = await api.fetchFilterDestination(id)
    setResult(resp.data)
  }
  useEffect(() => {
    loadDestinations()
  }, [])



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };



  return (
    <div className="container slider_plus_details">
      <main className="main">
        <div className="hero">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', height: '500px' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  quality={80}

                />
              </div>
            ))}
          </Slider>
          <div className="overlay">
            <h3>Get up to <span>20% OFF</span> on<br /></h3>
            {result?.map((ele,index) => {
              return <div key={index}>
                <h1><span>{ele.package_name}</span> Tour Packages</h1>
                <h4><span>Starting at INR 67.05 </span>INR 29,804</h4>
                <button className="contactButton">Contact Us</button>
                <div className="ratings">
                  <div className='three_rating_with_icon'><span className='round_star custom_icon'>⭐</span> 4.0/5 <br />Review</div>
                  <div className='three_rating_with_icon'><span className='google_map custom_icon'>⭐ </span> 4.8/5 <br />Google</div>
                  <div className='three_rating_with_icon'><span className='google_map custom_icon'> ⭐ </span> 3.9/5 <br />Facebook</div>
                </div>

              </div>
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LocationBanner;
