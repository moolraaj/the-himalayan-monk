
'use client'
import { ExportAllApis } from '@/utils/apis/apis';
import React, { useEffect, useState } from 'react';
import empty from '../../../assets/empty.jpg';
import Link from 'next/link';

function TourList() {
  let api = ExportAllApis();

  let [result, setResult] = useState([]);
  let [loading, setLoading] = useState(true);

  let loadAllDestinations = async () => {
    let resp = await api.fetchAlldestinations();
    setResult(resp?.data || null);
    setLoading(false);
  };

  useEffect(() => {
    loadAllDestinations();
  }, []);

  return (
    <div className="tourlist_outer_section">
      <div className="tourlist_inner">
        <div className={`tour_destination_wrapper ${loading ? 'loading' : ''}`}>
          {loading && <EmptyComponent />}
          {result?.slice(0, 7)?.map((ele, index) => (
            <div className="tour_destination" key={index}>
              <Link href={`/destinations/${ele.city_id}`}>
                <div className="tour_destination_inner">
                  <div className="tour_destination_info">
                    <div className="tour_info_inner">
                      <div className="tour_info_left">
                        <h2>{ele.name}</h2>
                      </div>
                    </div>
                  </div>
                  <img src={ele.image || empty.src} alt={ele.name} />
                </div>
              </Link>
            </div>
          ))}
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
                  <h2>Loading...</h2>
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
