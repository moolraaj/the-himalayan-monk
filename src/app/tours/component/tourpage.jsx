
'use client'
import React, { useEffect, useState } from 'react';
import { airplane, speedometer, location, emptyImage, search_icon, previous_vector, next_vector } from '@/app/assets/images';
import { ALL_TOUSR_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import Paginations from '@/app/components/paginations/paginations';
import PopupWrapper from '@/app/components/book-now/popupWrapper';

function TourPackagesPage() {
  const api = ExportAllApis();

  const [originalData, setOriginalData] = useState([]); // To store original data
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [activeSelect, setActiveSelect] = useState('price');

  const [priceFilter, setPriceFilter] = useState('');
  const [tripTypeFilter, setTripTypeFilter] = useState('');
  const [tripNameFilter, setTripNameFilter] = useState('');

  // Function to load tour packages
  const loadAllTourPackages = async (page) => {
    let resp = await api.fetchTourPackages(ALL_TOUSR_PER_PAGE, page);
    setOriginalData(resp?.data || []);
    setResult(resp?.data || []);
    setTotalItems(Math.ceil(resp?.totalCount / ALL_TOUSR_PER_PAGE || 0));
  };

  // Effect to load tour packages initially and when page changes
  useEffect(() => {
    loadAllTourPackages(page);
  }, [page]);

  // Function to apply filters
  const applyFilters = () => {
    let filteredResult = [...originalData];

    // Apply trip type filter
    if (tripTypeFilter) {
      filteredResult = filteredResult.filter(item => item.package_name === tripTypeFilter);
    }

    // Apply trip name filter
    if (tripNameFilter === 'ascending') {
      filteredResult.sort((a, b) => a.package_name.localeCompare(b.package_name));
    } else if (tripNameFilter === 'descending') {
      filteredResult.sort((a, b) => b.package_name.localeCompare(a.package_name));
    }

    // Apply price filter
    if (priceFilter === 'low-to-high') {
      filteredResult.sort((a, b) => b.starting_cost - a.starting_cost);
    } else if (priceFilter === 'high-to-low') {
      filteredResult.sort((a, b) => a.starting_cost - b.starting_cost);
    }

    setResult(filteredResult);
  };

  // Function to handle search button click
  const handleSearch = () => {
    // Apply filters on the current result set
    applyFilters();
  };

  let  reversePackages=[...result].reverse()

  return (
    <>
      <PopupWrapper setIsShow={setIsShow} isShow={isShow} />

      <div className="filter_section">
        <div className="filter_section_inner">
          <div className="select_option_wrapper">
            <select
              value={priceFilter}
              onChange={(e) => {
                setPriceFilter(e.target.value);
                setActiveSelect('price');
              }}
              className={activeSelect === 'price' ? 'price_filter active' : 'price_filter'}
            >
              <option value="">Price</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
            <select
              value={tripTypeFilter}
              onChange={(e) => {
                setTripTypeFilter(e.target.value);
                setActiveSelect('tripType');
              }}
              className={activeSelect === 'tripType' ? 'tripType_filter active' : 'tripType_filter'}
            >
              <option value="">Trip Type</option>
              {originalData.map((ele, ind) => (
                <option key={ind} value={ele.package_name}>{ele.package_name}</option>
              ))}
            </select>
            <select
              value={tripNameFilter}
              onChange={(e) => {
                setTripNameFilter(e.target.value);
                setActiveSelect('tripName');
              }}
              className={activeSelect === 'tripName' ? 'tripName_filter active' : 'tripName_filter'}
            >
              <option value="">Trip Name</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className="search_btn_wrapper">
            <button onClick={handleSearch}><img src={search_icon.src} alt={search_icon.src} />Search Tour</button>
          </div>
        </div>
      </div>

      <div className="TourPackages_outer_section">
        <div className="TourPackages_inner">
          <div className="tour_packages_wrapper">
            {reversePackages.length === 0 ? (
              <EmptyComponent />
            ) : (
             reversePackages===null? <EmptyComponent/> : reversePackages.map((ele) => (
                <div className="tour_package" key={ele.id}>
                  <Link href={`/tours/${ele.id}`}>
                    <div className="tour_package_inner">
                      <div className="tour_img_wrapper">
                        <img src={ele?.pdf_image || emptyImage.src} alt={ele.package_name || emptyImage.src} 
                        onError={(e) => e.target.src = emptyImage.src}/>
                        {/* <div className="tour_badge">{ele.days} Days</div> */}
                      </div>
                      <div className="tour_package_info">
                        <h2>{ele.package_name}</h2>
                        <span>
                          <img src={location.src || emptyImage.src} style={{ width: '25px' }} alt={ele.name} 
                          onError={(e) => e.target.src = emptyImage.src}/>
                          <p className="tour_location">{ele.tour_location || "not availble"}</p>
                        </span>
                      </div>
                      <div className='tour_b_c'>
                        <div className="tour_rating_duration_section">
                          <div className="tour_details">
                            <div className="tour_ratings">
                              <span>{ele.rating} ★ ({ele.reviews} reviews)</span>
                            </div>
                            <span className='speedometer'>
                              <img style={{ width: '35px' }} src={speedometer.src || emptyImage.src} alt={ele.name} 
                              onError={(e) => e.target.src = emptyImage.src}/>
                              {ele.days}days / {ele.night}nights
                            </span>
                          </div>
                        </div>
                        <div className="tour_price_book_section">
                          <span className='price_tour'><p>Price</p>₹{ele.starting_cost}</span>
                          <button className="book_button" onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            setIsShow(true);
                          }}>
                            Book a Trip
                            <img src={airplane.src ||emptyImage.src} alt={ele.name} style={{ width: '28px' }}
                            onError={(e) => e.target.src = emptyImage.src} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>

          <Paginations page={page} totalItems={totalItems} setPage={setPage} />
        </div>
      </div>
    </>
  );
}

function EmptyComponent() {
  return (
    <>
      {Array(6).fill().map((_, index) => (
        <div className="tour_package empty" key={index}>
          <div className="tour_package_inner">
            <div className="tour_img_wrapper">
              {/* <div className="tour_badge">Loading...</div> */}
            </div>
            <div className="tour_package_info">
              <h2>Loading...</h2>
              <span>
                <p className="tour_location">Loading...</p>
              </span>
            </div>
          </div>
          <div className='tour_b_c'>
            <div className="tour_rating_duration_section">
              <div className="tour_details">
                <div className="tour_ratings">
                  <span>Loading...</span>
                </div>
                <span className='speedometer'>Loading...</span>
              </div>
            </div>
            <div className="tour_price_book_section">
              <span className='price_tour'>Loading...</span>
              <button className="book_button">Loading...</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourPackagesPage;

