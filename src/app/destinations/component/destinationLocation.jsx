 
const fetchAllDestinations = async () => {
  let data = await fetch(`http://localhost:4500/destinationsData`);
  let resp = await data.json();
  return resp;
};

import Link from 'next/link';
 

 



async function DPlaces() {
   
      const result = await fetchAllDestinations();
      
      

  return (
    <div className="places-container">
      {result && result.map(place => (
        <Link href={`/destinations/${place.id}`} key={place.id}>
          <div className="place">
            <img src={place.imgSrc} alt={place.imgSrc} />
            <div className="place-info">
              <p>{place.tours} Tour{place.tours > 1 ? 's' : ''}</p>
              <span className='name_location'>
                <h3>{place.name}</h3>
                <h4>{place.location}</h4>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DPlaces;
