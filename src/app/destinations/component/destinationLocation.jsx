

'use client'
import { ALL_DESTINATIONS_PER_PAGE, ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import empty from '../../assets/empty.jpg'

import Paginations from '@/app/components/paginations/paginations';





function DPlaces() {
  let api = ExportAllApis()

  let [result, setResult] = useState([])
  let [page, setPage] = useState(1)
  let [totalItems, setTotalItems] = useState(1)

  let loadAllDestinations = async () => {
    let response = await api.fetchAlldestinations(ALL_DESTINATIONS_PER_PAGE, page)
    setResult(response.data)
    setTotalItems(Math.ceil(response.totalCount / ALL_DESTINATIONS_PER_PAGE))
  }
  useEffect(() => {
    loadAllDestinations(page)
  }, [page])



  return (
    <>
    
    <div className="places-container">
     
      {result && result?.map((place, index) => {

        return <Link href={`/destinations/${place.city_id}`} key={index}>
          <div className="place">
            <img src={place.image || empty.src} alt={place.name} />
            <div className="place-info">
              {/* <p>{place.tours} Tour{place.tours > 1 ? 's' : ''}</p> */}
              <span className='name_location'>
                <h3>{place.name}</h3>
                {/* <h4>{place.location}</h4> */}
              </span>
            </div>
          </div>
        </Link>



      })

      }
    
    </div>

    <Paginations page={page} totalItems={totalItems} setPage={setPage}/>
    
    </>
  );
};

export default DPlaces;
