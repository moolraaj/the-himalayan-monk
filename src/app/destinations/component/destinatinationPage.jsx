import Link from 'next/link'
import React from 'react'
import monastry from "../../assets/homepageAssets/monastry.png";

import DestinationBanner from '@/app/components/headertitlesection/bannersection';
import DPlaces from './destinationLocation';
import DestinationPageBanner from '@/app/components/headertitlesection/destinationPageBanner';
const placesData = [
    {
      id: 1,
      imgSrc: monastry,
      altText: "Lama Monastery",
      tours: 5,
      name: "Lama Monastery",
      location: "Kangra"
    },
    {
      id: 2,
      imgSrc: monastry,
      altText: "Bijli Mahadev",
      tours: 4,
      name: "Bijli Mahadev",
      location: "Kullu"
    },
    {
      id: 3,
      imgSrc: monastry,
      altText: "Main Bazar",
      tours: 5,
      name: "Main Bazar",
      location: "Chamba"
    },
    {
      id: 4,
      imgSrc: monastry,
      altText: "Ridge",
      tours: 3,
      name: "Ridge",
      location: "Shimla"
    },
    {
      id: 5,
      imgSrc: monastry,
      altText: "Parvati Valley",
      tours: 5,
      name: "Parvati Valley",
      location: "Kasol"
    },
    {
      id: 6,
      imgSrc: monastry,
      altText: "Mini Switzerland",
      tours: 5,
      name: "Mini Switzerland",
      location: "Kullu"
    },
    {
      id: 7,
      imgSrc: monastry,
      altText: "Christ Church",
      tours: 5,
      name: "Christ Church",
      location: "Kasauli"
    },
    {
      id: 8,
      imgSrc: monastry,
      altText: "Rang Mahal",
      tours: 5,
      name: "Rang Mahal",
      location: "Kullu"
    }
  ];


function DestinatinationPage() {
  return (
    <>
    
    <div className="desti_outer">
        <div className="desti_inner">
          <div className="desti_wrapper">
            <div className="banner_section">
          <DestinationPageBanner/>
           </div>
            <div className="testi_inner_wapper">
              <h3>Our Latest Destinations</h3>
              <h2>Come discover them with us.</h2>
              <p>If you have come this far it means that we share the same passion. We travel to discover new places, hear stories, live experiences and admire incredible natural landscapes. Our blog was born in 2024 to tell the story of our trips. Moments, people and places that marked our lives.</p>
              <p>Here you will find information, advice, routes and experiences about the latest destinations we have visited. Because when we are organizing a vacation and preparing our trip, we need information about destinations, flight reservations, which hotel to choose and, if possible, some advice to avoid possible surprises. We seek an experience that serves as a guide to the unknown.</p>
              <p>We hope to be able to help you with our articles with our experience, and thus do our part as a thank you for all the advice that we have acquired over the years from other travelers.</p>
            </div>
           
          </div>
        </div>
      </div>
     
    </>
  )
}

export default DestinatinationPage