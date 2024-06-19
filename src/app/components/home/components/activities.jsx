
'use client'
import React, { useState } from 'react';
import { lining, jumping, rafting, paragliding, ski, surfing, kulluTour, manaliTour, mandiTour, shimlaTour, spitiTour, lahaulTour, kangraTour } from '@/app/assets/images';

const activities = [
  {
    name: 'Zip lining',
    icon: lining,
    title: 'Thrill Above Ground: The Zip Line Adventure',
    description: 'Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.',
    features: ['Treetop Views', 'Adrenaline Rush', 'Safety Measures'],
    image: lining.src,
    tab_activity_images: {
      tabImg1: kulluTour.src,
      tabImg2: manaliTour.src,
      tabImg3: mandiTour.src,
    }
  },
  {
    name: 'Bungee Jumping',
    icon: jumping,
    title: 'Leap of Faith: The Bungee Jumping Experience',
    description: 'Experience the ultimate adrenaline rush with a thrilling bungee jump. Feel the free-fall and rebound, and conquer your fears with this exhilarating activity.',
    features: ['Free-Fall Experience', 'Safety Harnesses', 'Expert Guides'],
    image: jumping.src,
    tab_activity_images: {
      tabImg1: shimlaTour.src,
      tabImg2: spitiTour.src,
      tabImg3: lahaulTour.src,
    }
  },
  {
    name: 'Rafting',
    icon: rafting,
    title: 'Ride the Rapids: The Rafting Adventure',
    description: 'Navigate through roaring rapids and enjoy a thrilling white-water rafting experience. Perfect for adventure seekers and nature lovers alike.',
    features: ['Exciting Rapids', 'Safety Gear', 'Experienced Guides'],
    image: rafting.src,
    tab_activity_images: {
      tabImg1: kangraTour.src,
      tabImg2: manaliTour.src,
      tabImg3: mandiTour.src,
    }
  },
  {
    name: 'Paragliding',
    icon: paragliding,
    title: 'Soar the Skies: The Paragliding Adventure',
    description: 'Soar high above scenic landscapes and enjoy the serene thrill of paragliding. A must-try for those seeking a peaceful yet exhilarating experience.',
    features: ['Scenic Views', 'Professional Instructors', 'Safety Equipment'],
    image: paragliding.src,
    tab_activity_images: {
      tabImg1: shimlaTour.src,
      tabImg2: spitiTour.src,
      tabImg3: lahaulTour.src,
    }
  },
  {
    name: 'Ski Touring',
    icon: ski,
    title: 'Explore the Slopes: The Ski Touring Adventure',
    description: 'Experience the thrill of skiing across untouched snow and exploring beautiful alpine terrains. Perfect for those who love winter sports and adventure.',
    features: ['Beautiful Slopes', 'Safety Gear', 'Expert Guides'],
    image: ski.src,
    tab_activity_images: {
      tabImg1: kulluTour.src,
      tabImg2: manaliTour.src,
      tabImg3: mandiTour.src,
    }
  },
  {
    name: 'Surfing',
    icon: surfing,
    title: 'Ride the Waves: The Surfing Adventure',
    description: 'Catch the perfect wave and enjoy the ultimate surfing experience. Ideal for both beginners and seasoned surfers looking to ride the waves.',
    features: ['Perfect Waves', 'Surfing Lessons', 'Safety Measures'],
    image: surfing.src,
    tab_activity_images: {
      tabImg1: shimlaTour.src,
      tabImg2: spitiTour.src,
      tabImg3: lahaulTour.src,
    }
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='activities_new'>
      <div className="tabs-container activities_home">
        <div className="tabs">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <img src={activity.icon.src} alt={`${activity.name} icon`} style={{ width: '100%' }} />
              <span>{activity.name}</span>
            </div>
          ))}
        </div>
        <div className="tab_content_wrapp">
          <div className={`tab-content ${activeTab === 0 ? '' : 'active'}`}>
            <div className='activity_featured'>
              <h2 className='name_tab'>{activities[activeTab].name}</h2>
              <h2>{activities[activeTab].title}</h2>
              <p>{activities[activeTab].description}</p>
              <ul>
                {activities[activeTab].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Check Availability</button>
            </div>
            <div className="images">
              {Object.values(activities[activeTab].tab_activity_images).map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Additional ${activities[activeTab].name} ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
