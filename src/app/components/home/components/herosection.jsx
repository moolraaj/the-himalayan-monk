
'use client';
import React, { useEffect, useState } from 'react';
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import PopupWrapper from '../../book-now/popupWrapper';
import { activities_banner, emptyImage, heroimg, ways_to_travel } from '@/app/assets/images';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 

// Dynamically import react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false });

function Herosection() {
  const api = ExportAllApis();
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  let [currentSlide, setCurrentSlide] = useState(0);

  const openPopup = () => {
    setIsShow(true);
  };

  const bannerImages = [
    { img: heroimg.src },
    { img: ways_to_travel.src },
    { img: activities_banner.src }
  ];

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const response = await api.fetchAlldestinations();
        setDestinations(response.data || []);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      }
    };

    loadDestinations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % Math.ceil(destinations.length / 6));
    }, 2500);

    return () => clearInterval(interval);
  }, [destinations]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  let reverse=[...destinations].reverse()
  const renderDestinationGroups = () => {
    const groups = [];
    for (let i = 0; i < destinations.length; i += 4) {
      groups.push(
        <div className={`link-group`} key={i} style={{ display: currentIndex === Math.floor(i / 4) ? 'grid' : 'none' }}>
          {reverse===null? '' : reverse.slice(i, i + 4).map((destination, index) => (
            <Link href={`/destinations/${destination.city_id}`} key={destination.city_id || index}>
              <div className="hero_destination_outer">
                <h1>{destination?.name}</h1>
                <img
                  src={destination?.main_image||emptyImage.src}
                  alt="destination"
                  onError={(e) => e.target.src = emptyImage.src}
                />
              </div>
            </Link>
          ))}
        </div>
      );
    }
    return groups;
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < Math.ceil(destinations.length / 4); i++) {
      dots.push(
        <span
          key={i}
          className={`dot ${currentIndex === i ? 'active' : ''}`}
          onClick={() => handleDotClick(i)}
        ></span>
      );
    }
    return dots;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <PopupWrapper isShow={isShow} setIsShow={setIsShow} />
      <div className="hero_section_outer">
        <div className="slider_wrapper">
          <Slider {...sliderSettings}>
            {bannerImages===null?  heroimg.src : bannerImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.img || emptyImage.src}
                  alt={`Banner ${index}`}
                  style={{ width: '100%', height: '100%' }}
                  onError={(e) => e.target.src = emptyImage.src}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hero_section_inner">
          <div className="hero_wrapper">
            <div className="hero_left_section">
              <h1>
                Let’s Explore Your
                <span style={{ color: '#F69625' }}> Holiday</span> Trip.
              </h1>
              <p>
                This is the story of our travels. A travel blog with the moments that moved us, people we met and the
                destinations in which we lived these experiences. There is a huge world, come discover it with us!
              </p>
              <button type="button" onClick={openPopup}>Book a Trip</button>
            </div>
            <div className="hero_right_section">
              <div className="destination_slider">
                {renderDestinationGroups()}
              </div>
              <div className="dots_container">
                {renderDots()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
