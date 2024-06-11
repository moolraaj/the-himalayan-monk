// components/ContactDetails.js
import React from 'react';



const ContactDetails = () => {
    return (
        <div className="contactDetails">
                <h4>Contact Details</h4>
            <div className="detailItem">
            
                <label>Phone</label>
                <span className="icon">📞</span>
                <span className="text"><a href='tel:918593408930'>+918593408930</a></span>
            </div>
            <div className="detailItem">
                <label>Email Now</label>
                <span className="icon">📧</span>
                <span className="text"><a href='mailto:thehimalayanmonks@gmail.com'>thehimalayanmonks@gmail.com</a></span>
            </div>
            <div className="detailItem">
            <label>Location</label>
                <span className="icon">📍</span>
                <span className="text">2nd Floor Heaven House Vikasnagar</span>
            </div>
            <div className="detailItem">
            <label>Opening Time</label>
                <span className="icon">⏰</span>
                <span className="text">9:00 AM - 5:00 PM</span>
            </div>
        </div>
    );
};

export default ContactDetails;
