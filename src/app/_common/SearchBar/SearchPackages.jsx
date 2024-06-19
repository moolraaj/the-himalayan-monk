import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { clear_search, searchbar_icon } from '@/app/assets/images';

function SearchPackages({ closeSearch, isSearchVisible, setIsSearchVisible }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allPackages, setAllPackages] = useState([]);
  const [allDestinations, setAllDestinations] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const api = ExportAllApis();

  const fetchAllPackages = async () => {
    try {
      const resp = await api.fetchTourPackages();
      setAllPackages(resp.data);
    } catch (error) {
      console.error('Error fetching all packages:', error);
    }
  };

  const fetchAllDestinations = async () => {
    try {
      const resp = await api.fetchAlldestinations();
      setAllDestinations(resp.data);
    } catch (error) {
      console.error('Error fetching all destinations:', error);
    }
  };

  const fetchAllActivities = async () => {
    try {
      const resp = await api.fetchAllActivities();
      setAllActivities(resp.data);
    } catch (error) {
      console.error('Error fetching all activities:', error);
    }
  };

  useEffect(() => {
    fetchAllPackages();
    fetchAllDestinations();
    fetchAllActivities();
  }, []);

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        setShowSearchResults(false);
      } else {
        const normalizedSearchTerm = searchTerm.toLowerCase();

        const tourResults = allPackages.filter(pkg =>
          pkg.package_name.toLowerCase().includes(normalizedSearchTerm)
        ).map(pkg => ({ ...pkg, type: 'Tour' }));

        const destinationResults = allDestinations.filter(destination =>
          destination.name.toLowerCase().includes(normalizedSearchTerm)
        ).map(destination => ({ ...destination, type: 'Destination' }));

        const activityResults = allActivities.filter(activity =>
          activity.package_name.toLowerCase().includes(normalizedSearchTerm)
        ).map(activity => ({ ...activity, type: 'Activity' }));

        const results = [
          ...tourResults,
          ...destinationResults,
          ...activityResults
        ];

        setSearchResults(results);
        setShowSearchResults(true);
      }
    };

    fetchSearchResults();
  }, [searchTerm, allPackages, allDestinations, allActivities]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const closePopUp = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
      <div className="search-content">
        <button className="close-search" onClick={closeSearch}>x</button>
        <div className="search-bar">
          <img src={searchbar_icon.src} alt="search" className="search-icon" style={{ width: '16px', height: '16px' }} />
          <input
            type="text"
            placeholder="Search Your Destination"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm.trim() !== '' && (
            <img onClick={clearSearch} src={clear_search.src} alt="clear" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
          )}
        </div>

        {showSearchResults && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map(result => (
                <div key={result.id}>
                  {result.type === 'Tour' && (
                    <Link href={`/tours/${result.id}/${result.key}`} onClick={closePopUp}>
                      <h1>{result.package_name}</h1>
                    </Link>
                  )}
                  {result.type === 'Destination' && (
                    <Link href={`/destinations/${result.city_id}`} onClick={closePopUp}>
                      <h1>{result.name}</h1>
                    </Link>
                  )}
                  {result.type === 'Activity' && (
                    <Link href={`/activities/${result.id}`} onClick={closePopUp}>
                      <h1>{result.package_name}</h1>
                    </Link>
                  )}
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPackages;
