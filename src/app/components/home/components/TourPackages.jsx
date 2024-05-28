import React from 'react';
import { kulluTour, manaliTour, mandiTour, shimlaTour, spitiTour, lahaulTour, kangraTour, bunjeeJumping ,airplane, speedometer ,location } from '@/app/assets/images';

const tours = [
  {
    img: kulluTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹25,000.00",
    duration: "5 Days / 4 Nights",
    rating: 4.5,
    reviews: 10,
    tours: 5,
  },
  {
    img: manaliTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹28,000.00",
    duration: "5 Days / 4 Nights",
    rating: 4.0,
    reviews: 8,
    tours: 4,
  },
  {
    img: mandiTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹20,000.00",
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    reviews: 15,
    tours: 5,
  },
  {
    img: shimlaTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹30,000.00",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    reviews: 12,
    tours: 3,
  },
  {
    img: spitiTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹22,000.00",
    duration: "8 Days / 7 Nights",
    rating: 4.6,
    reviews: 9,
    tours: 5,
  },
  {
    img: lahaulTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹23,000.00",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 20,
    tours: 3,
  },
  {
    img: kangraTour.src,
    name: "Shimla to Manali",
    description: "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
    location: "Spiti, Himachal Pradesh, India",
    price: "₹27,000.00",
    duration: "8 Days / 7 Nights",
    rating: 4.3,
    reviews: 11,
    tours: 5,
  },
];

function TourPackages() {
  return (
    <div className="TourPackages_outer_section">
      <div className="TourPackages_inner">
        <div className="tour_packages_wrapper">
          {tours.map((tour, index) => (
            <div className="tour_package" key={index}>
              <div className="tour_package_inner">
                <div className="tour_image_wrapper">
                  <img src={tour.img} alt={tour.name} />
                  <div className="tour_badge">{tour.tours} Tour</div>
                </div>
                <div className="tour_package_info">
                  <h2>{tour.name}</h2>
                  <p className="tour_description">{tour.description}</p>
                  <span> <img src={location.src} style={{ width: '25px' }} /> <p className="tour_location">{tour.location}</p></span>
                </div>

                <div  className='tour_b_c'>
                <div className="tour_rating_duration_section">
                <div className="tour_details">
                  <div className="tour_ratings">
                    <span>{tour.rating} ★ ({tour.reviews} reviews)</span>
                  </div>
                  
                    <span className='speedometer'><img style={{ width: '35px' }}src={speedometer.src}/>{tour.duration}</span>

                  </div>
                  
                </div>
                <div className="tour_price_book_section">
                <span className='price_tour'><p>From</p>{tour.price}</span>
                <button className="book_button">Book a Trip <img src={airplane.src} alt="" style={{ width: '28px' }}/></button>
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
