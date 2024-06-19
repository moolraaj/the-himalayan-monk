'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { clear_search, searchbar_icon } from '@/app/assets/images';

function SearchPackages({ closeSearch, isSearchVisible }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filteredActivities, setFiltereActivities] = useState([]);
  const [allPackages, setAllPackages] = useState([]);
  const [allDestinations, setAllDestinations] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  const api = ExportAllApis();





  const fetchAllPackages = async () => {
    try {
      const resp = await api.fetchTourPackages();
      setAllPackages(resp.data);
    } catch (error) {
      console.error('Error fetching all packages:', error);
    }
  };

  const loadAllDestinations = async () => {
    try {
      const resp = await api.fetchAlldestinations();
      setAllDestinations(resp.data);
    } catch (error) {
      console.error('Error fetching all destinations:', error);
    }
  };

  const loadAllActivities = async () => {
    try {
      const resp = await api.fetchAllActivities();
      setAllActivities(resp.data);
    } catch (error) {
      console.error('Error fetching all destinations:', error);
    }
  };

  useEffect(() => {
    fetchAllPackages();
    loadAllDestinations();
    loadAllActivities()
  }, []);

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        setFilteredDestinations([]);
        setFiltereActivities([])

      } else {
        const filteredPackageResults = allPackages.filter((pkg) => {
          const packageName = pkg.package_name ? pkg.package_name.toLowerCase() : '';
          return packageName.includes(searchTerm.toLowerCase());
        });
        setSearchResults(filteredPackageResults);

        const filteredDestinationResults = allDestinations.filter((dest) => {
          const destinationName = dest.name ? dest.name.toLowerCase() : '';
          return destinationName.includes(searchTerm.toLowerCase());
        });
        setFilteredDestinations(filteredDestinationResults);


        const filteredActivitiesResults = allActivities.filter((act) => {
          const activitiesName = act.package_name ? act.package_name.toLowerCase() : '';
          return activitiesName.includes(searchTerm.toLowerCase());
        });
        setFiltereActivities(filteredActivitiesResults);
      }
    };

    fetchSearchResults();
  }, [searchTerm, allPackages, allDestinations, allActivities]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
      <div className="search-content">
        <button className="close-search" onClick={closeSearch}>x</button>
        <div className="search-bar">
          <img src={searchbar_icon.src} alt="search" className="search-icon" style={{ cursor: 'pointer' }} />
          <input
            type="text"
            placeholder="Search Your Destination"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm.trim() !== '' && (
            <img onClick={handleClearSearch} src={clear_search.src} alt="clear" style={{ cursor: 'pointer' }} />
          )}
        </div>

        {(searchResults.length > 0 || filteredDestinations.length > 0 || filteredActivities.length > 0) && (
          <div className="search-results">
            {searchResults.map((ele, index) => (
              <Link href={`/tour/${ele.id}`} key={index}>
                <h1>{ele.package_name}</h1>
              </Link>
            ))}

            {filteredDestinations.map((ele, index) => (
              <Link href={`/destinations/${ele.city_id}`} key={index}>
                <h1>{ele.name}</h1>
              </Link>
            ))}
            {filteredActivities.map((ele, index) => (
              <Link href={`/activities/${ele.id}`} key={index}>
                <h1>{ele.package_name}</h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPackages;
