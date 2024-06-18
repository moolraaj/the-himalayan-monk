import React from 'react'
import BookNowForm from './bookNowForm'

function PopupWrapper({isShow,setIsShow}) {
   
    const closePopup=()=>{
        setIsShow(false)
    }
    return (
        <>
            {isShow && (<div className="book-popup-outer">
            <button className="close_button" onClick={closePopup}>x</button>
                <div className="book-popupo-inner">
                    <div className="book-form-wrapper">
                        <h1>book a tour</h1>
                    <BookNowForm />
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default PopupWrapper

