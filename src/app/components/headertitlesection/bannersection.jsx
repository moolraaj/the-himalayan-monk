'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { ExportAllApis } from '@/utils/apis/apis';

const DestinationBanner = ({innerid ,innerkey }) => {

  let api=ExportAllApis()

  let [result,setResult]=useState([])


  const fetchBannerDetails=async()=>{
    let resp=await api.fetchSingledestination(innerid ,innerkey)
    setResult(resp)
  }


  useEffect(()=>{
    fetchBannerDetails()


  },[])

  return (
    <div className="desti_top_banner">
      {result?.map((ele)=>{
        return <div className='banner-wrapper' key={ele.id}>
          <div className="top_banner_Image">
        <Image src={ele.pdf_image} alt="destinations" width={100} height={100}/>
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
