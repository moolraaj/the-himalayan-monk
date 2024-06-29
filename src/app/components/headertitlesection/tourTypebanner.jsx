import React from 'react'
import image  from '../../assets/herosection/hero_background.png'

function TourTypePageBanner() {
  return (
    <div className="desti_top_banner">
     
       <div className='banner-wrapper' >
          <div className="top_banner_Image">
        <img src={image.src} alt="destinations" width={100} height={100}/>
      </div>
      <div className="desti_top_heading">
        <h1>TourTypes</h1>
      </div>
        </div>

      
       
    </div>
  )
}

export default TourTypePageBanner
