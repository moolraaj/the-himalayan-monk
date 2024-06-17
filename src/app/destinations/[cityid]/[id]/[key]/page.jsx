import DestinationBanner from '@/app/components/headertitlesection/bannersection';
import React from 'react';
import BookTourForm from './component/formRightSide';
import TravelPackage from './component/packagesInnerLeftSection';

 

function Page({ params }) {
  let { id, key } = params;

  



   
   
  return (
    <>
      <DestinationBanner innerid={id} innerkey={key} />
      <div className='left_section_inner_package'>
        <TravelPackage innerid={id} innerkey={key} />
        <BookTourForm />
      </div>

     
    </>
  );
}

export default Page;

 
