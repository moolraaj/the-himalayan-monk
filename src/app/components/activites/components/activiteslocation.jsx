import React from 'react';
import monastry from "../../../assets/homepageAssets/monastry.png";

const placesData = [
  {
    id: 1,
    imgSrc: monastry,
    altText: "Lama Monastery",
    tours: 5,
    name: "Lama Monastery",
    location: "Kangra"
  },
  {
    id: 2,
    imgSrc: monastry,
    altText: "Bijli Mahadev",
    tours: 4,
    name: "Bijli Mahadev",
    location: "Kullu"
  },
  {
    id: 3,
    imgSrc: monastry,
    altText: "Main Bazar",
    tours: 5,
    name: "Main Bazar",
    location: "Chamba"
  },
  {
    id: 4,
    imgSrc: monastry,
    altText: "Ridge",
    tours: 3,
    name: "Ridge",
    location: "Shimla"
  },
  {
    id: 5,
    imgSrc: monastry,
    altText: "Parvati Valley",
    tours: 5,
    name: "Parvati Valley",
    location: "Kasol"
  },
  {
    id: 6,
    imgSrc: monastry,
    altText: "Mini Switzerland",
    tours: 5,
    name: "Mini Switzerland",
    location: "Kullu"
  },
  {
    id: 7,
    imgSrc: monastry,
    altText: "Christ Church",
    tours: 5,
    name: "Christ Church",
    location: "Kasauli"
  },
  {
    id: 8,
    imgSrc: monastry,
    altText: "Rang Mahal",
    tours: 5,
    name: "Rang Mahal",
    location: "Kullu"
  }
];

const APlaces = () => {
  return (
    <div className="places-container">
      {placesData.map(place => (
        <div key={place.id} className="place">
          <img src={place.imgSrc.src} alt={place.altText} />
          <div className="place-info">
            <p>{place.tours} Tour{place.tours > 1 ? 's' : ''}</p>
             <span className='name_location'>
            <h3>{place.name}</h3>
            <h4>{place.location}</h4>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default APlaces;
