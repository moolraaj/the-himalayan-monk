'use client'
import { airplane } from '@/app/assets/images';
import { ExportAllApis } from '@/utils/apis/apis';
import React, { useState } from 'react';
import { toast } from 'sonner';

function BookNowForm() {
    let api=ExportAllApis()
  let [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    total_no_travelers: '',
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

  const submitUserQuery = async() => {
    if (validateForm()) {
      console.log('Form submitted', user);

      let formData=new FormData()
      formData.append('name',user.name)
      formData.append('email',user.email)
      formData.append('mobile',user.mobile)
      formData.append('total_no_travelers',user.total_no_travelers)
      formData.append('message',user.message)
      formData.append('adminEamil',"sales@eligocs.com")

      let resp=await api.SubmitDestinmationsformData(formData)

      if(resp.status){
       toast.success(resp.msg)
       setUser({
         name: '',
         email: '',
         mobile: '',
         total_no_travelers: '',
         message: '',
       });
 
       setErrors({});
      }else{
        toast.error(resp.msg)
      }


     

   
 
    }
  };

  return (
    <>
      <div className="book-form-wrapper">
        <div className="book_fields_wrapper">

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
        </div>
        <div className="book-form_message_filed ">
          <label htmlFor="message">Enter Your Message</label>
          <input type="text" name='message' value={user.message} onChange={getUserDetails} />
        </div>

        <div className="book-form_button">
          <button onClick={submitUserQuery}><span>Book Now </span><span><img src={airplane.src} alt={airplane.src} /></span></button>
        </div>
      </div>
    </>
  );
}

export default BookNowForm;
