import React from 'react'
import heroimg from '../../../assets/herosection/hero_background.png'

import right2 from '@/app/assets/herosection/img5.png'
import right3 from '@/app/assets/herosection/img6.png'
import right4 from '@/app/assets/herosection/img7.png'
import right1 from '@/app/assets/herosection/img8.png'



function Herosection() {

    return (
        <>



            <div className="hero_section_outer">
                <div className="slider_wrapper">
                    <img src={heroimg.src} alt="" />

                </div>
                <div className="hero_section_inner">
                    <div className="hero_wrapper">

                        <div className="hero_left_section">
                            <h1>Let’s Explore Your
                                <span style={{ color: '#F69625' }}> Holiday</span> Trip.</h1>
                            <p>This is the story of our travels. A travel blog with the moments that moved us, people we met and the destinations in which we lived these experiences. There is a huge world, come discover it with us!
                            </p>
                            <button type='button'>book a trip</button>

                        </div>
                        <div className="hero_right_section">
                            <div className="hero_destination_outer">
                                <h1>leh ladakh</h1>
                                <img src={right1.src} alt="destination" />
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Manali</h1>
                                <img src={right2.src} alt="destination" />
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Kufri Shimla</h1>
                                <img src={right3.src} alt="destination" />
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Narkanda</h1>
                                <img src={right4.src} alt="destination" />
                            </div>


                        </div>
                        
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Herosection
