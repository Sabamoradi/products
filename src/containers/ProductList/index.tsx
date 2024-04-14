'use client'
import ProductItem from "@/components/ProductItem";
import { productItem, products } from "@/types/type";
import './style.scss'
interface Props{
  products:products
}


export default function ProductList(props:Props) {
  const {products} = props
  

  return (
    <div className="wrapper">
      { products?.products.map((el: productItem) => {
        return <ProductItem key={el.id} item={el} />;
      })}
    </div>
  );
}
