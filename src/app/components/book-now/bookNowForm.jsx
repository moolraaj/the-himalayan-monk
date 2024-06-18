'use client'

import React, { useState } from 'react'

function BookNowForm() {

    let [user,setUser]=useState({
        name:'',
        email:'',
        mobile:'',
        total_no_travelers:'',
        adminEamil:'',
        message:'',
        

    })
   

    const getUserDetails=(e)=>{
        let {name,value}=e.target
        setUser({user,[name]:value})
     


    }



    const submitUserQuery=()=>{
 


        

      
        setUser({
            name:'',
            email:'',
            mobile:'',
            total_no_travelers:'',
            adminEamil:'',
            message:'',
            
    
        })
  

        
    }
    

  return (
    <>
    <div className="book-form-wrapper">

        <div className="book-form_fields">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" name='name' value={user.name} onChange={getUserDetails}/>
             
        </div>

        <div className="book-form_fields">
            <label htmlFor="email">Email Id</label>
            <input type="text" name='email' value={user.email} onChange={getUserDetails}/>
            
        </div>

        <div className="book-form_fields">
            <label htmlFor="phone">Phone No</label>
            <input type="text" name='mobile' value={user.mobile} onChange={getUserDetails}/>
             
        </div>

        <div className="book-form_fields">
            <label htmlFor="num-of-travelers">Number Of Travelers</label>
            <input type="text" name='total_no_travelers' value={user.total_no_travelers} onChange={getUserDetails}/>
        </div>

        <div className="book-form_fields">
            <label htmlFor="message">Enter Your Message</label>
            <input type="text" name='message' value={user.message} onChange={getUserDetails}/>
        </div>

        <div className="book-form_button">
            <button onClick={submitUserQuery}>Book Now</button>
        </div>

    </div>
    </>
  )
}

export default BookNowForm
