'use client';
import { ALL_DESTINATIONS_PER_PAGE, ExportAllApis, SET_LIMIT_FOR_PAGINATION } from '@/utils/apis/apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Paginations from '@/app/components/paginations/paginations';
import { emptyImage } from '@/app/assets/images';

function DPlaces() {
  let api = ExportAllApis();
  let [result, setResult] = useState([]);
  let [page, setPage] = useState(1);
  let [totalItems, setTotalItems] = useState(1);
  let [loading, setLoading] = useState(true);

  let loadAllDestinations = async (page) => {
    try {
      setLoading(true)
      let response = await api.fetchAlldestinations(ALL_DESTINATIONS_PER_PAGE, page);
      setResult(response?.data || null);
      setTotalItems(Math.ceil(response?.totalCount / ALL_DESTINATIONS_PER_PAGE || null));
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
  let reverAlldestinations=[...result].reverse()
   
  return (
    <>
      <div className="places-container">
        {
         reverAlldestinations===null?'No Desnations found': reverAlldestinations.map((place, index) => (
            <Link href={`/destinations/${place.city_id}`} key={index}>
              <div className="place">
                <img src={place.main_image || emptyImage.src} alt={place.name} 
                onError={(e) => e.target.src = emptyImage.src}/>
                <div className="place-info">
                <span className='package_count'>{place.package_count} Tours</span>
                  <span className="name_location">
                    <h2>{place.title}</h2>
                    <h1>{place.name}</h1>
                  </span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      {totalItems.length>SET_LIMIT_FOR_PAGINATION?(null):(<Paginations page={page} totalItems={totalItems} setPage={setPage} ALL_DESTINATIONS_PER_PAGE={ALL_DESTINATIONS_PER_PAGE}/>)}
      
    </>
  );
}

export default DPlaces;
