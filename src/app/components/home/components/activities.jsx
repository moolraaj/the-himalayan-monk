'use client'
import React, { useState } from 'react';
import lining from '../../../assets/homepageAssets/lining.png';
import jumping from '../../../assets/homepageAssets/Bungee_Jumping.png';
import rafting from '../../../assets/homepageAssets/Rafting.png';
import paragliding from '../../../assets/homepageAssets/Paragliding.png';
import ski from '../../../assets/homepageAssets/Ski_Touring.png';
import surfing from '../../../assets/homepageAssets/Surfing.png';

const activities = [
  {
    name: 'Zip lining',
    icon: lining, // Use imported image directly
    title: 'Thrill Above Ground: The Zip Line Adventure',
    description: 'Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.',
    features: ['Treetop Views', 'Adrenaline Rush', 'Safety Measures'],
    image: '/images/ziplining.jpg' // Replace with actual image path
  },
  {
    name: 'Bungee Jumping',
    icon: jumping,
    title: 'Leap of Faith: The Bungee Jumping Experience',
    description: 'Experience the ultimate adrenaline rush with a thrilling bungee jump. Feel the free-fall and rebound, and conquer your fears with this exhilarating activity.',
    features: ['Free-Fall Experience', 'Safety Harnesses', 'Expert Guides'],
    image: '/images/bungee-jumping.jpg'
  },
  {
    name: 'Rafting',
    icon: rafting,
    title: 'Ride the Rapids: The Rafting Adventure',
    description: 'Navigate through roaring rapids and enjoy a thrilling white-water rafting experience. Perfect for adventure seekers and nature lovers alike.',
    features: ['Exciting Rapids', 'Safety Gear', 'Experienced Guides'],
    image: '/images/rafting.jpg'
  },
  {
    name: 'Paragliding',
    icon: paragliding,
    title: 'Soar the Skies: The Paragliding Adventure',
    description: 'Soar high above scenic landscapes and enjoy the serene thrill of paragliding. A must-try for those seeking a peaceful yet exhilarating experience.',
    features: ['Scenic Views', 'Professional Instructors', 'Safety Equipment'],
    image: '/images/paragliding.jpg'
  },
  {
    name: 'Ski Touring',
    icon: ski,
    title: 'Explore the Slopes: The Ski Touring Adventure',
    description: 'Experience the thrill of skiing across untouched snow and exploring beautiful alpine terrains. Perfect for those who love winter sports and adventure.',
    features: ['Beautiful Slopes', 'Safety Gear', 'Expert Guides'],
    image: '/images/ski-touring.jpg'
  },
  {
    name: 'Surfing',
    icon: surfing,
    title: 'Ride the Waves: The Surfing Adventure',
    description: 'Catch the perfect wave and enjoy the ultimate surfing experience. Ideal for both beginners and seasoned surfers looking to ride the waves.',
    features: ['Perfect Waves', 'Surfing Lessons', 'Safety Measures'],
    image: '/images/surfing.jpg'
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='activities_new'>
      <div className="tabs-container activities_home">
        <div className="tabs">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <img src={activity.icon.src} alt={`${activity.name} icon`} />
              <span>{activity.name}</span>
            </div>
          ))}
        </div>
        <div className="tab-content">
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
            <img src={activities[activeTab].image} alt={activities[activeTab].name} />
            {/* Add more images if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
