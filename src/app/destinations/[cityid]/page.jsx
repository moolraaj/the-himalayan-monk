import CategorySlug from "./components/categorySlug";



function Page({ params }) {
  let { cityid } = params;
   
  
  return (
    <>
      <CategorySlug id={cityid} />
    </>
  );
}

export default Page;

 
