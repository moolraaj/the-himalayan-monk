'use client'
import React, { useEffect, useState } from 'react';
import { airplane, speedometer, location, emptyImage, rating } from '@/app/assets/images';
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PopupWrapper from '../../book-now/popupWrapper';
import StarRating from './StarRating';
import backgrounds from '../../../assets/homepageAssets/moto.png'

function TourPackages({id}) {
  console.log(id)
  const router = useRouter();
  const api = ExportAllApis();

  const [result, setResult] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const popupAForm = (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    setIsShow(true);
  };

  const loadAllTourPackages = async () => {
    try {
      const resp = await api.fetchRelativetourTypes(id);
      setResult(resp?.data || []);
    } catch (error) {
      console.error('Failed to load tour packages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllTourPackages();
  }, []);

  let reverAllPackages=[...result].reverse()

  return (
    <>
      <PopupWrapper setIsShow={setIsShow} isShow={isShow} />

      <div className="TourPackages_outer_section" style={{ backgroundImage: `url(${backgrounds.src})` }}>
        <div className="TourPackages_inner">
          <div className={`tour_packages_wrapper ${loading ? 'loading' : ''}`}>
            {loading || reverAllPackages.length === 0 ? (
              <EmptyComponent />
            ) : (
              reverAllPackages===null? <EmptyComponent/> : reverAllPackages.slice(0, 6).map((ele) => (
                <div className="tour_package" key={ele.id}>
                  <Link href={`/tours/${ele.id}`}>
                    <div className="tour_package_inner">
                      <div className="tour_img_wrapper">
                        <img src={ele.pdf_image || emptyImage.src} alt={ele.package_name}  
                        onError={(e) => e.target.src = emptyImage.src} />
                        {/* <div className="tour_badge">{ele.days} Days</div> */}
                      </div>
                      <div className="tour_package_info">
                        <h2>{ele.package_name}</h2>
                        <span>
                          <img src={location.src} style={{ width: '25px' }} alt={ele.name} />
                          <p className="tour_location">{ele.city_name || "not availble"}</p>
                          
                        </span>
                        <p className="tourdescription">Loream Ipsum and inadksl</p>
                      </div>
                      <div className='tour_b_c'>
                        <div className="tour_rating_duration_section">
                          <div className="tour_details">
                            <div className="tour_ratings">
                              {/* <span> <img src={rating.src} alt={rating.src} style={{marginRight: '10px'}} />({ele.rating})</span> */}
                              
                              <span> <StarRating rating={ele.rating} /> ({ele.rating})</span>
                            </div>
                            <span className='speedometer'>
                              <img style={{ width: '35px' }} src={speedometer.src || emptyImage.src} alt={ele.name}  
                               onError={(e) => e.target.src = emptyImage.src}/>
                              {ele.days}days / {ele.night}nights
                            </span>
                          </div>
                        </div>
                        <div className="tour_price_book_section">
                          <span className='price_tour'><p>From</p>₹{ele.starting_cost}</span>
                          <button className="book_button" onClick={popupAForm}>
                            Book a Trip
                            <img src={airplane.src} alt={ele.name || emptyImage.src} style={{ width: '28px' }} 
                             onError={(e) => e.target.src = emptyImage.src}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
          <div className="view-all-packages">
            <button onClick={() => router.push('/tours')}>View All Packages</button>
          </div>
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
                <span className='speedometer'>
                Loading...
                </span>
              </div>
            </div>
            <div className="tour_price_book_section">
              <span className='price_tour'>Loading...</span>
              <button className="book_button">
                Loading...
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourPackages;
