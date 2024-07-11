'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExportAllApis } from '@/utils/apis/apis';
import { emptyImage, leh } from '@/app/assets/images';
import Link from 'next/link';

// Dynamically import react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false });

function LocationBanner({ id }) {
  let api = ExportAllApis();
  let [result, setResult] = useState([]);
  let [currentSlide, setCurrentSlide] = useState(0);

  let loadDestinations = async () => {
    let resp = await api.fetchFilterDestination(id);
    setResult(resp?.data || null);
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  console.log(result)

  return (
    <div className="container slider_plus_details">
      <main className="main">
        <div className="hero destination_hero_slider_wrapper">
          <Slider {...settings}>
            {result===null? emptyImage.src : result?.map((image, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', height: '500px' }}>
                <img
                  src={image.relative_desti_img || leh.src}
                  alt={image.pdf_image || leh.src}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => e.target.src = emptyImage.src}
                />
              </div>
            ))}
          </Slider>

          {result===null? 'no destinations availble' : result.slice(0,1).map((ele,ind)=>{
            return(
              <>
              <div className="overlay">
              <h3>Get up to <span>{result[currentSlide].starting_cost-result[currentSlide].discount || '0%'} OFF</span> on<br /></h3>
              <div className='overlay_banner_content'>
                <h1><span>{result[currentSlide].package_name}</span> Tour Packages</h1>
                <br />
                <button className="contactButton" style={{marginTop: '20px'}}><Link href={`/contact-us`}>
                Contact Us</Link></button>
                <div className="ratings">
                  <div></div>
                  <div className='three_rating_with_icon'>
                    <span className='round_star custom_icon'>⭐</span> {ele?.rating} <br />Rating
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
              </>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default LocationBanner;
