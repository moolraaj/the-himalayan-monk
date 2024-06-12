import DestinationBanner from '@/app/components/headertitlesection/bannersection'
import BookTourForm from '@/app/destinations/[cityid]/[id]/[key]/component/formRightSide'
import TravelPackage from '@/app/destinations/[cityid]/[id]/[key]/component/packagesInnerLeftSection'
import React from 'react'

function page({ params }) {
  let { id, key } = params
  return (
    <div>
      <DestinationBanner innerid={id} innerkey={key} />
      <div className='left_section_inner_package'>

      <TravelPackage innerid={id} innerkey={key} />
      <BookTourForm />
      </div>

    </div>
  )
}

export default page

