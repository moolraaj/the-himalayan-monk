import React from 'react'

function WaysVehicles({vehicles}) {
  return (
    <>
    <div className="vehicles_outer">
        <div className="vehicles_inner">
    <div className="vehicles_wrapper">
        {
            vehicles?.map((ele,index)=>{
                return <div key={index} className='vehicles'>
                    <h1>{ele.name}</h1>
                    <img src={ele.image} alt={ele.name}/>
                </div>
            })
        }
    </div>

        </div>
    </div>
    </>
  )
}

export default WaysVehicles
