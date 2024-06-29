'use client'

import { ExportAllApis } from "@/utils/apis/apis";
import React, { useEffect, useState } from "react";


function TravelPackage({ innerid }) {
  let api = ExportAllApis()


  let [result, setResult] = useState([]);
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (index) => {
    setActiveDay(activeDay === index ? null : index);
  };

  const fetchSingleDestination = async () => {
    let resp = await api.fetchSingledestination(innerid);
    setResult(resp || null);
  };

  useEffect(() => {
    fetchSingleDestination()
  }, []);
 



  return (
    <>
      <div className="package">
        {result?.map((ele) => {
          let daywise_meta = JSON.parse(ele.daywise_meta)
         
          return (
            <div className="package-wrapper" key={ele.id}>
              <div className="price-section">
                <span className="discounted-price">
                  <b>Rs {ele.pakage_discounted_cost} </b>{" "}
                  <span className="original-price">Rs {ele.starting_cost}</span>{" "}
                  / Per Person
                </span>
              </div>
              <div className="details">
                <span>
                  <strong>Duration:</strong> {ele.duration}
                </span>
                <span>
                  <strong>Max People:</strong> {ele.maxPeople}
                </span>
              </div>
              <p className="description">{ele.description}</p>
              <h2>Included</h2>
              <ul className="included-excluded">
                {ele.inc_meta===null?'no data found':ele.inc_meta.map((item, index) => {

                  return <div key={index} className="inc-excl-wrapper">
                    <li>{item.tour_inc}</li>
                  </div>
                }
                )}
              </ul>
              <h2>Excluded</h2>
              <ul className="included-excluded">
                {ele.exc_meta===null?'no data found':ele.exc_meta.map((item, index) => {

                  return <div key={index} className="inc-excl-wrapper">
                    <li>{item.tour_exc}</li>
                  </div>
                }
                )}
              </ul>
              <h2>Itinerary</h2>
              <div className="itinerary">
                {daywise_meta===null?'no data found':daywise_meta?.map((item, index) => (
                  <div key={index} className="day">
                    <div
                      className="day-header"
                      onClick={() => toggleDay(index)}>
                      <div className="desc_name">
                        <span className="days_item">{item.tour_day} </span>
                        <p>
                          <strong>{item.tour_name}</strong>
                        </p>
                      </div>
                      <span>{activeDay === index ? "-" : "+"}</span>
                    </div>
                    {activeDay === index && (
                      <div className="day-activity">
                        <span dangerouslySetInnerHTML={{__html:item.tour_des}}></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>


    </>
  );
}

export default TravelPackage;
