import React from 'react'
import LocationBanner from './locationBanner'
import TourPackages from './locationPackages'

function CategorySlug({category}) {
  return (
    <>
    
        
        <LocationBanner category={category}/>
        <TourPackages category={category}/>



    </>
  )
}

export default CategorySlug