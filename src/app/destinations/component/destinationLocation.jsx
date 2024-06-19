'use client';
import { ALL_DESTINATIONS_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import empty from '../../assets/empty.jpg';
import Paginations from '@/app/components/paginations/paginations';

function DPlaces() {
  let api = ExportAllApis();
  let [result, setResult] = useState([]);
  let [page, setPage] = useState(1);
  let [totalItems, setTotalItems] = useState(1);
  let [loading, setLoading] = useState(true);

  let loadAllDestinations = async (page) => {
    try {
      let response = await api.fetchAlldestinations(ALL_DESTINATIONS_PER_PAGE, page);
      setResult(response.data);
      setTotalItems(Math.ceil(response.totalCount / ALL_DESTINATIONS_PER_PAGE));
    } catch (error) {
      console.error('Failed to fetch destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadAllDestinations(page);
  }, [page]);

  return (
    <>
      <div className="places-container">
        {loading ? (
          <EmptyComponent />
        ) : (
          result.map((place, index) => (
            <Link href={`/destinations/${place.city_id}`} key={index}>
              <div className="place">
                <img src={place.image || empty.src} alt={place.name} />
                <div className="place-info">
                  <span className="name_location">
                    <h3>{place.name}</h3>
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <Paginations page={page} totalItems={totalItems} setPage={setPage} />
    </>
  );
}

function EmptyComponent() {
  return (
    <div className="places-container">
      {Array(ALL_DESTINATIONS_PER_PAGE).fill().map((_, index) => (
        <div className="place empty" key={index}>
          <div style={{maxWidth: '100%',width: '335px',height: '350px',borderRadius: "5px",background: '#ccc'}}>
            
          </div>
          <div className="place-info">
            <span className="name_location">
              <h3>Loading...</h3>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DPlaces;
