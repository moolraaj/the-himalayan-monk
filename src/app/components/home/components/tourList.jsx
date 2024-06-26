'use client';
import { ExportAllApis } from '@/utils/apis/apis';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { emptyImage } from '@/app/assets/images';

function TourList() {
  let api = ExportAllApis();

  let [result, setResult] = useState([]);
  let [loading, setLoading] = useState(true);

  let loadAllDestinations = async () => {
    try {
      let resp = await api.fetchAlldestinations();
      setResult(resp?.data || []);
    } catch (error) {
      console.error('Failed to load destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllDestinations();
  }, []);

  return (
    <div className="tourlist_outer_section">
      <div className="tourlist_inner">
        <div className={`tour_destination_wrapper ${loading ? 'loading' : ''}`}>
          {loading || result.length === 0 ? (
            <EmptyComponent />
          ) : (
            result.slice(0, 7).map((ele, index) => (
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
                    <img
                      src={ele.image}
                      alt={ele.name}
                      onError={(e) => e.target.src = emptyImage.src}
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
