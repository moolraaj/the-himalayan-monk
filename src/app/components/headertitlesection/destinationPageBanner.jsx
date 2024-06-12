import React from 'react'
import image  from '../../assets/herosection/hero_background.png'
import Image from 'next/image'
function DestinationPageBanner() {
  return (
    <div className="desti_top_banner">
     
       <div className='banner-wrapper' >
          <div className="top_banner_Image">
        <Image src={image} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>destinations</h1>
      </div>
        </div>

      
       
    </div>
  )
}

export default DestinationPageBanner
