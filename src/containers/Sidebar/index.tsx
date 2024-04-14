"use client";

import { useState } from "react";
import "./style.scss";
import Link from "next/link";

interface Props {
  categories: string[];
}
export default function Sidebar(props: Props) {
  const { categories } = props;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button
        className="show-btn"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
      <div className={`sidebar_container ${openMenu && "open_menu"}`}>
        <div className="close-btn" onClick={() => {
          setOpenMenu(false);
        }}>close</div>
        <Link href="/">
          <p>All</p>
        </Link>
        <ul>
          {categories.map((el: string, index: number) => {
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
    </>
  );
}
