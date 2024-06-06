// components/TourList.js
import React from 'react';
 
const loadAllTours=async()=>{
  let data=await fetch(`http://localhost:4500/tours`)
  let resp=await data.json()
  return resp
} 



async function TourList() {

  let result=await loadAllTours()
   
  return (
    <div className="tourlist_outer_section">
      <div className="tourlist_inner">
        <div className="tour_destination_wrapper">
          {result&&result.map((ele) => (
            <div className="tour_destination" key={ele.id}>
              <div className="tour_destination_inner">
                <div className="tour_destination_info">
                  <div className="tour_info_inner">
                    <div className="tour_info_left">
                      <p>Travel To</p>
                      <h2>{ele.name}</h2>
                    </div>
                    <div className="tour_info_right">
                      <h4>{ele.tours} Tour</h4>
                    </div>
                  </div>
                </div>
                <img src={ele.img} alt={ele.name} 
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourList;
