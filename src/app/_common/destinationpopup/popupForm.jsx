import React from 'react'
import Destinationsmenu from './component/megamenuFilter';

function PopupForm({ ShowDestinations, closeDestinations ,setShowDestinations }) {
    return (
      <div className={`popup-wrapper ${ShowDestinations ? 'slide-down' : 'slide-up'}`}>
        <button onClick={closeDestinations}>x</button>
       
       <Destinationsmenu setShowDestinations={setShowDestinations}/>
      </div>
    );
  }

export default PopupForm
