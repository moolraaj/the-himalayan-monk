'use client'
import React, { useState } from 'react';


const EnquiryForm = () => {

    let [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    })
    let [erros, setErrors] = useState({})

    const getUserDetails = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
        setErrors({...erros,[name]:''})
    }

   

    const excuteErrors = () => {
        let { name, mobile, email } = user
        let valid = true
        let errorFields = {}
        if(!name){
            valid =false
            errorFields.name ='name is required'
        }
        if(!mobile){
            valid=false
            errorFields.mobile='phone number is required'
        }
        if(!email){
            valid=false
            errorFields.email='email is required'
        }
        
        setErrors(errorFields)
        return valid
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(excuteErrors()){

            console.log(user)
        }
    }





    return (
        <form className="enquiryForm" >
            <h4>Make An Enquiry</h4>
            <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={user.name} onChange={getUserDetails} className="inputField" />
                {erros.name && <span className='error'>{erros.name}</span>}
            </div>
            <div className='both_middle_form'>
                <div className="formGroup">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="mobile" value={user.mobile} onChange={getUserDetails} className="inputField" />
                    {erros.mobile&& <span className='error'>{erros.mobile}</span>}
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={user.email} onChange={getUserDetails} className="inputField" />
                    {erros.email&& <span className='error'>{erros.email}</span>}
                </div>
            </div>
            <div className="formGroup">
                <label htmlFor="message">Enter your message</label>
                <textarea id="message" name="message" value={user.message} onChange={getUserDetails} className="textareaField"></textarea>
            </div>
            <div className='submit_custom'>
                <button className="submitButton" onClick={submitHandler}>Submit Now</button>
            </div>
        </form>
    );
};

export default EnquiryForm;
