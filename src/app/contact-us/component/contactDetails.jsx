// components/ContactDetails.js
import React from 'react';
import phonegif from '../../assets/contact/phone-gif.gif'
import mailgif from '../../assets/contact/mail-gif.gif'
import locationgif from '../../assets/contact/location-gif.gif'
import timegif from '../../assets/contact/time-gif.gif'



const ContactDetails = () => {
    return (
        <div className="contactDetails">
                <h4>Contact Details</h4>
            <div className="detailItem">
            
                <label>Phone</label>
                <span className="icon"><img src={phonegif.src}/> </span>
                <span className="text"><a href='tel:082195 39025'>082195 39025</a></span>
            </div>
            <div className="detailItem">
                <label>Email Now</label>
                <span className="icon"><img src={mailgif.src}/></span>
                <span className="text"><a href='mailto:thmholidays@gmail.com'>thmholidays@gmail.com</a></span>
            </div>
            <div className="detailItem">
            <label>Location</label>
                <span className="icon"> <img src={locationgif.src}/> </span>
                <span className="text">Kanyal Rd, Simsa, Simsa Village, Manali, Nasogi, Himachal Pradesh 175131</span>
            </div>
            <div className="detailItem">
            <label>Opening Time</label>
                <span className="icon"> <img src={timegif.src}/></span>
                <span className="text">10:00 AM - 06:00 PM</span>
            </div>
        </div>
    );
};

export default ContactDetails;
