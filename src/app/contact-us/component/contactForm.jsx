// components/EnquiryForm.js
import React from 'react';


const EnquiryForm = () => {
    return (
        <form className="enquiryForm">
            <h4>Make An Enquiry</h4>
            <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="inputField" />
            </div>
            <div className='both_middle_form'>
            <div className="formGroup">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" className="inputField" />
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="inputField" />
            </div>
            </div>
            <div className="formGroup">
                <label htmlFor="message">Enter your message</label>
                <textarea id="message" name="message" className="textareaField"></textarea>
            </div>
            <div className='submit_custom'>
                <button type="submit" className="submitButton">Submit Now</button>
            </div>
        </form>
    );
};

export default EnquiryForm;
