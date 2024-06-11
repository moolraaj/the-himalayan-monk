import DestinationBanner from '@/app/components/headertitlesection/bannersection';
import React from 'react';
import BookTourForm from './component/formRightSide';
import TravelPackage from './component/packagesInnerLeftSection';

const fetchAllDestinations = async () => {
  let data = await fetch(`http://localhost:4500/destinationInnerData`);
  let resp = await data.json();
  return resp;
};

function Page({ params }) {
  let { slug } = params;
  console.log(slug);
  return (
    <>
      <DestinationBanner />
      <div className='left_section_inner_package'>
        <TravelPackage id={slug} />
        <BookTourForm />
      </div>
    </>
  );
}

export default Page;

 
