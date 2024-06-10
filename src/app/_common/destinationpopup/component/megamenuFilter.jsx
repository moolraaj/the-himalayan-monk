// components/Destinations.js

import { useEffect, useState } from 'react';

// Define the function to get the data
export function getData() {
  return {
    locations: ['Location 1', 'Location 2', 'Location 3'],
    packages: {
      'Location 1': ['Package A1', 'Package B1', 'Package C1'],
      'Location 2': ['Package A2', 'Package B2', 'Package C2'],
      'Location 3': ['Package A3', 'Package B3', 'Package C3'],
    },
  };
}

export default function Destinationsmenu() {
  // Get the data by calling the function
  const data = getData();

  const [locations, setLocations] = useState(data.locations);
  const [packages, setPackages] = useState(data.packages);
  const [selectedLocation, setSelectedLocation] = useState(data.locations[0]);
  const [displayedPackages, setDisplayedPackages] = useState(data.packages[data.locations[0]]);

  useEffect(() => {
    // Set initial state with the data
    setLocations(data.locations);
    setPackages(data.packages);
    setSelectedLocation(data.locations[0]);
    setDisplayedPackages(data.packages[data.locations[0]]);
  }, []);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setDisplayedPackages(packages[location]);
  };

  return (
    <div>
      <h1>Our Destinations</h1>
      <div className='destinationfilter'>
        <label htmlFor="location-select">All Destinations</label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          {displayedPackages.map((pkg, index) => (
            <li key={index}>{pkg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
