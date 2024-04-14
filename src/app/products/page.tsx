import ProductList from "@/containers/ProductList";


async function getProductCategory(cat:string) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
    console.log(res);
    
    return res.json();
    
  } catch (error) {
    
  }
}

export default async function Products({searchParams }:any) {
  const dataCategory = await getProductCategory(searchParams.cat);
  console.log(dataCategory);
  
  return (
    <>
        {/* <ProductList products={dataCategory} /> */}
    </>
  );
}
