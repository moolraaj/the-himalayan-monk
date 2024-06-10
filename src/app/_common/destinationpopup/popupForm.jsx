import React from 'react'
import Destinationsmenu from './component/megamenuFilter';

function PopupForm({ ShowDestinations, closeDestinations }) {
    return (
      <div className={`popup-wrapper ${ShowDestinations ? 'slide-down' : 'slide-up'}`}>
        <button onClick={closeDestinations}>x</button>
       
       <Destinationsmenu/>
      </div>
    );
  }

export default PopupForm
