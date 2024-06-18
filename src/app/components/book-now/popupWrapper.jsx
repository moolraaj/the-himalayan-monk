import React from 'react'
import BookNowForm from './bookNowForm'

function PopupWrapper() {
    return (
        <>
            <div className="book-popup-outer">
            <button className="close_button">Close</button>
                <div className="book-popupo-inner">
                    <BookNowForm />
                </div>
            </div>
        </>
    )
}

export default PopupWrapper

