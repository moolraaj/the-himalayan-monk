'use client';
import { ExportAllApis } from '@/utils/apis/apis';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { emptyImage, kangraTour } from '@/app/assets/images';

function TourList() {
  let api = ExportAllApis();

  let [result, setResult] = useState([]);
  let [loading, setLoading] = useState(true);

  let loadAllDestinations = async () => {
    try {
      let resp = await api.fetchAllTredingdestinations();
      setResult(resp || []);
    } catch (error) {
      console.error('Failed to load destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllDestinations();
  }, []);

  let reverAlldestinations = [...result].reverse()
  console.log(reverAlldestinations)

  console.log(result)

  return (
    <div className="tourlist_outer_section">
      <div className="tourlist_inner">
        <div className={`tour_destination_wrapper ${loading ? 'loading' : ''}`}>
          {loading || reverAlldestinations.length === 0 ? (
            <EmptyComponent />
          ) : (
            reverAlldestinations.slice(0, 7).map((ele, index) => (
              <div className="tour_destination" key={index}>
                <Link href={`/destinations/${ele.city_id}`}>
                  <div className="tour_destination_inner">
                    <div className="tour_destination_info">
                      <div className="tour_info_inner">
                        <div className="tour_info_left">
                          <p>Travel to</p>
                          <h2>{ele.name}</h2>
                        </div>
                        <div className="tour_info_right ">
                          <h4 className="tour_badge_top">{ele.package_count || 0} Tours</h4>
                        </div>
                      </div>
                    </div>
                    <img
                      src={ele.main_image || kangraTour.src}
                      alt={ele.name}
                      onError={(e) => e.target.src = kangraTour.src}
                    />
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyComponent() {
  return (
    <>
      {Array(7).fill().map((_, index) => (
        <div className="tour_destination empty" key={index}>
          <div className="tour_destination_inner">
            <div className="tour_destination_info">
              <div className="tour_info_inner">
                <div className="tour_info_left">
                  <p>loading...</p>
                  <h2>Loading...</h2>
                </div>
                <div className="tour_info_right ">
                          <h4 className="tour_badge_top">loading...</h4>
                        </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourList;
