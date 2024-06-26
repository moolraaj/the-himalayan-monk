'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { ExportAllApis } from '@/utils/apis/apis';
import { activities_banner } from '@/app/assets/images';

const DestinationBanner = ({innerid ,innerkey }) => {

  let api=ExportAllApis()

  let [result,setResult]=useState([])


  const fetchBannerDetails=async()=>{
    let resp=await api.fetchSingledestination(innerid ,innerkey)
    setResult(resp || null)
  }


  useEffect(()=>{
    fetchBannerDetails()


  },[])

  return (
    <div className="desti_top_banner">
      {result===null? '' : result?.map((ele)=>{
        return <div className='banner-wrapper' key={ele.id}>
          <div className="top_banner_Image">
        <Image src={ele.pdf_image || activities_banner.src} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>{ele.package_name}</h1>
      </div>
        </div>

      
      })}
    </div>
  );
};

export default DestinationBanner;
