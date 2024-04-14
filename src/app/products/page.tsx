import ProductList from "@/containers/ProductList";


async function getProductCategory(cat:string | null) {
  
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
    return res.json();
    
  } catch (error) {
    
  }
}

export default async function Products({searchParams }:any) {
  const dataCategory = await getProductCategory(searchParams.cat);
  
  return (
    <>
        <ProductList products={dataCategory} />
    </>
  );
}
