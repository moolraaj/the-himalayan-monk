import WaystoTravel from '@/app/components/headertitlesection/waystotravelbanner'
import star from '../../assets/homepageAssets/Star.png'
import travelone from '../../assets/homepageAssets/travel-1.png'
import travelthree from '../../assets/homepageAssets/travel-three.png'
import travelfour from '../../assets/homepageAssets/travel-four.png'
import travelfive from '../../assets/homepageAssets/travel-five.png'
import traveltwo from '../../assets/homepageAssets/travel-two.png'
import travelxuv from '../../assets/homepageAssets/xuv-travel.png'
import trvler from '../../assets/homepageAssets/travler.png'
import React from 'react'
import WaysVehicles from './waysVehicles';
import { ways_travel_page_bg } from '@/app/assets/images';

function WaysTravelPage() {
  
  const vehicles = [
    {
      id: 1,
      name: 'Bus',
      travel_by: 'Transport Delhi to Manali',
      image: travelone.src,
      starting_cost: '27.05',
      saving_cost:'6.57',
      days:'04',
      night: '03',
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 2,
      name: 'Car',
      travel_by: 'Delhi to Shimla',
      image: travelthree.src,
      starting_cost: '50.05',
      saving_cost:'6.057',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 3,
      name: 'Bus',
      travel_by: ' Shimla to Dharmshala',
      image: travelfour.src,
      starting_cost: '20.05',
      saving_cost:'3,43',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 4,
      name: 'Car',
      travel_by: 'Spiti to Leh',
      image: travelfive.src,
      starting_cost: '90.00',
      saving_cost:'5,43',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 5,
      name: 'Bus',
      travel_by: 'Shimla to Chandigarh',
      image: traveltwo.src,
      starting_cost: '10.00',
      saving_cost:'1.00',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 6,
      name: 'car',
      travel_by: 'Delhi to Spiti',
      image: travelxuv.src,
      starting_cost: '60.00',
      saving_cost:'2.70',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
    {
      id: 7,
      name: 'trvler',
      travel_by: 'Spiti to Leh',
      image: trvler.src,
      starting_cost: '70.00',
      saving_cost:'3.30',
      days:'02',
      night: '', // This is intentionally left empty to demonstrate conditional rendering
      rating: '5.0',
      reviews: '(0.6k)'
    },
  ];
  return (
    <>
 <div className="desti_outer">
        <div className="desti_inner">
          <div className="desti_wrapper">
            <div className="banner_section">
           <WaystoTravel/>
           </div>
           <div className="ways_travel_page_bg" style={{ backgroundImage: `url(${ways_travel_page_bg.src})` }}>
            <div className="testi_inner_wapper">
              <h3>Ways To Travel</h3>
              <h2>Ways to Travel with Exodus </h2>
              <p>We are the experts in small guided group adventure holidays, and our leadestarting_cost are carefully chosen to help you uncover the real nature of a destination. After all, that’s how we began over 40 yeastarting_cost ago. But our holidays are for everyone, no matter how you want to travel. We have a selection of self-guided adventures and also offer </p>
              <p>a private group service, creating bespoke trips and giving you total flexibility. Just as no two people are the same, no two holidays need be either. With so much of the world to explore and so many things to consider, the range of ways to travel with Exodus will ensure that your holiday is as unique as you are. Because for us, it’s pestarting_costonal</p>
              <p>In identifying the right holiday style for you, consider how you want to travel, and who with. In a group of like-minded travellestarting_cost, independently, or in your own private group with friends or family? And if you don’t see exactly what you want, let us know and we can help! See our private group adventures page for more information.</p>
            </div>
            <div className="waysvehicles_wrapper">
            <WaysVehicles vehicles={vehicles}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WaysTravelPage