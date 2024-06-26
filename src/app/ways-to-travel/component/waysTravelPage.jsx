import WaystoTravel from '@/app/components/headertitlesection/waystotravelbanner'
 

 import React from 'react'
import WaysVehicles from './waysVehicles';
import { ways_travel_page_bg } from '@/app/assets/images';

function WaysTravelPage() {
  
  const vehicles = [
    {
      id: 1,
      name: 'Car',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 2,
      name: 'Motorcycle',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 3,
      name: 'Jeep',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 4,
      name: 'SUV',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 5,
      name: 'Truck',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 6,
      name: 'Convertible',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 7,
      name: 'Van',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 8,
      name: 'Coupe',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 9,
      name: 'Hatchback',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    },
    {
      id: 10,
      name: 'Minivan',
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80',
      starting_cost: '300'
    }
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