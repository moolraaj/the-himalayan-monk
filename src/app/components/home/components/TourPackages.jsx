'use client'
import React, { useEffect, useState } from 'react';
import { airplane, speedometer, location } from '@/app/assets/images';
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PopupWrapper from '../../book-now/popupWrapper';
import empty from '../../../assets/empty.jpg'
function TourPackages() {
  const router = useRouter();
  const api = ExportAllApis();

  const [result, setResult] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const popupAForm = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event from propagating to the Link
    setIsShow(true);
  };

  const loadAllTourPackages = async () => {
    try {
      const resp = await api.fetchTourPackages();
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

      <div className="TourPackages_outer_section">
        <div className="TourPackages_inner">
          <div className={`tour_packages_wrapper ${loading ? 'loading' : ''}`}>
            {loading || reverAllPackages.length === 0 ? (
              <EmptyComponent />
            ) : (
              reverAllPackages.slice(0, 6).map((ele) => (
                <div className="tour_package" key={ele.id}>
                  <Link href={`/tours/${ele.id}/${ele.key}`}>
                    <div className="tour_package_inner">
                      <div className="tour_img_wrapper">
                        <img src={ele.pdf_image || empty.src} alt={ele.package_name} />
                        <div className="tour_badge">{ele.days} Days</div>
                      </div>
                      <div className="tour_package_info">
                        <h2>{ele.package_name}</h2>
                        <span>
                          <img src={location.src} style={{ width: '25px' }} alt={ele.name} />
                          <p className="tour_location">{ele.tour_location || ele.package_name}</p>
                        </span>
                      </div>
                      <div className='tour_b_c'>
                        <div className="tour_rating_duration_section">
                          <div className="tour_details">
                            <div className="tour_ratings">
                              <span>{ele.rating} ★ ({ele.reviews} reviews)</span>
                            </div>
                            <span className='speedometer'>
                              <img style={{ width: '35px' }} src={speedometer.src} alt={ele.name} />
                              {ele.days}days / {ele.night}nights
                            </span>
                          </div>
                        </div>
                        <div className="tour_price_book_section">
                          <span className='price_tour'><p>Price</p>₹{ele.starting_cost}</span>
                          <button className="book_button" onClick={popupAForm}>
                            Book a Trip
                            <img src={airplane.src} alt={ele.name} style={{ width: '28px' }} />
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
            <button onClick={() => router.push('/tours')}>explore all</button>
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
              <div className="tour_badge">Loading...</div>
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
