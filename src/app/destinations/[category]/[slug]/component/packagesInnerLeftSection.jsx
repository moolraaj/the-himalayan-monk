'use client'

import React, { useEffect, useState } from "react";
const loadInnerPage = async (id) => {
  let data = await fetch(`http://localhost:4500/innerPage?id=${id}`);
  let resp = await data.json();
  return resp;
};

function TravelPackage({ id }) {
  console.log(id)
  let [data, setData] = useState([]);
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (index) => {
    setActiveDay(activeDay === index ? null : index);
  };

  const fetchInner = async () => {
    let resp = await loadInnerPage(id);
    setData(resp);
  };

  useEffect(() => {
    fetchInner();
  }, []);

  return (
    <>
      <div className="package">
        {data.map((ele) => {
          return (
            <div className="package-wrapper" key={ele.id}>
              <div className="price-section">
                <span className="discounted-price">
                  <b>Rs {ele.price} </b>{" "}
                  <span className="original-price">Rs {ele.originalPrice}</span>{" "}
                  / Per Person
                </span>
              </div>
              <div className="details">
                <span>
                  <strong>Duration:</strong> {data.duration}
                </span>
                <span>
                  <strong>Max People:</strong> {data.maxPeople}
                </span>
              </div>
              <p className="description">{data.description}</p>
              <h2>Included</h2>
              <ul className="included-excluded">
                {ele.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2>Excluded</h2>
              <ul className="included-excluded">
                {ele.excluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2>Itinerary</h2>
              <div className="itinerary">
                {ele.itinerary.map((item, index) => (
                  <div key={index} className="day">
                    <div
                      className="day-header"
                      onClick={() => toggleDay(index)}>
                      <div className="desc_name">
                        <span className="days_item">{item.day} </span>
                        <p>
                          <strong>{item.activity}</strong>
                        </p>
                      </div>
                      <span>{activeDay === index ? "-" : "+"}</span>
                    </div>
                    {activeDay === index && (
                      <div className="day-activity">
                        <p>{item.description}</p>
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
