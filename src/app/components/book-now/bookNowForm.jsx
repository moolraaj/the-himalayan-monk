import { ExportAllApis } from '@/utils/apis/apis';
import React, { useState } from 'react';

function BookNowForm() {
  const api = ExportAllApis(); // Assuming ExportAllApis() correctly returns an object with methods

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    total_no_travelers: '',
    adminEamil: 'sales@eligocs.com', 
    message: '',
  });

  const [errors, setErrors] = useState({});

  const getUserDetails = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const { name, email, mobile } = user;
    let valid = true;
    const fieldErrors = {};

    if (!name.trim()) {
      valid = false;
      fieldErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      valid = false;
      fieldErrors.email = 'Email is required';
    }

    if (mobile.trim().length !== 10) {
      valid = false;
      fieldErrors.mobile = 'Mobile number must be 10 digits';
    }

    setErrors(fieldErrors);
    return valid;
  };

  const submitUserQuery = async () => {
    if (validateForm()) {
      try {
        const response = await api.SubmitDestinmationsformData(user)
        if (response) {
          alert('Data saved successfully');
          
          console.log('Form submitted successfully:', response);
        } else {
          alert('Failed to save data');
        }
      } catch (error) {
        alert('Error occurred while saving data');
        console.error('Error submitting form:', error);
      }
      setUser({
        name: '',
        email: '',
        mobile: '',
        total_no_travelers: '',
        adminEmail: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="book-form-wrapper">
      <div className="book-form_fields">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={user.name} onChange={getUserDetails} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="book-form_fields">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={user.email} onChange={getUserDetails} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="book-form_fields">
        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" name="mobile" value={user.mobile} onChange={getUserDetails} />
        {errors.mobile && <span className="error">{errors.mobile}</span>}
      </div>

      <div className="book-form_fields">
        <label htmlFor="total_no_travelers">Number Of Travelers</label>
        <input type="text" id="total_no_travelers" name="total_no_travelers" value={user.total_no_travelers} onChange={getUserDetails} />
      </div>

      <div className="book-form_fields">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={user.message} onChange={getUserDetails}></textarea>
      </div>

      <div className="book-form_button">
        <button type="button" onClick={submitUserQuery}>Book Now</button>
      </div>
    </div>
  );
}

export default BookNowForm;
