'use client'
import React from 'react'
import TourTypeSlug from './component/tourtypeSlug'

 


function page({params}) {
   
  let {slug}=params

   
   
  return (
    <>
    
    <TourTypeSlug slug={slug}/>
    </>
  )
}

export default page
