'use client'
import { searchbar_icon } from '@/app/assets/images';

function SearchPackages({ closeSearch,isSearchVisible}) {
  
  return (
    <div className={`search-container ${isSearchVisible ? 'show' : ''}`}>
      <div className="search-content">
        <button className="close-search" onClick={closeSearch}>x</button>
        <div className="search-bar">
          <img src={searchbar_icon.src} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search Your Destination"
          />
        </div>
        <h2 className="title">Packages Type</h2>
        <div className="package-types">
          <button
            className="package-button"
          >
            Tour
          </button>
          <button
           className="package-button"
          >
            Activity
          </button>
        </div>
        <h2 className="title">Price Range</h2>
        <div className="price-range">
          <div className="price-input">
            <label>Min</label>
            <input
              type="text"
              placeholder='INR 0.00'
            />
          </div>
          <div className="price-input">
            <label>Max</label>
            <input
              type="text"
              placeholder='INR 0.00'
            />
          </div>
        </div>
        <button className="search-button">
          Search For Packages
        </button>

      </div>
    </div>
  );
}

export default SearchPackages;
