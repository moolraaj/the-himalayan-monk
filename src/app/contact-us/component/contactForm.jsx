'use client'
import Thankyou from '@/app/_common/thankyou/thankyou';
import { EMAIL_VALIDATORS, ExportAllApis } from '@/utils/apis/apis';
import React, { useState } from 'react';
import { toast } from 'sonner';


const EnquiryForm = () => {
    let api=ExportAllApis()

    let [user, setUser] = useState({
        name: '',
        mobile: '',
        email: '',
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
        }else if(mobile.length!==10){
            valid=false
            errorFields.mobile='max length required is 10' 
        }
        if(!email){
            valid=false
            errorFields.email='email is required'
        }else if(!EMAIL_VALIDATORS.test(email)){
            valid=false
            errorFields.email='enter valid email' 
        }
        
        setErrors(errorFields)
        return valid
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        if(excuteErrors()){
            let formData=new FormData()
            formData.append('name',user.name)
            formData.append('mobile',user.mobile)
            formData.append('email',user.email)
            formData.append('message',user.message)
            formData.append('adminEamil',"sales@eligocs.com")

            let resp=await api.SubmitDestinmationsformData(formData)

            if(resp.status){
                toast.success(<Thankyou name={user.name}/>)
                setUser({
                    name: '',
                    mobile: '',
                    email: '',
                    message: '',
                })
                setErrors({})
            }else{
                toast.error(resp.msg)
            }
           


             

            
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
                    <input type="number" id="phoneNumber" name="mobile" value={user.mobile} onChange={getUserDetails} className="inputField" />
                    {erros.mobile&& <span className='error'>{erros.mobile}</span>}
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={getUserDetails} className="inputField" />
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
