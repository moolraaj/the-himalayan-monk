import React from 'react'
import ActivitiesPackages from './activitiesSlugInner'

function ActivitesSlug({id}) {

  console.log(id)

  return (
     <>
    <ActivitiesPackages id={id}/>
     </>
  )
}

export default ActivitesSlug