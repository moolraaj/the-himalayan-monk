'use client'

import React, { useEffect, useState } from 'react';
// import leh from '../../../assets/homepageAssets/lehroad.png';

 
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { airplane, emptyImage, save_price } from '@/app/assets/images';





function TourPackages({ id }) {

  let api = ExportAllApis()
  let [result, setResult] = useState([])
  const loadSingleDestination = async () => {
    let resp = await api.fetchFilterDestination(id)
    setResult(resp?.data || null)
  }

  useEffect(() => {
    loadSingleDestination()
  }, [])





  return (
    <div className="container all_tour_packages">
      <h2 className="title">All Tour Packages</h2>
      <div className="tour-packages">
        {result===null? 'no packages availble' : result?.map((tour) => (

          <div key={tour.id} className="tour-package">
            <Link href={`/destinations/${id}/${tour.id}`}>
              <div className="ways_travel_image">
                <div className="save_value">
                  <img src={save_price.src} alt={save_price.src} />
                  <p> save INR  {tour.starting_cost-tour.discount || null}</p>
                </div>
                <div className="tour-image">
                  <img src={tour.pdf_image || emptyImage.src} alt='tour-image' 
                  onError={(e) => e.target.src = emptyImage.src}/>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className='tour_nights_days'>
                    <span className="tour-days">{tour.days} Days / </span>
                    <span className="tour-nights">{tour.night}Nights</span>
                  </div>
                  <div className="tour-rating">
                    <span className="rating"> ★ {tour.rating}</span>
                    {/* <span className="reviews">{tour.reviews}</span> */}
                  </div>
                </div>
                <div className="tour-title">{tour.package_name}</div>
                <div className="tour-price">
                  <span className="price">Rs {tour.discount} </span>
                  <span className="price-details"> <span className="cut-txt"> Rs {tour.starting_cost}  </span> <span className="without-cut-txt"> Per Person </span> </span>
                </div>
                <button className="book-button">Book A Tour<img src={airplane.src} alt="demo" style={{ width: '28px' }} /></button>
              </div>
            </Link>
          </div>

        ))}
      </div>
    </div>

  );
};

export default TourPackages;