 

'use client'
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import empty from '../../../assets/empty.jpg' 
 

 


 function APlaces () {
  let api=ExportAllApis()

  let [result,setResult]=useState([])


  const loadAllActivities=async()=>{
    let resp=await api.fetchAllActivities()
    setResult(resp.data)
  }

  useEffect(()=>{
    loadAllActivities()
  },[])


 
 
 
  
  return (
    <div className="places-container">
      {result?.slice(0,9).map(place => (
       
        <div key={place.id} className="place">
          <Link href={`/activites/${place.city_id}`}>
          <img src={place.pdf_image || empty.src} alt={place.package_name} />
          <div className="place-info">
            <p>{place.tour_location} Tour {place.tour_location > 1 ? 's' : ''}</p>
             <span className='name_location'>
            <h3>{place.package_name}</h3>
            </span>
          </div>
          </Link>
        </div>
 
        
      ))}
    </div>
  );
};

export default APlaces;
