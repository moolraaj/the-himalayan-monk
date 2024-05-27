import React from 'react';
import call from '../../../assets/headerAssets/call.png';




function Headercustom() {
    return (
    <>
     <div className='header_custom_main'>
        <div className='logo_r_section'>
            <img src='./assets/logo.png'></img>


        </div>

        <div className='navbar_c_section'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Destination</li>
                <li>Activities</li>
                <li>Ways to Travel</li>

            </ul>
        </div>

       <div className='enquiry_s_number'>
        <div className='search_e'>
             <img src=''></img>
             <img src=''></img>
        </div>
        <div className='header_number'>
            <div className='number_header_c'>
                <img src='#'></img>
            </div>
            <div className='more_enquiery'>
                <p>To More Inquiry</p>
                <a className='tel_header_c' href='tel:+98167 88165'>+98167 88165</a>
            </div>
        </div>
       </div>


     </div>



    </>
    )
}

export default Headercustom