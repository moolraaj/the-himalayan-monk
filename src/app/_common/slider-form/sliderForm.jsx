'use client';
import React, { useEffect, useState } from 'react';
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { emptyImage, logo, call2, tele, slider_form_bg } from '@/app/assets/images';

 



function SliderForm({ closeRightMenu, isShow, setIsShow }) {
  const router = useRouter();
  const api = ExportAllApis();
  const [result, setResult] = useState([]);
  const [tourTypes, setTourTypes] = useState([]);

  const GoToDestinatiosPages = () => {
    router.push('/destinations');
    setIsShow(false);
  };

  const GoToTourTypePages = () => {
    router.push('/tourtype');
    setIsShow(false);
  };

  const closeTourTypeLink = () => {
    setIsShow(false);
  };

  const loadAllDestinations = async () => {
    const resp = await api.fetchAlldestinations();
    setResult(resp?.data || []);
  };

  const loadAllTourTypes = async () => {
    const resp = await api.fetchAlltourTypes();
    setTourTypes(resp?.data || []);
  };

  useEffect(() => {
    loadAllDestinations();
    loadAllTourTypes();
  }, []);

  const reverse = [...result].reverse();
  const reverseToursType = [...tourTypes].reverse();

  return (
    <>
      <div className={`form-container ${isShow ? 'show' : ''}`} style={{ backgroundImage: `url(${slider_form_bg.src})` }}>
        <div className="container">
          <div className="header">
            <img src={logo.src || emptyImage.src} alt="logo" onError={(e) => (e.target.src = emptyImage.src)} />
            <button className="custom_close" onClick={closeRightMenu}>x</button>
          </div>
          <div className="slideform_content_outer">
            <h2 className="title">Tour Type</h2>
            <div className="tour-types">
              {reverseToursType === null || reverseToursType === undefined ? (
                'No tours available'
              ) : (
                reverseToursType?.slice(0, 6).map((ele, index) => (
                  <Link key={index} href={`/tourtype/${ele.packageCateslug || 'no slug found'}`} className="tour-button" onClick={closeTourTypeLink}>
                    <span className="tour_type_icon_wrapper">
                      <img src={ele.banner_images || emptyImage.src} alt={ele.package_cat_name} style={{ width: '60px', height: '60px' }} onError={(e) => (e.target.src = emptyImage.src)} />
                    </span>
                    <span>{ele.package_cat_name || null}</span>
                  </Link>
                ))
              )}
            </div>
            <button className="view-all-button" onClick={GoToTourTypePages}>
              View All
            </button>
            <h2 className="title">Our Destinations</h2>
            <div className="destinations">
              {reverse === null
                ? 'No destination found'
                : reverse?.slice(0, 2).map((ele, index) => {
                    return (
                      <Link href={`/destinations/${ele.city_id}`} key={index} onClick={GoToDestinatiosPages}>
                        <div className="destination">
                          <div className="p_count">{`${ele.package_count} Tours` || ''}</div>
                          <img src={ele.main_image || emptyImage.src} alt={`${ele.name}` || 'Rajasthan'} width={150} height={100} onError={(e) => (e.target.src = emptyImage.src)} />
                          <div className="destination-text">
                            <h3>
                              <span>Travel to</span> {ele.name}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
            <button className="view-all-button" onClick={GoToDestinatiosPages}>
              View All
            </button>
            <div className="contact-info">
              <div className="two_name_email">
                <div className="more_enquiry">
                  <img src={call2.src || emptyImage.src} onError={(e) => (e.target.src = emptyImage.src)} />
                  <span>
                    <p>To More Inquiry</p>
                    <a href="tel:+91 82195-39025">+91 82195-39025</a>
                  </span>
                </div>
                <div className="more_enquiry">
                  <img src={tele.src || emptyImage.src} onError={(e) => (e.target.src = emptyImage.src)} />
                  <span>
                    <p>Enquiry</p>
                    <a href="mailto:thmholidays@gmail.com">thmholidays@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderForm;
