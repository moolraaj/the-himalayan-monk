const fetchAllDestinationsPackages = async () => {
  let data = await fetch(`http://localhost:4500/destinationInnerData`);
  let resp = await data.json();
  return resp;
};

import React from 'react';
// import leh from '../../../assets/homepageAssets/lehroad.png';
import airplane from '../../../assets/homepageAssets/airplane.gif';
import Link from 'next/link';





async function TourPackages  ({category}) {

  console.log(category)

  let data=await fetchAllDestinationsPackages()
  console.log(data)
  



  return (
    <div className="container all_tour_packages">
      <h2 className="title">All Tour Packages</h2>
      <div className="tour-packages">
        {data&&data.map((tour) => (
           
          <div key={tour.id} className="tour-package">
             <Link href={`/destinations/${category}/${tour.id}`}>
            <div className="tour-image">
              <img src={tour.image} alt='tour-image'  />
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
              <div className="tour-title">{tour.title}</div>
              <div className="tour-price">
                <span className="price">Rs {tour.price}</span>
                <span className="price-details">INR-8700 Per Person</span>
              </div>
              <button className="book-button">Book A Tour<img src={airplane.src} alt="demo" style={{width:'28px'}}/></button>
            </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
     
  );
};

export default TourPackages;