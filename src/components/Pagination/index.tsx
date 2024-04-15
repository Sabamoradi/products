"use client";
import "./style.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Params {
  skip: string;
}

interface Props {
  total: string;
}

const CustomPagination = (props: Props) => {
  const { total } = props;

  const params = useSearchParams();
  const skip = params.get("skip") || 0;

  return (
    <div className="flex p-2 justify-center">
      <Link href={+skip - 10 === 0 ? '/' : `?skip=${+skip - 10}`} className={`flex items-center justify-center px-4 me-3 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ${+skip === 0 && "disable_btn"}`}>
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <p>
          Previous
        </p>
      </Link>
      <Link href={+total === (+skip) + 10 ? '#' : `?skip=${+skip + 10}`} className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ${+total === (+skip) + 10 && "disable_btn"}`}>
        <p>
          Next
        </p>
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </div>
  );
};

export default CustomPagination;
