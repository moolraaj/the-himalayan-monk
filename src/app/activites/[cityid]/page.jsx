import ActivitesSlug from '@/app/components/activites/components/activitiesSlug'





 
function page({params}) {
  let {cityid}=params
 
  return (
     <>
     <ActivitesSlug id={cityid}/>
     </>
  )
}

export default page


 