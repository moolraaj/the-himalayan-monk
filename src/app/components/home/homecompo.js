import React from 'react'
import Herosection from './components/herosection'
import TourList from './components/tourList'
import TourPackages from './components/TourPackages'
import CallToaction from '../calltoaction/callToaction'
import Tabs from './components/activities'
import AboutUs from './components/aboutus'
import Testimonials from './components/testimonial'


function Homepage() {
  return (
    <>
  
  <div className="home_section section_first"><Herosection/></div>
  <div className="home_section section_second"><TourList/></div>
  <div className="home_section section_third"><CallToaction /></div>
  <div className="home_section section_fourth"><TourPackages /></div>
  <div className="home_section section_fifth"><Tabs/></div>
  <div className="home_section section_sixth"><AboutUs/></div>
  <div className="home_section section_seventh"><Testimonials/></div>
    </>
  )
}

export default Homepage
