// 'use client'
// import { searchbar_icon } from '@/app/assets/images';

// function SearchPackages({ closeSearch,isSearchVisible}) {
  
//   return (
//     <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
//       <div className="search-content">
//         <button className="close-search" onClick={closeSearch}>x</button>
//         <div className="search-bar">
//           <img src={searchbar_icon.src} alt="search" className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search Your Destination"
//           />
//         </div>
//         <h2 className="title">Packages Type</h2>
//         <div className="package-types">
//           <button
//             className="package-button"
//           >
//             Tour
//           </button>
//           <button
//            className="package-button"
//           >
//             Activity
//           </button>
//         </div>
//         <h2 className="title">Price Range</h2>
//         <div className="price-range">
//           <div className="price-input">
//             <label>Min</label>
//             <input
//               type="text"
//               placeholder='INR 0.00'
//             />
//           </div>
//           <div className="price-input">
//             <label>Max</label>
//             <input
//               type="text"
//               placeholder='INR 0.00'
//             />
//           </div>
//         </div>
//         <button className="search-button">
//           Search For Packages
//         </button>

//       </div>
//     </div>
//   );
// }

// export default SearchPackages;



'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { clear_search, searchbar_icon } from '@/app/assets/images';

function SearchPackages({ closeSearch, isSearchVisible }) {
  const [packageType, setPackageType] = useState('Tour');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allPackages, setAllPackages] = useState([]);
  
  const api = ExportAllApis();

  const fetchAllPackages = async () => {
    try {
      const resp = await api.fetchTourPackages();
      setAllPackages(resp.data);
    } catch (error) {
      console.error('Error fetching all packages:', error);
    }
  };

  useEffect(() => {
    fetchAllPackages();
  }, []);

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.trim() === '') {
        // If search term is empty, show all packages matching current filters
        const filteredResults = allPackages.filter(
          (pkg) =>
            pkg.package_type === packageType &&
            pkg.starting_cost >= minPrice &&
            pkg.starting_cost <= maxPrice
        );
        setSearchResults(filteredResults);
      } else {
        // Filter packages based on search term
        const filteredResults = allPackages.filter((pkg) => {
          const packageName = pkg.package_name ? pkg.package_name.toLowerCase() : '';
          const tourLocation = pkg.tour_location ? pkg.tour_location.toLowerCase() : '';
          return packageName.includes(searchTerm.toLowerCase()) || tourLocation.includes(searchTerm.toLowerCase());
        });
        setSearchResults(filteredResults);
      }
    };
  
    fetchSearchResults();
  }, [searchTerm, packageType, minPrice, maxPrice, allPackages]);
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults(allPackages.filter(
      (pkg) =>
        pkg.package_type === packageType &&
        pkg.starting_cost >= minPrice &&
        pkg.starting_cost <= maxPrice
    ));
  };

  const handleSearchPackages = () => {
    const filteredResults = allPackages.filter(
      (pkg) =>
        pkg.package_type === packageType &&
        pkg.starting_cost >= minPrice &&
        pkg.starting_cost <= maxPrice
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
      <div className="search-content">
        <button className="close-search" onClick={closeSearch}>x</button>
        <div className="search-bar">
          <img src={searchbar_icon.src} alt="search" className="search-icon" style={{cursor: 'pointer' }}/>
          <input
            type="text"
            placeholder="Search Your Destination"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm.trim() !== '' && (
            <img onClick={handleClearSearch} src={clear_search.src} alt="clear" style={{cursor: 'pointer' }} />
          )}
        </div>
        <h2 className="title">Packages Type</h2>
        <div className="package-types">
          <button
            className={`package-button ${packageType === 'Tour' ? 'active' : ''}`}
            onClick={() => setPackageType('Tour')}
          >
            Tour
          </button>
          <button
            className={`package-button ${packageType === 'Activity' ? 'active' : ''}`}
            onClick={() => setPackageType('Activity')}
          >
            Activity
          </button>
        </div>
        <h2 className="title">Price Range</h2>
        <div className="price-range">
          <div className="price-input">
            <label>Min</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>
          <div className="price-input">
            <label>Max</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </div>
        <button className="search-button" onClick={handleSearchPackages}>
          Search For Packages
        </button>

        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div className="tour_package" key={result.id}>
                <Link href={`/tours/${result.id}/${result.key}`}>
                  <div className="tour_package_inner">
                    <div className="tour_img_wrapper">
                      <img src={result.pdf_image} alt={result.package_name} />
                      <div className="tour_badge">{result.days} Days</div>
                    </div>
                    <div className="tour_package_info">
                      <h2>{result.package_name}</h2>
                      <span>
                        <img src="/path/to/location/icon" style={{ width: '25px' }} alt={result.name} />
                        <p className="tour_location">{result.tour_location || result.package_name}</p>
                      </span>
                    </div>
                    <div className='tour_b_c'>
                      <div className="tour_rating_duration_section">
                        <div className="tour_details">
                          <div className="tour_ratings">
                            <span>{result.rating} ★ ({result.reviews} reviews)</span>
                          </div>
                          <span className='speedometer'>
                            <img style={{ width: '35px' }} src="/path/to/speedometer/icon" alt={result.name} />
                            {result.days}days / {result.night}nights
                          </span>
                        </div>
                      </div>
                      <div className="tour_price_book_section">
                        <span className='price_tour'>
                          <p>Price</p>₹{result.starting_cost}
                        </span>
                        <button className="book_button">
                          Book a Trip
                          <img src="/path/to/airplane/icon" alt={result.name} style={{ width: '28px' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPackages;
