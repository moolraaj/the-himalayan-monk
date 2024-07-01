
import DestinationBanner from '@/app/components/headertitlesection/bannersection'
import BookTourForm from '@/app/destinations/[cityid]/[id]/component/formRightSide'
import TravelPackage from '@/app/destinations/[cityid]/[id]/component/packagesInnerLeftSection'
import React from 'react'

function page({ params }) {
  let { id } = params
  

 
  return (
    <>
      <DestinationBanner innerid={id} />
      <div className='left_section_inner_package'>

        <TravelPackage innerid={id}/>
        <BookTourForm />
      </div>

    </>
  )
}

export default page


