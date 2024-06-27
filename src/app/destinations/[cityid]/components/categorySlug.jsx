import React from 'react'
import LocationBanner from './locationBanner'
import TourPackages from './locationPackages'
import { destination_inner_page_bg } from '@/app/assets/images'


function CategorySlug({id}) {
 

 


  return (
    <>
    
        
        <LocationBanner id={id}/>
        <div className="destination_inner_page_bg" style={{ backgroundImage: `url(${destination_inner_page_bg.src})` }}>
        <TourPackages id={id}/>
        </div>
    </>
  )
}

export default CategorySlug