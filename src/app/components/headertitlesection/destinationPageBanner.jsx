import React from 'react'
import image  from '../../assets/herosection/destination-banner.png'

function DestinationPageBanner() {
  return (
    <div className="desti_top_banner">
     
       <div className='banner-wrapper' >
          <div className="top_banner_Image">
        <img src={image.src} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>destinations</h1>
      </div>
        </div>

      
       
    </div>
  )
}

export default DestinationPageBanner
