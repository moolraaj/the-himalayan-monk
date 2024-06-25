'use client'
import React from 'react'
import { Watch } from 'react-loader-spinner'

function LoadingSpinner() {
    return (
        <div className='loading_spinner_wrapper'>
            <Watch
                visible={true}
                height="200"
                width="200"
                radius="48"
                color="#F69625"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
           
        </div>
    )
}

export default LoadingSpinner
