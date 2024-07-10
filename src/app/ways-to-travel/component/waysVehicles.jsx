'use client'
import { airplane, save_price } from '@/app/assets/images'
import PopupWrapper from '@/app/components/book-now/popupWrapper';
import car from '../../assets/homepageAssets/car.gif'
import React, { useState } from 'react'

function WaysVehicles({ vehicles }) {
    let [isShow, setIsShow] = useState(false);  

    const popupTourBook=()=>{
        setIsShow(true)
    }
    return (
        <>
        <PopupWrapper isShow={isShow} setIsShow={setIsShow}/>   
            <div className="vehicles_outer">
                <div className="vehicles_inner">
                    <div className="container all_tour_packages">
                        <div className="vehicles_wrapper tour-packages">
                            {
                               vehicles===null? 'no vehicles availble' : vehicles?.map((ele, index) => {
                                    return <div key={index} className='vehicles'>
                                        <div key={ele.id} className="tour-package">
                                        <div className="ways_travel_image">
                                        <div className="save_value">
                                                <img src={save_price.src} alt={save_price.src} />
                                                <p> Save INR  {ele.saving_cost}</p>
                                            </div>
                                            <div className="tour-image">
                                            
                                            <img src={ele.image} alt={ele.name} />
                                            </div>
                                            </div>
                                            <div className="tour-content">
                                                <div className="tour-details">
                                                    {/* <div className='tour_nights_days'>
                                                        <span className="tour-days">{ele.days} Days  </span>
                                                        <span className="tour-nights">{ele.night} Nights </span>
                                                    </div>
                                                    <div className="tour-rating">
                                                        <span className="rating">★{ele.rating}</span>
                                                        <span className="reviews">{ele.reviews}</span>
                                                    </div> */}
                                                </div>
                                                <div className="travel_by">
                                                <p>Travel {ele.travel_by}</p>
                                                </div>
                                              
                                                
                                                <div className="tour-price">
                                                    <span className="price">Rs {ele.starting_cost}</span>
                                                    <span className="price-details"> <span className="cut-txt">INR ${ele.starting_cost} </span>  <span className="without-cut-txt">\  Per Person </span></span>
                                                </div>
                                                <button className="book-button" onClick={popupTourBook}>Book A Tour<img src={car.src} alt="demo" style={{ width: '33px' }} /></button>
                                            </div>
                                        </div>
                                    </div>


                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaysVehicles
