import CategorySlug from "./components/categorySlug";

const fetchAllDestinationsPackages = async () => {
  let data = await fetch(`http://localhost:4500/destinationInnerData`);
  let resp = await data.json();
  return resp;
};

function Page({ params }) {
  let { category } = params;
  console.log(category);
  return (
    <>
      <CategorySlug category={category} />
    </>
  );
}

export default Page;

export async function generateStaticParams() {
  let result = await fetchAllDestinationsPackages();
  return result.map((ele) => ({
    category: ele.id.toString(),
  }));
}