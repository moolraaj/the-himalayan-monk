import React from 'react';
import search from '../../../assets/headerAssets/search.png';
import call from '../../../assets/headerAssets/call.png';
import logo from '../../../assets/headerAssets/logo.png';
import window from '../../../assets/headerAssets/window.png';




function Headercustom() {
    return (
    <>
     <div className='header_custom_main'>
       <div className='header_i_sec'>
        <div className='logo_r_section'>
            <img src={logo.src}/>

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
             <img src={search.src}></img>
             <img src={window.src}/>
        </div>
        <div className='header_number'>
            <div className='number_header_c'>
                <img src={call.src}></img>
            </div>
            <div className='more_enquiery'>
                <p>To More Inquiry</p>
                <a className='tel_header_c' href='tel:+98167 88165'>+98167 88165</a>
            </div>
        </div>
       </div>
       </div> 

     </div>



    </>
    )
}

export default Headercustom