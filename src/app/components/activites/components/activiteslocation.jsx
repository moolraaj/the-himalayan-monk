 

'use client'
import { ALL_ACTIVITIES_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Paginations from '../../paginations/paginations';
import { emptyImage } from '@/app/assets/images';
 

 


 function APlaces () {
  let api=ExportAllApis()

  let [result,setResult]=useState([])
  let [page,setPage]=useState(1)
  let [totalItems,setTotalItems]=useState(1)


  const loadAllActivities=async()=>{
    let resp=await api.fetchAllActivities(ALL_ACTIVITIES_PER_PAGE,page)
    setResult(resp?.data || null)
    setTotalItems(Math.ceil(resp?.totalCount/ALL_ACTIVITIES_PER_PAGE || null))
  }

  useEffect(()=>{
    loadAllActivities(page)
  },[page])


 
 
  let reverAllactivities=[...result].reverse()
  
  return (
    <>
    
    <div className="places-container">
      {reverAllactivities===null? 'no activities data availble': reverAllactivities?.map(place => (
       
        <div key={place.id} className="place">
          
          <img src={place.pdf_image || emptyImage.src} alt={place.package_name} 
          onError={(e) => e.target.src = emptyImage.src}/>
          <div className="place-info">
            <div className='view-more-activity'> 
              <Link href={`/activities/${place.id}`}>
                <button className='book-now-activity'> View More</button>
              </Link>
            </div>
            {/* <p>{place.tour_location} Tour {place.tour_location > 1 ? 's' : ''}</p> */}
             <span className='name_location'>
            <h3>{place.package_name}</h3>
            </span>
          </div>
          
        </div>
 
        
      ))}
    </div>
    <Paginations page={page} totalItems={totalItems} setPage={setPage}/>
    </>
  );
};

export default APlaces;
