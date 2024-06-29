import React from 'react'
 
import TourPackages from './locationPackages'
import { destination_inner_page_bg } from '@/app/assets/images'
import TourLocationBanner from './tourtypeBanner'


function TourSlug({id}) {
 

 


  return (
    <>
    
        
        <TourLocationBanner id={id}/>
        <div className="destination_inner_page_bg" style={{ backgroundImage: `url(${destination_inner_page_bg.src})` }}>
        <TourPackages id={id}/>
        </div>
    </>
  )
}

export default TourSlug