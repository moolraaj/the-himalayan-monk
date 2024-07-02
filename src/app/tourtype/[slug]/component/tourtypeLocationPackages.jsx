'use client'

import React, { useEffect, useState } from 'react';
// import leh from '../../../assets/homepageAssets/lehroad.png';


import Link from 'next/link';
import { ALL_TOURTYPES_RELATIVE_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import { airplane, emptyImage, save_price } from '@/app/assets/images';
import Paginations from '@/app/components/paginations/paginations';





function TourTypePackages({ slug }) {

    let api = ExportAllApis()
    let [result, setResult] = useState([])
    let [page, setPage] = useState(1);
    let [totalItems, setTotalItems] = useState(1);
    const loadSingleDestination = async (slug, page) => {
        let resp = await api.fetchRelativetourTypes(slug, ALL_TOURTYPES_RELATIVE_PER_PAGE, page)
        setResult(resp?.data || null)
        setTotalItems(Math.ceil(resp?.totalCount / ALL_TOURTYPES_RELATIVE_PER_PAGE|| null))
    }

    useEffect(() => {
        loadSingleDestination(slug, page)
    }, [page])

    





    return (
        <div className="container all_tour_packages">
            <h2 className="title">All TourType Packages</h2>
            <div className="tour-packages">
                {result === null ? 'no packages availble' : result?.map((tour,index) => (

                    <div key={index} className="tour-package">
                        <Link href={`/tourtype/${slug}/${tour.id}`}>
                            <div className="ways_travel_image">
                                <div className="save_value">
                                    <img src={save_price.src} alt={save_price.src} />
                                    <p> save INR  {tour.starting_cost}</p>
                                </div>
                                <div className="tour-image">
                                    <img src={tour.pdf_image || emptyImage.src} alt='tour-image'
                                        onError={(e) => e.target.src = emptyImage.src} />
                                </div>
                            </div>
                            <div className="tour-content">
                                <div className="tour-details">
                                    <div className='tour_nights_days'>
                                        <span className="tour-days">{tour.days} Days / </span>
                                        <span className="tour-nights">{tour.night}Nights</span>
                                    </div>
                                    <div className="tour-rating">
                                        <span className="rating">{tour.rating}</span>
                                        {/* <span className="reviews">{tour.reviews}</span> */}
                                    </div>
                                </div>
                                <div className="tour-title">{tour.package_name}</div>
                                <div className="tour-price">
                                    <span className="price">Rs {tour.starting_cost}</span>
                                    <span className="price-details">INR - ${tour.starting_cost} Per Person</span>
                                </div>
                                <button className="book-button">Book A Tour<img src={airplane.src} alt="demo" style={{ width: '28px' }} /></button>
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
                <Paginations page={page} totalItems={totalItems} setPage={setPage} />
        </div>

    );
};

export default TourTypePackages;