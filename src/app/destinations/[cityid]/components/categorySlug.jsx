import React from 'react'
import LocationBanner from './locationBanner'
import TourPackages from './locationPackages'


function CategorySlug({id}) {
 

 


  return (
    <>
    
        
        <LocationBanner id={id}/>
        <TourPackages id={id}/>



    </>
  )
}

export default CategorySlug