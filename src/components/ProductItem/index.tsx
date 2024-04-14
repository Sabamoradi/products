"useClient";
import "./style.scss";
import Image from "next/image";

const ProductItem = () => {
  return (
    <div className="item_cont">
<div className={"item_wrapper"}>
      <div className="img_wrapper">
        <Image
          src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          width={500}
          height={500}
          alt="img"
        />
      </div>
      <div className="text_wrapper">
        <div className="top">
          <p className="title">name</p>
          <div className="category">
            <span>category name</span>
          </div>
        </div>
        <p className="desc">An apple mobile which is nothing like apple</p>
        <div className="bottom">
            <p className="price">6.56</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
