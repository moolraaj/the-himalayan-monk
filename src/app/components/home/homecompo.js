
import React from 'react';
import Herosection from './components/herosection';
import TourList from './components/tourList';
import TourPackages from './components/TourPackages';
import CallToaction from '../calltoaction/callToaction';
import Tabs from './components/activities';
import AboutUs from './components/aboutus';
import Testimonials from './components/testimonial';
import { section_fifth_bg, section_fourth_bg, section_second_bg, section_sixth_bg } from '@/app/assets/images';

function Homepage() {
  return (
    <>
      <div className="home_section section_first"><Herosection /></div>

      <div className="home_section section_second" style={{ backgroundImage: `url(${section_second_bg.src})` }}>
        <TourList />
      </div>

      <div className="home_section section_third"><CallToaction /></div>

      <div className="home_section section_fourth" style={{ backgroundImage: `url(${section_fourth_bg.src})` }}>
        <TourPackages />
      </div>

      <div className="home_section section_fifth" style={{ backgroundImage: `url(${section_fifth_bg.src})` }}>
        <Tabs />
      </div>

      <div className="home_section section_sixth" style={{ backgroundImage: `url(${section_sixth_bg.src})` }}>
        <AboutUs />
      </div>

      <div className="home_section section_seventh"><Testimonials /></div>
    </>
  );
}

export default Homepage;
