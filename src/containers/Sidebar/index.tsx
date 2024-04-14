import "./style.scss";
import Link from "next/link";

async function getProductCategory() {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    return res.json();
    
  } catch (error) {
    
  }

}

export default async function Sidebar() {
  const dataCategory = await getProductCategory();

  return (
    <div className="sidebar_container">
      <ul>
        {dataCategory.map((el: string,index:number) => {
          return (
            <li className="sidebar_item" key={`${index}-s`}>
              <Link href={`/products?cat=${el}`}>
                <p>{el}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
