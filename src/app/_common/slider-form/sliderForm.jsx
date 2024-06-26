'use client'
import React, { useEffect, useState } from 'react'
import { ExportAllApis } from '@/utils/apis/apis'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { emptyImage, logo, call2, tele, adventure_tours, cultural_tour, group_tour, historical_tour, hnymoon_tour, luxury_tour } from '@/app/assets/images';

function SliderForm({ closeRightMenu, isShow, setIsShow }) {
  let router = useRouter()
  let api = ExportAllApis()
  let [result, setResult] = useState([])
  let [tourTypes, setTourTypes] = useState([
    { name: 'Adventure Tours', icon: adventure_tours.src },
    { name: 'Cultural Tours', icon: cultural_tour.src },
    { name: 'Group Tours', icon: group_tour.src },
    { name: 'Historical Tours', icon: historical_tour.src },
    { name: 'Honeymoon Tours', icon: hnymoon_tour.src },
    { name: 'Luxury Tours', icon: luxury_tour.src },
  ]);


  const GoToDestinatiosPages = () => {
    router.push('/destinations')
    setIsShow(false)
  }


  let loadAllDestinations = async () => {
    let resp = await api.fetchAlldestinations()
    setResult(resp?.data || [])
  }

  useEffect(() => {
    loadAllDestinations()
  }, [])

  let reverse=[...result].reverse()
  return (
    <>
      <div className={`form-container ${isShow ? 'show' : ''}`} >
        <div className="container">
          <div className="header">
            <img src={logo.src ||emptyImage.src} alt="logo" 
            onError={(e) => e.target.src = emptyImage.src}/>
            <button className="custom_close" onClick={closeRightMenu}>x</button>
          </div>
          <div className="slideform_content_outer">
            <h2 className="title">Tour Type</h2>
            <div className="tour-types">
              {tourTypes===null? 'no tours availble': tourTypes.map((tourType, index) => (
                <button key={index} className="tour-button">
                  <span className='tour_type_icon_wrapper'><img src={tourType.icon || emptyImage.src} alt={tourType.icon} style={{ width: '60px', height: "60px" }} 
                  onError={(e) => e.target.src = emptyImage.src}/></span>
                  <span>{tourType.name}</span>
                </button>
              ))}
            </div>
            <h2 className="title">Our Destinations</h2>
            <div className="destinations">
              {
               reverse===null? 'no destination found' : reverse?.slice(0, 2).map((ele, index) => {
                  return (
                    <Link href={`/destinations/${ele.city_id}`} key={index} onClick={GoToDestinatiosPages}>
                      <div className="destination">
                        <img src={ele.image || emptyImage.src} alt={`${ele.name}` || "Rajasthan"} width={150} height={100}
                        onError={(e) => e.target.src = emptyImage.src} />
                        <div className="destination-text">
                          <h3><span>Travel to</span> {ele.name}</h3>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
            <button className={'view-all-button'} onClick={GoToDestinatiosPages}>
              view all
            </button>
            <div className="contact-info">
              <div className='two_name_email'>
                <div className='more_enquiry'>
                  <img src={call2.src || emptyImage.src}  
                  onError={(e) => e.target.src = emptyImage.src}/>
                  <span>
                    <p>To More Inquiry</p>
                    <a href='tel:9816788165'>+98167 88165</a>
                  </span>
                </div>
                <div className='more_enquiry'>
                  <img src={tele.src || emptyImage.src} 
                  onError={(e) => e.target.src = emptyImage.src}/>
                  <span>
                    <p>Enquiry</p>
                    <a href='mailto:thehimalayanmonks@gmail.com'>thehimalayanmonks@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderForm