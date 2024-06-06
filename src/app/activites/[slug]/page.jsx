import ActivitesSlug from '@/app/components/activites/components/activitiesSlug'


const loadActivitiesPlaces=async()=>{
  let resp=await fetch(`http://localhost:4500/activitiesPlacesData`)
  let data=await resp.json()
  return data
}


 
function page({params}) {
  let {slug}=params
 
  return (
     <>
     <ActivitesSlug id={slug}/>
     </>
  )
}

export default page


export async function generateStaticParams() {
  let result = await loadActivitiesPlaces();
  return result.map((ele) => {
    return {
      slug: ele.id.toString()
    };
  });
}