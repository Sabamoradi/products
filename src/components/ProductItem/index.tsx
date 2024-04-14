"use client";
import { productItem } from "@/types/type";
import "./style.scss";
import Image from "next/image";


interface Props{
  item:productItem
}

const ProductItem = (props:Props) => {
  const {item} = props
  
  return (
    <div className="item_cont">
     <div className={"item_wrapper"}>
      <div className="img_wrapper">
        <img
          src={item.thumbnail}
          alt="img"
        />
      </div>
      <div className="text_wrapper">
        <div className="top_wrap">
        <div className="top">
          <p className="title">{item.title}</p>
          <div className="category">
            <span>{item.category}</span>
          </div>
        </div>
        <p className="desc">{item.description}</p>
        </div>
        <div className="bottom">
            <p className="price">{item.price}$</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
