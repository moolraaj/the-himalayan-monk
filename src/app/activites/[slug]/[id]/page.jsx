const fetchAllActivitisPackages = async () => {
    let data = await fetch(`http://localhost:4500/allactivitiesTourpackages`);
    let resp = await data.json();
    return resp;
  };
import React from 'react'

function page({params}) {
    let {id}=params
  return (
    <>
    <h1>this is activities details page</h1>
    </>
  )
}

export default page


 