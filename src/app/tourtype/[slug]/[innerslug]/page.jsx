import DestinationBanner from '@/app/components/headertitlesection/bannersection'
import BookTourForm from '@/app/destinations/[cityid]/[id]/component/formRightSide'
import TravelPackage from '@/app/destinations/[cityid]/[id]/component/packagesInnerLeftSection'
import React from 'react'

function page({params}) {
    let {innerslug}=params
  return (
     <>
     <div className="destination_inner_page_wrapper">
        <DestinationBanner innerid={innerslug}  />
        <div className='left_section_inner_package'>
          <TravelPackage innerid={innerslug}  />
          <BookTourForm />
        </div>
      </div>
     </>
  )
}

export default page

