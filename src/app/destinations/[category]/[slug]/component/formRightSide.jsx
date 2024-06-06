'use client'
// components/BookTourForm.js
import React, { useState } from 'react';
import airplane from '../../../../assets/homepageAssets/airplane.gif';



const BookTourForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    destination: '',
    departureDate: '',
    returnDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here
  };

  return (
    <div className="form-container-custom">
      <h2>Book A Tour</h2>
      <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>The Number Of Travelers</label>
          <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Where Would You Like To Travel</label>
          <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Book Now <img src={airplane.src} alt="demo" style={{ width: '28px' }}></img></button>
      </form>
     
    </div>
  );
};

export default BookTourForm;
