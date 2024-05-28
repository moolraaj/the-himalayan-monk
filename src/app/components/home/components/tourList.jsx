// components/TourList.js
import React from 'react';
import Image from 'next/image';
import { kulluTour, manaliTour, mandiTour, shimlaTour, spitiTour, lahaulTour, kangraTour } from '@/app/assets/images';

const tours = [
  { img: kulluTour.src, name: "Kullu", tours: 5 },
  { img: manaliTour.src, name: "Manali", tours: 4 },
  { img: mandiTour.src, name: "Mandi", tours: 5 },
  { img: shimlaTour.src, name: "Shimla", tours: 3 },
  { img: spitiTour.src, name: "Spiti", tours: 5 },
  { img: lahaulTour.src, name: "Lahaul", tours: 3 },
  { img: kangraTour.src, name: "Kangra", tours: 5 },
];

function TourList() {
  return (
    <div className="tourlist_outer_section">
      <div className="tourlist_inner">
        <div className="tour_destination_wrapper">
          {tours.map((tour, index) => (
            <div className="tour_destination" key={index}>
              <div className="tour_destination_inner">
                <div className="tour_destination_info">
                  <div className="tour_info_inner">
                    <div className="tour_info_left">
                      <p>Travel To</p>
                      <h2>{tour.name}</h2>
                    </div>
                    <div className="tour_info_right">
                      <h4>{tour.tours} Tour</h4>
                    </div>
                  </div>
                </div>
                <img src={tour.img} alt={tour.name} layout="fill" objectFit="cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourList;
