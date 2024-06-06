import React from 'react'
 

import right2 from '@/app/assets/herosection/img5.png'
import right3 from '@/app/assets/herosection/img6.png'
import right4 from '@/app/assets/herosection/img7.png'
import right1 from '@/app/assets/herosection/img8.png'
import heroimg from '@/app/assets/herosection/hero_background.png'
import Image from 'next/image'
 



function Herosection() {

    return (
        <>



            <div className="hero_section_outer">
                <div className="slider_wrapper">
                    <Image src={heroimg} alt="this is image"  style={{width:'100%', height:'100%'}}/>

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
                                <Image src={right1} alt="destination" style={{width:'100%', height:'100%'}}/>
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Manali</h1>
                                <Image src={right2} alt="destination" style={{width:'100%', height:'100%'}}/>
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Kufri Shimla</h1>
                                <Image src={right3} alt="destination" style={{width:'100%', height:'100%'}}/>
                            </div>
                            <div className="hero_destination_outer">
                                <h1>Narkanda</h1>
                                <Image src={right4} alt="destination" style={{width:'100%', height:'100%'}}/>
                            </div>


                        </div>
                        
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Herosection
