import React from 'react'
import BookNowForm from './bookNowForm'

function PopupWrapper({setIsShow}) {
   
    const closePopup=()=>{
        setIsShow(false)
    }
    return (
        <>
            <div className="book-popup-outer">
            <button className="close_button" onClick={closePopup}>x</button>
                <div className="book-popupo-inner">
                    <div className="book-form-wrapper">

                    <BookNowForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupWrapper

