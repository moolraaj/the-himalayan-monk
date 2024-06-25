'use client';
import React, { useState } from 'react';
import airplane from '../../../../../assets/homepageAssets/airplane.gif';
import { ExportAllApis } from '@/utils/apis/apis';
import { toast } from 'sonner';

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
  });

  let [error,setError]=useState({})

  const showErrors=()=>{
    let {name,email,mobile,destination,total_no_travelers,departuredate,returndate}=user
    let valid=true
    let errorFields={}

    if(!name){
      valid=false
      errorFields.name='Name is required'
    }
    if(!email){
      valid=false
      errorFields.email='Email is required'
    }
    if(mobile.length!==10){
      valid=false
      errorFields.mobile='Phone number must be 10 digit'
    }
    if(!destination){
      valid=false
      errorFields.destination='Destination is required'
    }
    if(!total_no_travelers){
      valid=false
      errorFields.total_no_travelers='total travelers  is required'
    }
    if(!departuredate){
      valid=false
      errorFields.departuredate='departuredate date is required'
    }
    if(!returndate){
      valid=false
      errorFields.returndate='returndate date  is required'
    }

    setError(errorFields)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
    setError({...error,[name]:''})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    let formData = new FormData()

    
    formData.append('name', user.name,)
    formData.append('email', user.email,)
    formData.append('mobile', user.mobile,)
    formData.append('destination', user.destination,)
    formData.append('total_no_travelers', user.total_no_travelers,)
    formData.append('departuredate', user.departuredate,)
    formData.append('returndate', user.returndate,)
    formData.append('adminEamil', 'sales@eligocs.com')
    
    if(showErrors()){
      try {
        const resp = await api.SubmitDestinmationsformData(formData);
        if(resp.status){
          toast.success(resp.msg)
          setUser({
            name: '',
            email: '',
            mobile: '',
            destination: '',
            total_no_travelers: '',
            departuredate: '',
            returndate: '',
   
          });
          setError({})
        }else{
          toast.error(resp.msg)
        }
  
        
  
      } catch (error) {
        console.error('Failed to submit form', error);
      }
    }


   
  };

  return (
    <div className="form-container-custom">
      <h2>Book A Tour</h2>
      <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
      <form >
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange}  />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div className="form-group">
          <label>Email Id</label>
          <input type="text" name="email" value={user.email} onChange={handleChange}  />
          {error.email && <span className="error">{error.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="mobile" value={user.mobile} onChange={handleChange}  />
          {error.mobile && <span className="error">{error.mobile}</span>}
        </div>
        <div className="form-group">
          <label>Where Would You Like To Travel</label>
          <input type="text" name="destination" value={user.destination} onChange={handleChange}  />
          {error.destination && <span className="error">{error.destination}</span>}
        </div>
        <div className="form-group">
          <label>The Number Of Travelers</label>
          <input type="text" name="total_no_travelers" value={user.total_no_travelers} onChange={handleChange}  />
          {error.total_no_travelers && <span className="error">{error.total_no_travelers}</span>}
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input type="text" name="departuredate" value={user.departuredate} onChange={handleChange}  />
          {error.departuredate && <span className="error">{error.departuredate}</span>}
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input type="text" name="returndate" value={user.returndate} onChange={handleChange}  />
          {error.returndate && <span className="error">{error.returndate}</span>}
        </div>
        
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Book Now <img src={airplane.src} alt="demo" style={{ width: '28px' }} />
        </button>
      </form>
    </div>
  );
};

export default BookTourForm;


 


