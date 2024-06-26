
'use client'
import React, { useEffect, useState } from 'react';

import airplane from '../../../assets/homepageAssets/airplane.gif';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import emptyImage from '../../../assets/empty.jpg'

import ActivityLocation from './activityLocation';

async function ActivitiesPackages({ id }) {
  let api = ExportAllApis()

  let [result, setResult] = useState([])

  const LoadCityWiseActivities = async () => {
    let resp = await api.fetchCityBasedActivities(id)
    setResult(resp?.data || null)
  }

  useEffect(() => {
    LoadCityWiseActivities()
  }, [])


  return (
    <>
      <div className="activity_top_banner_wrapper">
        {/* <div className="activity_inner_page_banner">
        <img src={galleryleh.src} alt={galleryleh.src} />
      </div> */}
        <ActivityLocation id={id} />
      </div>
      <div className="container all_tour_packages">
        <h2 className="title">All Tour Packages</h2>
        <div className="tour-packages">
          {result===null? 'no tour packages availble': result?.map((tour) => (

            <div key={tour.id} className="tour-package">
              <Link href={`/activites/${tour.city_id}/${tour.id}/${tour.key}`}>
                <div className="tour-image">
                  <img src={tour.pdf_image || emptyImage.src} alt='tour-image' />
                </div>
                <div className="tour-content">
                  <div className="tour-details">
                    <div className='tour_nights_days'>
                      <span className="tour-days">{tour.days} /</span>
                      <span className="tour-nights">{tour.nights}</span>
                    </div>
                    <div className="tour-rating">
                      <span className="rating">{tour.rating}</span>
                      <span className="reviews">{tour.reviews}</span>
                    </div>
                  </div>
                  <div className="tour-title">{tour?.package_name}</div>
                  <div className="tour-price">
                    <span className="price">Rs {tour?.pakage_starting_cost}</span>
                    <span className="price-details">INR-8700 Per Person</span>
                  </div>
                  <button className="book-button">Book A Tour<img src={airplane.src} alt="demo" style={{ width: '28px' }} /></button>
                </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </>


  );
};

export default ActivitiesPackages;