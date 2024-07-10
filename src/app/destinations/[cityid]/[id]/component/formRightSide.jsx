'use client';
import React, { useState } from 'react';
import { EMAIL_VALIDATORS, ExportAllApis } from '@/utils/apis/apis';
import { toast } from 'sonner';
import { airplane } from '@/app/assets/images';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Itnerayimage from '../../../../assets/homepageAssets/itneray-img.png'

const BookTourForm = () => {
  let api = ExportAllApis();
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: '',
    total_no_travelers: '',
    departuredate: null,
    returndate: null,
  });

  let [error, setError] = useState({});

  const showErrors = () => {
    let { name, email, mobile, destination, total_no_travelers, departuredate, returndate } = user;
    let valid = true;
    let errorFields = {};

    if (!name) {
      valid = false;
      errorFields.name = 'Name is required';
    }
    if (!email) {
      valid = false;
      errorFields.email = 'Email is required';
    }else if(!EMAIL_VALIDATORS.test(email)){
      valid = false;
      errorFields.email = 'please enter a  valid email';
    }
    if (mobile.length !== 10) {
      valid = false;
      errorFields.mobile = 'Phone number must be 10 digits';
    }
    if (!destination) {
      valid = false;
      errorFields.destination = 'Destination is required';
    }
    if (!total_no_travelers) {
      valid = false;
      errorFields.total_no_travelers = 'Total travelers is required';
    }
    if (!departuredate) {
      valid = false;
      errorFields.departuredate = 'Departure date is required';
    }
    if (!returndate) {
      valid = false;
      errorFields.returndate = 'Return date is required';
    }

    setError(errorFields);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setError({ ...error, [name]: '' });
  };

  const handleDateChange = (date, name) => {
    setUser({
      ...user,
      [name]: date,
    });
    setError({ ...error, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('mobile', user.mobile);
    formData.append('destination', user.destination);
    formData.append('total_no_travelers', user.total_no_travelers);
    formData.append('departuredate', user.departuredate ? user.departuredate.toISOString().split('T')[0] : '');
    formData.append('returndate', user.returndate ? user.returndate.toISOString().split('T')[0] : '');
    formData.append('adminEamil', 'sales@eligocs.com');

    if (showErrors()) {
      try {
        const resp = await api.SubmitDestinmationsformData(formData);
        if (resp.status) {
          toast.success(resp.msg);
          setUser({
            name: '',
            email: '',
            mobile: '',
            destination: '',
            total_no_travelers: '',
            departuredate: null,
            returndate: null,
          });
          setError({});
        } else {
          toast.error(resp.msg);
        }
      } catch (error) {
        console.error('Failed to submit form', error);
      }
    }
  };

  return (
    <>
    <div className='right-side-section'>
      <div className="form-container-custom">
        <h2>Book A Tour</h2>
        <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            {error.name && <span className="error">{error.name}</span>}
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            {error.email && <span className="error">{error.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="number" name="mobile" value={user.mobile} onChange={handleChange} />
            {error.mobile && <span className="error">{error.mobile}</span>}
          </div>
          <div className="form-group">
            <label>Where Would You Like To Travel</label>
            <input type="text" name="destination" value={user.destination} onChange={handleChange} />
            {error.destination && <span className="error">{error.destination}</span>}
          </div>
          <div className="form-group">
            <label>The Number Of Travelers</label>
            <input type="number" name="total_no_travelers" value={user.total_no_travelers} onChange={handleChange} />
            {error.total_no_travelers && <span className="error">{error.total_no_travelers}</span>}
          </div>

          <div className="form-group">
            <label>Departure Date</label>
            <DatePicker
              selected={user.departuredate}
              onChange={(date) => handleDateChange(date, 'departuredate')}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Departure Date"
              minDate={new Date()}
            />
            {error.departuredate && <span className="error">{error.departuredate}</span>}
          </div>
          <div className="form-group">
            <label>Return Date</label>
            <DatePicker
              selected={user.returndate}
              onChange={(date) => handleDateChange(date, 'returndate')}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Return Date"
              minDate={new Date()}
            />
            {error.returndate && <span className="error">{error.returndate}</span>}
          </div>

          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Book Now <img src={airplane.src} alt="demo" style={{ width: '28px' }} />
          </button>
        </form>

        
      </div>
      <div className="right-side-image">
        <img src = {Itnerayimage.src} alt="itenary-imahge" />
        </div>
    </div>
    </>
  );
};

export default BookTourForm;
