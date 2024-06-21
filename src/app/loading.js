import React from 'react'
import LoadingSpinner from './components/loader/loader'

function loading() {
  return (
    <>
      <div className="page_top" style={{ marginTop: '120px' }}>
        <LoadingSpinner />
      </div>
    </>
  )
}

export default loading

