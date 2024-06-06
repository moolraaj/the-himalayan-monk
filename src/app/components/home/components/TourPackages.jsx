 





import React from 'react';
import {airplane, speedometer ,location } from '@/app/assets/images';
 

 const loadAllTours=async()=>{
  let data=await fetch('http://localhost:4500/alltourspackages')
  let resp=await data.json()
  return resp
 }
 

async function TourPackages() {

  let result=await loadAllTours()
  
  return (
    <div className="TourPackages_outer_section">
      <div className="TourPackages_inner">
        <div className="tour_packages_wrapper">
          {result&&result?.map((ele) => (
            
            <div className="tour_package" key={ele.id}>
              <div className="tour_package_inner">
                <div className="tour_img_wrapper">
                  <img src={ele.img} alt={ele.name} />
                  <div className="tour_badge">{ele.tours} Tour</div>
                </div>
                <div className="tour_package_info">
                  <h2>{ele.name}</h2>
                  <p className="tour_description">{ele.description}</p>
                  <span> <img src={location.src} style={{ width: '25px' }} alt={ele.name}/> <p className="tour_location">{ele.location}</p></span>
                </div>

                <div  className='tour_b_c'>
                <div className="tour_rating_duration_section">
                <div className="tour_details">
                  <div className="tour_ratings">
                    <span>{ele.rating} ★ ({ele.reviews} reviews)</span>
                  </div>
                  
                    <span className='speedometer'><img style={{ width: '35px' }} src={speedometer.src} alt={ele.name}/>{ele.duration}</span>

                  </div>
                  
                </div>
                <div className="tour_price_book_section">
                <span className='price_tour'><p>From</p>{ele.price}</span>
                <button className="book_button">Book a Trip <img src={airplane.src} alt={ele.name} style={{ width: '28px' }}/></button>
                </div>
                </div>
              </div>
            </div>
          
          ))}
        </div>
      </div>
    </div>
   
  );
}

export default TourPackages;

