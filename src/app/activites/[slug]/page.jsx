import ActivitesSlug from '@/app/components/activites/components/activitiesSlug'





 
function page({params}) {
  let {slug}=params
 
  return (
     <>
     <ActivitesSlug id={slug}/>
     </>
  )
}

export default page


 