import CategorySlug from "./components/categorySlug";

const fetchAllDestinationsPackages = async () => {
  let data = await fetch(`http://localhost:4500/destinationInnerData`);
  let resp = await data.json();
  return resp;
};

function Page({ params }) {
  let { category } = params;
  
  return (
    <>
      <CategorySlug category={category} />
    </>
  );
}

export default Page;

 
