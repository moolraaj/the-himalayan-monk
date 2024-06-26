'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExportAllApis } from '@/utils/apis/apis';
import { clear_search, searchbar_icon } from '@/app/assets/images';

function SearchPackages({ closeSearch, isSearchVisible, setIsSearchVisible }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [allPackages, setAllPackages] = useState([]);
  const [allDestinations, setAllDestinations] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  const api = ExportAllApis();

  const fetchAllPackages = async () => {
    try {
      const resp = await api.fetchTourPackages();
      setAllPackages(resp?.data || []);
    } catch (error) {
      console.error('Error fetching all packages:', error);
    }
  };

  const loadAllDestinations = async () => {
    try {
      const resp = await api.fetchAlldestinations();
      setAllDestinations(resp?.data || []);
    } catch (error) {
      console.error('Error fetching all destinations:', error);
    }
  };

  const loadAllActivities = async () => {
    try {
      const resp = await api.fetchAllActivities();
      setAllActivities(resp?.data || []);
    } catch (error) {
      console.error('Error fetching all activities:', error);
    }
  };

  useEffect(() => {
    fetchAllPackages();
    loadAllDestinations();
    loadAllActivities();
  }, []);

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        setFilteredDestinations([]);
        setFilteredActivities([]);
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
        setFilteredActivities(filteredActivitiesResults);
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

  const closeSearchPopup = () => {
    setIsSearchVisible(false);
  };

  // Typing animation logic
  const words = ['Destination', 'Packages', 'Activities'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [currentText, isDeleting, typingSpeed, currentWordIndex]);

  const noResultsFound =
    searchTerm.trim() !== '' &&
    searchResults.length === 0 &&
    filteredDestinations.length === 0 &&
    filteredActivities.length === 0;

  return (
    <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
      <div className="search-content">
        <button className="close-search" onClick={closeSearch}>x</button>
        <div className="search-bar">
          <img src={searchbar_icon.src} alt="search" className="search-icon" style={{ cursor: 'pointer' }} />
          <input
            type="text"
            placeholder={`Search Your ${currentText}`}
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm.trim() !== '' && (
            <img onClick={handleClearSearch} src={clear_search.src} alt="clear" style={{ cursor: 'pointer' }} />
          )}
        </div>

        {noResultsFound ? (
          <div className="no-results-message">Results not found</div>
        ) : (
          searchTerm.trim() !== '' && (
            <div className="search-results">
              {searchResults.length > 0 && (
                <div className="search-wrapper">
                  <h1>Tours</h1>
                  <div className="search-result">
                    {searchResults.map((ele, index) => (
                      <Link href={`/tours/${ele.id}/${ele.key}`} key={index} onClick={closeSearchPopup}>
                        {ele.package_name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredDestinations.length > 0 && (
                <div className="search-wrapper">
                  <h1>Destinations</h1>
                  <div className="search-result">
                    {filteredDestinations.map((ele, index) => (
                      <Link href={`/destinations/${ele.city_id}`} key={index} onClick={closeSearchPopup}>
                        {ele.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredActivities.length > 0 && (
                <div className="search-wrapper">
                  <h1>Activities</h1>
                  <div className="search-result">
                    {filteredActivities.map((ele, index) => (
                      <Link href={`/activities/${ele.city_id}`} key={index} onClick={closeSearchPopup}>
                        {ele.package_name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SearchPackages;
