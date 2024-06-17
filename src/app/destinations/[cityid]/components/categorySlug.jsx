import React from 'react'
import LocationBanner from './locationBanner'
import TourPackages from './locationPackages'
import { ExportAllApis } from '@/utils/apis/apis'

function CategorySlug({id}) {
 

 


  return (
    <>
    
        
        <LocationBanner id={id}/>
        <TourPackages id={id}/>



    </>
  )
}

export default CategorySlug