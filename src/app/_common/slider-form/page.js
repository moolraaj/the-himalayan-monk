
import React from 'react'
import logo from '../../assets/headerAssets/logo.png'
import call from '../../assets/homepageAssets/call.png'
import tele from '../../assets/homepageAssets/tele.png'
import manali from '../../assets/homepageAssets/manali_tour.jpg'




function SliderForm({closeRightMenu,isShow}) { 
  return (
    <>
  
    <div className={`form-container ${isShow ? 'show' : ''}`} >
 
      <div className="container">
      <div className="header">     
        <img src={logo.src} alt="logo"/>
        <button className="custom_close" onClick={closeRightMenu}>x</button>
      </div>
      <h2 className="title">Tour Type</h2>
      <div className="tour-types">
        <button className="tour-button">Adventure Tours</button>
        <button className="tour-button">Cultural Tours</button>
        <button className="tour-button">Group Tours</button>
        <button className="tour-button">Historical Tours</button>
        <button className="tour-button">Honeymoon Tours</button>
        <button className="tour-button">Luxury Tours</button>
      </div>
      <h2 className="title">Our Destinations</h2>
      <div className="destinations">
        <div className="destination">
          <img src={manali.src} alt="Rajasthan" width={150} height={100} />
          <div className="destination-text">
            <h3><span>Travel to</span> Rajasthan</h3>
            <p>5 Tours</p>
          </div>
        </div>
        <div className="destination">
          <img src={manali.src} alt="Shimla" width={150} height={100} />
          <div className="destination-text">
            <h3><span>Travel to</span> Shimla</h3>
            <p>2 Tours</p>
          </div>
        </div>
      </div>
      <button className="view-all-button">View all</button>
      <div className="contact-info">
     
        <div className='two_name_email'>
        <div className='more_enquiry'>   <img src={call.src}/><span><p>To More Inquiry</p><a href='tel:9816788165'>+98167 88165</a> </span></div>
        <div className='more_enquiry'> <img src={tele.src}/><span><p>Enquiry</p><a href='mailto:thehimalayanmonks@gmail.com'> thehimalayanmonks@gmail.com</a></span></div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}




export default SliderForm