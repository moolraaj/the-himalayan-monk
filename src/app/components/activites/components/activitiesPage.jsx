import React from "react";
 
 
import APlaces from "./activiteslocation";
import DestinationBanner from "../../headertitlesection/bannersection";

function ActivitesPage() {
  return (
    <>
      <div className="desti_outer">
        <div className="desti_inner">
          <div className="desti_wrapper">
            <div className="banner_section">
           <DestinationBanner/>
           </div>
            <div className="testi_inner_wapper">
              <h3>Our Latest Activites</h3>
              <h2>Come discover them with us.</h2>
              <p>If you have come this far it means that we share the same passion. We travel to discover new places, hear stories, live experiences and admire incredible natural landscapes. Our blog was born in 2024 to tell the story of our trips. Moments, people and places that marked our lives.</p>
              <p>Here you will find information, advice, routes and experiences about the latest destinations we have visited. Because when we are organizing a vacation and preparing our trip, we need information about destinations, flight reservations, which hotel to choose and, if possible, some advice to avoid possible surprises. We seek an experience that serves as a guide to the unknown.</p>
              <p>We hope to be able to help you with our articles with our experience, and thus do our part as a thank you for all the advice that we have acquired over the years from other travelers.</p>
            </div>

            <APlaces/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivitesPage;
