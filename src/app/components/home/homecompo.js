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
  <Herosection/>
  <TourList/>
  <CallToaction />
  <TourPackages />

  <Tabs/>
  <AboutUs/>
  <Testimonials/>

    </>
  )
}

export default Homepage
