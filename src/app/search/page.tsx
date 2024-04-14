import ProductList from "@/containers/ProductList";
import {useParams} from 'next/navigation';

interface Props{
  searchParams:{
    sp:string
  }
}


async function getProductItem(search:string | null) {
  
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    return res.json();
    
  } catch (error) {
    
  }
}

export default async function search(props:Props) {
    const {searchParams} = props
    const dataProducts = await getProductItem(searchParams.sp);
  console.log(searchParams);
  
  return (
    <>
        <ProductList products={dataProducts} />
    </>
  );
}
