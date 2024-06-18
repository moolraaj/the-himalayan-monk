'use client'

import React, { useEffect, useState } from 'react';
// import leh from '../../../assets/homepageAssets/lehroad.png';
import airplane from '../../../assets/homepageAssets/airplane.gif';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';





function TourPackages({ id }) {

  let api = ExportAllApis()
  let [result, setResult] = useState([])
  const loadSingleDestination = async () => {
    let resp = await api.fetchFilterDestination(id)
    setResult(resp.data)
  }

  useEffect(() => {
    loadSingleDestination()
  }, [])





  return (
    <div className="container all_tour_packages">
      <h2 className="title">All Tour Packages</h2>
      <div className="tour-packages">
        {result?.map((tour) => (

          <div key={tour.id} className="tour-package">
            <Link href={`/destinations/${id}/${tour.id}/${tour.key}`}>
              <div className="tour-image">
                <img src={tour.pdf_image} alt='tour-image' />
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className='tour_nights_days'>
                    <span className="tour-days">{tour.days} Days / </span>
                    <span className="tour-nights">{tour.night}Nights</span>
                  </div>
                  <div className="tour-rating">
                    <span className="rating">{tour.rating}</span>
                    {/* <span className="reviews">{tour.reviews}</span> */}
                  </div>
                </div>
                <div className="tour-title">{tour.package_name}</div>
                <div className="tour-price">
                  <span className="price">Rs {tour.starting_cost}</span>
                  <span className="price-details">INR - ${tour.starting_cost} Per Person</span>
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