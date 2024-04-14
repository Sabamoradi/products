import ProductList from "@/containers/ProductList";
import {useParams} from 'next/navigation';

interface Props{
    params:{
        category:string
    }
}


async function getProductCategory(cat:string | null) {
  
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
    return res.json();
    
  } catch (error) {
    
  }
}

export default async function Products(props:Props) {
    const {params} = props
    const dataCategory = await getProductCategory(params.category);
  
  return (
    <>
        <ProductList products={dataCategory} />
    </>
  );
}
