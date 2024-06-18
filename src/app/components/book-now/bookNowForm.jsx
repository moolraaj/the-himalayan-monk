'use client'
import React, { useState } from 'react';

function BookNowForm() {
  let [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    total_no_travelers: '',
    adminEamil: '',
    message: '',
  });

  let [errors, setErrors] = useState({});

  const getUserDetails = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });

    
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const { name, email, mobile } = user;
    let valid = true;
    let fieldErrors = {};

    if (!name) {
      valid = false;
      fieldErrors.name = 'Name is required';
    }

    if (!email) {
      valid = false;
      fieldErrors.email = 'Email is required';
    }

    if (mobile.length !== 10) {
      valid = false;
      fieldErrors.mobile = 'Mobile number must be 10 digits';
    }

    setErrors(fieldErrors);
    return valid;
  };

  const submitUserQuery = () => {
    if (validateForm()) {
      console.log('Form submitted', user);

   
      setUser({
        name: '',
        email: '',
        mobile: '',
        total_no_travelers: '',
        adminEamil: '',
        message: '',
      });

      setErrors({});
    }
  };

  return (
    <>
      <div className="book-form-wrapper">
        <div className="book-form_fields">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" name='name' value={user.name} onChange={getUserDetails} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="book-form_fields">
          <label htmlFor="email">Email Id</label>
          <input type="text" name='email' value={user.email} onChange={getUserDetails} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="book-form_fields">
          <label htmlFor="phone">Phone No</label>
          <input type="text" name='mobile' value={user.mobile} onChange={getUserDetails} />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="book-form_fields">
          <label htmlFor="num-of-travelers">Number Of Travelers</label>
          <input type="text" name='total_no_travelers' value={user.total_no_travelers} onChange={getUserDetails} />
        </div>

        <div className="book-form_fields">
          <label htmlFor="message">Enter Your Message</label>
          <input type="text" name='message' value={user.message} onChange={getUserDetails} />
        </div>

        <div className="book-form_button">
          <button onClick={submitUserQuery}>Book Now</button>
        </div>
      </div>
    </>
  );
}

export default BookNowForm;
