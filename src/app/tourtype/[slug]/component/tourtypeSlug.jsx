import React from 'react'
import { destination_inner_page_bg } from '@/app/assets/images'
import TourTypePackages from './tourtypeLocationPackages'
import TourTypeLocationBanner from './toutTypeLocationBanner'


function TourTypeSlug({slug}) {
 

 


  return (
    <>
    
        
        <TourTypeLocationBanner slug={slug}/>
        <div className="destination_inner_page_bg" style={{ backgroundImage: `url(${destination_inner_page_bg.src})` }}>
        <TourTypePackages slug={slug}/>
        </div>
    </>
  )
}

export default TourTypeSlug