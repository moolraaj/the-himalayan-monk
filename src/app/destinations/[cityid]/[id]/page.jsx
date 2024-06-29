import DestinationBanner from '@/app/components/headertitlesection/bannersection';
import React from 'react';
import BookTourForm from './component/formRightSide';
import TravelPackage from './component/packagesInnerLeftSection';



function Page({ params }) {
  let { id } = params;







  return (
    <>

      <div className="destination_inner_page_wrapper">
        <DestinationBanner innerid={id}  />
        <div className='left_section_inner_package'>
          <TravelPackage innerid={id}  />
          <BookTourForm />
        </div>
      </div>

    </>
  );
}

export default Page;


