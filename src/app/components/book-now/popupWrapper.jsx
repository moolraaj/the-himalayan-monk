import React from 'react'
import BookNowForm from './bookNowForm'
import { closeForm, popup_bg } from '@/app/assets/images'

function PopupWrapper({ isShow, setIsShow }) {

    const closePopup = () => {
        setIsShow(false)
    }
    return (
        <>
            {isShow===null? "": isShow && (<div className="book-popup-outer" >
                <div className="book_now_form" style={{ backgroundImage: `url(${popup_bg.src})` }}>
                    <div className="book_now_form_header">
                        <h1>Book A tour</h1>
                        <img className="close_button" onClick={closePopup} src={closeForm.src} alt={closeForm.src} />
                    </div>
                    <div className="book-popupo-inner">
                    <h2>Make an enquiry</h2>
                            <BookNowForm setIsShow={setIsShow}/>
                    </div>
                </div>

            </div>)}
        </>
    )
}

export default PopupWrapper

