import React from 'react'
import LoadingSpinner from './components/loader/loader'

function loading() {
  return (
    <>
      <div className="loading_spinner" style={{display: 'flex',alignItems: 'center',justifyContent:'center' }}>
        <LoadingSpinner />
      </div>
    </>
  )
}

export default loading

