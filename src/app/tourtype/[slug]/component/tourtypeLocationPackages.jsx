'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ALL_TOURTYPES_RELATIVE_PER_PAGE, ExportAllApis, SET_LIMIT_FOR_PAGINATION } from '@/utils/apis/apis';

import Paginations from '@/app/components/paginations/paginations';
import airplane from '../../../assets/homepageAssets/airplane.gif'
import save_price from '../../../assets/homepageAssets/save_price.png'
import emptyImage from '../../../assets/empty.jpg' 
 

function TourTypePackages({ slug }) {
    const api = ExportAllApis();
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(1);

    const loadSingleDestination = async (slug, page) => {
        const resp = await api.fetchRelativetourTypes(slug, ALL_TOURTYPES_RELATIVE_PER_PAGE, page);
        setResult(resp?.data || []);
        setTotalItems(Math.ceil(resp?.totalCount / ALL_TOURTYPES_RELATIVE_PER_PAGE || 0));
    };

    useEffect(() => {
        loadSingleDestination(slug, page);
    }, [slug,page]);

     

    return (
        <div className="container all_tour_packages">
            <h2 className="title">All TourType Packages</h2>
            <div className="tour-packages">
                {result.length === 0 ? (
                    'No packages available'
                ) : (
                    result.map((tour, index) => (
                        <div key={index} className="tour-package">
                            <Link href={`/tourtype/${slug}/${tour.id}`}>
                                <div className="ways_travel_image">
                                    <div className="save_value">
                                        <img src={save_price.src} alt="Save price" />
                                        <p>Save INR {tour.starting_cost - tour.pakage_discounted_cost}</p></div>
                                    <div className="tour-image">
                                        <img
                                            src={tour.pdf_image || emptyImage.src}
                                            alt="tour-image"
                                            onError={(e) => (e.target.src = emptyImage.src)}
                                        />
                                    </div>
                                </div>
                                <div className="tour-content">
                                    <div className="tour-details">
                                        <div className="tour_nights_days">
                                            <span className="tour-days">{tour.days} Days / </span>
                                            <span className="tour-nights">{tour.night} Nights</span>
                                        </div>
                                        <div className="tour-rating">
                                            <span className="rating">{tour.rating}</span>
                                        </div>
                                    </div>
                                    <div className="tour-title">{tour.package_name}</div>
                                    <div className="tour-price">
                                        <span className="price">Rs {tour.starting_cost}</span>
                                        <span className="price-details"> INR - ${tour.pakage_discounted_cost}  Per Person</span>
                                    </div>
                                    <button className="book-button">
                                        Book A Tour
                                        <img src={airplane.src} alt="Airplane" style={{ width: '28px' }} />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
            {
                totalItems>SET_LIMIT_FOR_PAGINATION? (null): (<Paginations page={page} totalItems={totalItems} setPage={setPage} />)
            }
           
        </div>
    );
}

export default TourTypePackages;
