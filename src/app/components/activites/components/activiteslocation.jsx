 

'use client'
import { ALL_ACTIVITIES_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import empty from '../../../assets/empty.jpg' 
import Paginations from '../../paginations/paginations';
 

 


 function APlaces () {
  let api=ExportAllApis()

  let [result,setResult]=useState([])
  let [page,setPage]=useState(1)
  let [totalItems,setTotalItems]=useState(1)


  const loadAllActivities=async()=>{
    let resp=await api.fetchAllActivities(ALL_ACTIVITIES_PER_PAGE,page)
    setResult(resp.data)
    setTotalItems(Math.ceil(resp.totalCount/ALL_ACTIVITIES_PER_PAGE))
  }

  useEffect(()=>{
    loadAllActivities(page)
  },[page])


 
 
 
  
  return (
    <>
    
    <div className="places-container">
      {result?.slice(0,9).map(place => (
       
        <div key={place.id} className="place">
          <Link href={`/activites/${place.city_id}`}>
          <img src={place.pdf_image || empty.src} alt={place.package_name} />
          <div className="place-info">
            <p>{place.tour_location} Tour {place.tour_location > 1 ? 's' : ''}</p>
             <span className='name_location'>
            <h3>{place.package_name}</h3>
            <h4>{place.tour_location}</h4>
            </span>
          </div>
          </Link>
        </div>
 
        
      ))}
    </div>
    <Paginations page={page} totalItems={totalItems} setPage={setPage}/>
    </>
  );
};

export default APlaces;
