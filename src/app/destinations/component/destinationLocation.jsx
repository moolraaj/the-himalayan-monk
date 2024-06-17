 

'use client'
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import empty from '../../assets/empty.jpg'  
import Image from 'next/image';

 



 function DPlaces() {
  let api=ExportAllApis()
  
  let [result,setResult]=useState([])

  let loadAllDestinations=async()=>{
    let response=await api.fetchAlldestinations()
    setResult(response.data)
  }



  useEffect(()=>{
    loadAllDestinations()
  },[])

  
      
      

  return (
    <div className="places-container">
      {result && result?.map((place,index) => {

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
  );
};

export default DPlaces;
