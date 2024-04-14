
import CustomPagination from "@/components/Pagination";
import ProductList from "@/containers/ProductList";


interface Props{
  searchParams:{
    skip:string
  }
}

async function getProductData(skip:string | null = "10") {
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    return res.json();
    
  } catch (error) {

  }
}

export const revalidate = 0

export default async function Main(props:Props) {
  const {searchParams} = props
  const data = await getProductData(searchParams?.skip);
  

  return (
    <>
      <ProductList products={data}/>
      <CustomPagination total={data?.total} />
    </>
  );
}
