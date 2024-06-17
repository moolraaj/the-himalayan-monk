'use client';
import React, { useState } from 'react';
import airplane from '../../../../../assets/homepageAssets/airplane.gif';
import { ExportAllApis } from '@/utils/apis/apis';

const BookTourForm = () => {
  let api=ExportAllApis()
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: '',
    total_no_travelers: '',
    departuredate: '',
    returndate: '',
    adminEamil:'sales@eligocs.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    // let formdata = new FormData()

    // formdata.append('adminEamil', 'sales@eligocs.com')

    // formdata.append('name', user.name,)
    // formdata.append('email', user.email,)
    // formdata.append('mobile', user.mobile,)
    // formdata.append('destination', user.destination,)
    // formdata.append('total_no_travelers', user.total_no_travelers,)
    // formdata.append('departuredate', user.departuredate,)
    // formdata.append('returndate', user.returndate,)


    try {
      const resp = await api.SubmitDestinmationsformData({
        method: 'POST',
        body: user
      });

      const responseJson = await resp.json();
      console.log(responseJson);

      setUser({
        name: '',
        email: '',
        mobile: '',
        destination: '',
        total_no_travelers: '',
        departuredate: '',
        returndate: ''
      });
    } catch (error) {
      console.error('Failed to submit form', error);
    }
  };

  return (
    <div className="form-container-custom">
      <h2>Book A Tour</h2>
      <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
      <form >
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input type="text" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="mobile" value={user.mobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Where Would You Like To Travel</label>
          <input type="text" name="destination" value={user.destination} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>The Number Of Travelers</label>
          <input type="text" name="total_no_travelers" value={user.total_no_travelers} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input type="text" name="departuredate" value={user.departuredate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input type="text" name="returndate" value={user.returndate} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Book Now <img src={airplane.src} alt="demo" style={{ width: '28px' }} />
        </button>
      </form>
    </div>
  );
};

export default BookTourForm;



