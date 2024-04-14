
import CustomPagination from "@/components/Pagination";
import ProductList from "@/containers/ProductList";

async function getProductData() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    return res.json();
    
  } catch (error) {

  }
}

export default async function Main() {
  const data = await getProductData();

  return (
    <>
      <ProductList products={data}/>
      {/* <CustomPagination /> */}
    </>
  );
}
