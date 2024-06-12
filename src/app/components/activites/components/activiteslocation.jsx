 

import Link from 'next/link';
import React from 'react';
 
 

 


async function APlaces () {

  let result=[
    {
      "id": "1",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Lama Monastery",
      "tours": 5,
      "name": "Lama Monastery",
      "location": "Kangra"
    },
    {
      "id": "2",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Bijli Mahadev",
      "tours": 4,
      "name": "Bijli Mahadev",
      "location": "Kullu"
    },
    {
      "id": "3",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Main Bazar",
      "tours": 5,
      "name": "Main Bazar",
      "location": "Chamba"
    },
    {
      "id": "4",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Ridge",
      "tours": 3,
      "name": "Ridge",
      "location": "Shimla"
    },
    {
      "id": "5",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Parvati Valley",
      "tours": 5,
      "name": "Parvati Valley",
      "location": "Kasol"
    },
    {
      "id": "6",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Mini Switzerland",
      "tours": 5,
      "name": "Mini Switzerland",
      "location": "Kullu"
    },
    {
      "id": "7",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Christ Church",
      "tours": 5,
      "name": "Christ Church",
      "location": "Kasauli"
    },
    {
      "id": "8",
      "imgSrc": "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613",
      "altText": "Rang Mahal",
      "tours": 5,
      "name": "Rang Mahal",
      "location": "Kullu"
    }
  ]

 
  
  return (
    <div className="places-container">
      {result.map(place => (
       
        <div key={place.id} className="place">
          <Link href={`/activites/${place.id}`}>
          <img src={place.imgSrc} alt={place.altText} />
          <div className="place-info">
            <p>{place.tours} Tour{place.tours > 1 ? 's' : ''}</p>
             <span className='name_location'>
            <h3>{place.name}</h3>
            <h4>{place.location}</h4>
            </span>
          </div>
          </Link>
        </div>
 
        
      ))}
    </div>
    
  );
};

export default APlaces;
