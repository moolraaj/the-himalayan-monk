'use client'
import React, { useEffect, useState } from "react";
import spedometer from '../../../../assets/homepageAssets/speedometer.png'
import people from '../../../../assets/homepageAssets/profile-max.png'
import testing from '../../../../assets/homepageAssets/abouteleven.png'
import ImageModal from './imageModal'; // Import the modal component
import { ExportAllApis } from "@/utils/apis/apis";

function TravelPackage({ innerid, setGalleryImages }) {
  console.log(innerid);

  let api = ExportAllApis();

  let [result, setResult] = useState([]);
  const [activeDay, setActiveDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleDay = (index) => {
    setActiveDay(activeDay === index ? null : index);
  };

  const loadSingleDestination = async () => {
    let resp = await api.fetchSingledestination(innerid);
    setResult(resp || null);

    // Collect gallery images
    const galleryImages = resp?.flatMap(ele => ele.gallery_images) || [];
    setGalleryImages(galleryImages);
  };

  useEffect(() => {
    loadSingleDestination();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="package">
        {result?.map((ele) => {
          return (
            <div className="package-wrapper" key={ele.id}>
              <div className="price-section">
                <span className="discounted-price">
                  <b>Rs {ele.pakage_discounted_cost || 0} </b>{" "}
                  <span className="original-price">Rs {ele.starting_cost || 0}</span>{" "}
                  / Per Person
                </span>
              </div>
              <div className="details">
                <span>
                  <img src={spedometer.src} style={{ width: '60px' }} />  {ele.days} Days
                </span>
                <span>
                  <img src={people.src} style={{ width: '35px' }} />  {ele.maxPeople}
                </span>
              </div>
              <p className="description" dangerouslySetInnerHTML={{ __html: ele.overview }}></p>
              <h2>Included</h2>
              <ul className="included-excluded">
                {ele.inc_meta === null || ele.inc_meta === false ? ('no data found') : (ele.inc_meta.map((item, index) => {
                  return <div key={index} className="inc-excl-wrapper">
                    <li>{item.tour_inc}</li>
                  </div>
                }
                ))}
              </ul>
              <h2>Excluded</h2>
              <ul className="included-excluded">
                {ele.exc_meta === null || ele.exc_meta === false ? ('no data found') : (ele.exc_meta?.map((item, index) => {
                  return <div key={index} className="inc-excl-wrapper">
                    <li>{item.tour_exc}</li>
                  </div>
                }
                ))}
              </ul>
              <h2>Itinerary</h2>
              <div className="itinerary">
                {ele?.daywise_meta === null ? 'no data found' : ele?.daywise_meta?.map((item, index) => (
                  <div key={index} className="day">
                    <div
                      className="day-header"
                      onClick={() => toggleDay(index)}>
                      <div className="desc_name">
                        <span className="days_item">Day {item.tour_day} </span>
                        <p>
                          <strong>{item.tour_name}</strong>
                        </p>
                      </div>
                      <span>{activeDay === index ? "-" : "+"}</span>
                    </div>
                    {activeDay === index && (
                      <div className="day-activity">
                        <p dangerouslySetInnerHTML={{ __html: item.tour_des || null }}></p>
                        {item.hot_des === null || item.hot_des === undefined || item.hot_des.length === 0 ? (null) : (
                          item.hot_des.map((e, index) => {
                            return <div className="day_wise_wrapper" key={index}>
                              <div className="day_wrap">
                                <div className="tour-image"><img src={e.attractionimage || testing.src} /></div>
                                <div className="tour-container"><span>{e.hot_des || 'no title found'}</span><div className="tour-content"><div className="tour-title">{e.description || null}</div></div></div>
                              </div>
                            </div>
                          })
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

           
            </div>
          );
        })}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default TravelPackage;
