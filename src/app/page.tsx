
import ProductList from "@/containers/ProductList";

async function getProductData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
    
  } catch (error) {

  }
}

export default async function Main() {
  const data = await getProductData();

  return (
    <>
      <ProductList products={data}/>
    </>
  );
}
