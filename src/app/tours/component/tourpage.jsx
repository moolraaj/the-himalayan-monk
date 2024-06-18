




'use client'
import React, { useEffect, useState } from 'react';
import { airplane, speedometer, location } from '@/app/assets/images';
import { ALL_TOUSR_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import Paginations from '@/app/components/paginations/paginations';
import PopupWrapper from '@/app/components/book-now/popupWrapper';






function TourPackagesPage() {

  let api = ExportAllApis()

  let [result, setResult] = useState([])
  let [page, setPage] = useState(1)
  let [totalItems, setTotalItems] = useState(1)
  let [isShow, setIsShow] = useState(false);


  const popupAForm = () => {
    setIsShow(true);
  };

  

  const loadAllTourPackages = async (page) => {
    let resp = await api.fetchTourPackages(ALL_TOUSR_PER_PAGE, page)
    setResult(resp.data)
    setTotalItems(Math.ceil(resp.totalCount / ALL_TOUSR_PER_PAGE))
  }

  useEffect(() => {
    loadAllTourPackages(page)
  }, [page])

  



  return (
    <>
   <PopupWrapper setIsShow={setIsShow} isShow={isShow}/>


      <div className="TourPackages_outer_section">
        <div className="TourPackages_inner">
          <div className="tour_packages_wrapper">
            {result && result?.map((ele) => (

              <div className="tour_package" key={ele.id}>
                <Link href={`/tours/${ele.id}/${ele.key}`}>
                  <div className="tour_package_inner">
                    <div className="tour_img_wrapper">
                      <img src={ele.pdf_image} alt={ele.package_name} />
                      <div className="tour_badge">{ele.days} Days</div>
                    </div>
                    <div className="tour_package_info">
                      <h2>{ele.package_name}</h2>
                      {/* <p className="tour_description">{ele.description}</p>
                <span> <img src={location.src} style={{ width: '25px' }} alt={ele.name}/> <p className="tour_location">{ele.location}</p></span> */}
                    </div>

                    <div className='tour_b_c'>
                      <div className="tour_rating_duration_section">
                        <div className="tour_details">
                          <div className="tour_ratings">
                            <span>{ele.rating} ★ ({ele.reviews} reviews)</span>
                          </div>

                          <span className='speedometer'><img style={{ width: '35px' }} src={speedometer.src} alt={ele.name} />{ele.days}days / {ele.night}nights</span>

                        </div>

                      </div>
                      <div className="tour_price_book_section">
                        <span className='price_tour'><p>Price</p>₹{ele.starting_cost}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                        <button className="book_button" onClick={popupAForm}>Book a Trip  <img src={airplane.src} alt={ele.name} style={{ width: '28px' }} /></button>
              </div>

            ))}

          </div>

         <Paginations page={page} totalItems={totalItems} setPage={setPage}/>

        </div>
      </div>

    </>
  );
}

export default TourPackagesPage;

