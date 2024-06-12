'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/headerAssets/logo.png'
import call from '../../assets/homepageAssets/call.png'
import tele from '../../assets/homepageAssets/tele.png'
import empty from '../../assets/empty.jpg'
import { ExportAllApis } from '@/utils/apis/apis'
import Link from 'next/link'

function SliderForm({ closeRightMenu, isShow }) {
  let api = ExportAllApis()
  let [data, setData] = useState([])
  let [showAll, setShowAll] = useState(false)

  let loadAllDestinations = async () => {
    let resp = await api.fetchAlldestinations()
    setData(resp)
  }

  useEffect(() => {
    loadAllDestinations()
  }, [])

  return (
    <>
      <div className={`form-container ${isShow ? 'show' : ''}`} >
        <div className="container">
          <div className="header">
            <img src={logo.src} alt="logo" />
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
            {
              (showAll ? data : data.slice(0, 2))?.map((ele, index) => {
                return (
                  <Link href={`/destinations/${ele.city_id}`} key={index}>
                    <div className="destination">
                      <img src={ele.image || empty.src} alt={`${ele.name}` || "Rajasthan"} width={150} height={100} />
                      <div className="destination-text">
                        <h3><span>Travel to</span> {ele.name}</h3>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          <button className={showAll?'all-destinations':'view-all-button'} onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Hide all' : 'View all'}
          </button>
          <div className="contact-info">
            <div className='two_name_email'>
              <div className='more_enquiry'>
                <img src={call.src} />
                <span>
                  <p>To More Inquiry</p>
                  <a href='tel:9816788165'>+98167 88165</a>
                </span>
              </div>
              <div className='more_enquiry'>
                <img src={tele.src} />
                <span>
                  <p>Enquiry</p>
                  <a href='mailto:thehimalayanmonks@gmail.com'>thehimalayanmonks@gmail.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderForm
