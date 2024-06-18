import React from 'react'

function BookNowForm() {
  return (
    <>
    <div className="book-form-wrapper">

        <div className="book-form_fields">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" value='' />
        </div>

        <div className="book-form_fields">
            <label htmlFor="email">Email Id</label>
            <input type="text" value='' />
        </div>

        <div className="book-form_fields">
            <label htmlFor="phone">Phone No</label>
            <input type="text" value='' />
        </div>

        <div className="book-form_fields">
            <label htmlFor="num-of-travelers">Number Of Travelers</label>
            <input type="text" value='' />
        </div>

        <div className="book-form_fields">
            <label htmlFor="message">Enter Your Message</label>
            <input type="text" value='' />
        </div>

        <div className="book-form_button">
            <button>Book Now</button>
        </div>

    </div>
    </>
  )
}

export default BookNowForm
