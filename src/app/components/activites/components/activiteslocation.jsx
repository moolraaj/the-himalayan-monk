const loadActivitiesPlaces=async()=>{
  let resp=await fetch(`http://localhost:4500/activitiesPlacesData`)
  let data=await resp.json()
  return data
}

import Link from 'next/link';
import React from 'react';
 
 

 


async function APlaces () {

  let result=await loadActivitiesPlaces()
  
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
