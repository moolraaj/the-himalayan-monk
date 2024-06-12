
  
  import React from 'react';
  
  import airplane from '../../../assets/homepageAssets/airplane.gif';
  import Link from 'next/link';
  
  
  
  
  
  async function ActivitiesPackages  ({id}) {



     let data=[
      {
        "id": "1",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹25,000.00",
        "duration": "5 Days / 4 Nights",
        "rating": 4.5,
        "reviews": 10,
        "tours": 5
      },
      {
        "id": "2",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹28,000.00",
        "duration": "5 Days / 4 Nights",
        "rating": 4,
        "reviews": 8,
        "tours": 4
      },
      {
        "id": "3",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹20,000.00",
        "duration": "8 Days / 7 Nights",
        "rating": 4.8,
        "reviews": 15,
        "tours": 5
      },
      {
        "id": "4",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹30,000.00",
        "duration": "5 Days / 4 Nights",
        "rating": 4.7,
        "reviews": 12,
        "tours": 3
      },
      {
        "id": "5",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹22,000.00",
        "duration": "8 Days / 7 Nights",
        "rating": 4.6,
        "reviews": 9,
        "tours": 5
      },
      {
        "id": "6",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹23,000.00",
        "duration": "5 Days / 4 Nights",
        "rating": 4.9,
        "reviews": 20,
        "tours": 3
      },
      {
        "id": "7",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹27,000.00",
        "duration": "8 Days / 7 Nights",
        "rating": 4.3,
        "reviews": 11,
        "tours": 5
      },
      {
        "id": "8",
        "img": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
        "name": "Shimla to Manali",
        "description": "Exceptional Circuit of Shimla, Manali and Lahaul - Spiti",
        "location": "Spiti, Himachal Pradesh, India",
        "price": "₹27,000.00",
        "duration": "8 Days / 7 Nights",
        "rating": 4.3,
        "reviews": 11,
        "tours": 5
      }
    ]
  
   
    
  
  
  
    return (
      <div className="container all_tour_packages">
        <h2 className="title">All Tour Packages</h2>
        <div className="tour-packages">
          {data&&data.map((tour) => (
             
            <div key={tour.id} className="tour-package">
               <Link href={`/activites/${id}/${tour.id}`}>
              <div className="tour-image">
                <img src={tour.img} alt='tour-image'  />
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
                <div className="tour-title">{tour.name}</div>
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
  
  export default ActivitiesPackages;