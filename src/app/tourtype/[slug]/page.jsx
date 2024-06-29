import React from 'react'
// import TourSlug from './component/tourSlug'

function page({params}) {
    let {slug}=params
  return (
     <>
     {/* <TourSlug id={slug}/> */}
     <h1>this is a page</h1>
     </>
  )
}

export default page
