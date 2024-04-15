"use client";

import { useState } from "react";
import "./style.scss";
import Link from "next/link";
import { useParams } from 'next/navigation';


interface Props {
  categories: string[];
}
export default function Sidebar(props: Props) {
  const { categories } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const { category } = useParams();
  

  return (
    <>
      <button
        className="mobile_menu"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <div>
          <button className="relative group">
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
                <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75"></div>
                <div className="bg-white h-[1px] rounded"></div>
                <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75"></div>
              </div>
            </div>
          </button>
        </div>
      </button>
      <div className={`sidebar_container ${openMenu && "open_menu"}`}>
        <button type="button"  onClick={() => {setOpenMenu(false);}} className="flex items-center justify-end text-gray-400 focus:outline-none close-btn">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <Link href="/">
          <p>All</p>
        </Link>
        <ul>
          {categories?.map((el: string, index: number) => {
            return (
              <li className="sidebar_item" key={`${index}-s`}>
                <Link href={`/${el}`}>
                  <p className={`${category === el && 'active_side'}`}>{el}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
