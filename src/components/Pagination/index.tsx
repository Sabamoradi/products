"use client";
import { productItem } from "@/types/type";
import "./style.scss";


const CustomPagination = () => {
  
  return (
    <div className="pagination_wrapper">
      <div className="action_item prev_wrapper">
        prev
      </div>
      <div className="page_item">
          1
      </div>
      <div className="action_item next_wrapper">
        next
      </div>
    </div>
  );
};

export default CustomPagination;
