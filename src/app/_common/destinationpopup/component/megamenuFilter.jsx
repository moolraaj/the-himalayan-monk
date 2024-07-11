import { emptyImage } from '@/app/assets/images';
import { ExportAllApis } from '@/utils/apis/apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Destinationsmenu({ setShowDestinations }) {
  const api = ExportAllApis();
  const [result, setResult] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [showAllPackages, setShowAllPackages] = useState(true);
  console.log(`filteredPackages`)
  console.log(filteredPackages)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const resp = await api.fetchAlldestinations();
        setResult(resp?.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, []);

  

   
  const filterDestinations = async (city) => {
    try {
      if (city) {
        const resp = await api.fetchFilterDestination(city);
        setFilteredPackages(resp?.data || null);
        setShowAllPackages(false);
      } else {

        const resp = await api.fetchAlldestinations();
        setResult(resp?.data);
        setShowAllPackages(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

   

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    filterDestinations(cityId);
  };

  const goTodestinations = () => {
    setShowDestinations(false)
  }

  return (
    <div className='desti-feilter-flex'>

      <div className='destinationfilter'>

        <select
          id="location-select"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">all destinations</option>
          {result===null? 'no packages' : result?.map((ele, index) => (
            <option key={index} value={ele.city_id}>
              {ele.name || 'destinations'}
            </option>
          ))}
        </select>
      </div>
      <div className='filter_outer_desti'>
        <ul>
          {showAllPackages==null? 'no packages found': showAllPackages?result?.map((ele, index) => {
              return <div className='filter-destination-wrapper' key={index}>
                <Link href={`/destinations/${ele.city_id}`} onClick={goTodestinations}>
                  <div className="filter-desti-img">
                    <h1>{ele.name}</h1>
                    <img src={ele.main_image || emptyImage.src} alt='destinations' width={100} 
                    onError={(e) => e.target.src = emptyImage.src}/>
                  </div>
                </Link>

              </div>
            })
            : filteredPackages===null? 'no filtered packages found': filteredPackages?.map((ele, index) => {
              return <div className='filter-destination-wrapper' key={index}>
                <Link href={`/destinations/${ele.citySlug}`} onClick={goTodestinations}>

                  <div className="filter-desti-img">
                    <h1>{ele.package_name}</h1>
                    <img src={ele.pdf_image || emptyImage.src} alt='destinations' width={100} 
                    onError={(e) => e.target.src = emptyImage.src}/>
                  </div>
                </Link>

              </div>
            }


            )}
        </ul>
      </div>
    </div>
   
  );
}
