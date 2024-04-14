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
    <div className="pagination_wrapper">
      <div className={`action_item ${+skip === 0 && "disable_btn"}`}>
        {+skip > 0 ? (
          <Link href={`?skip=${+skip - 10}`}>prev</Link>
        ) : (
          <p>prev</p>
        )}
      </div>
      <div className="page_item">
          <span>
            {(+skip /10) + 1}
          </span>
      </div>
      <div className={`action_item ${+total === (+skip) + 10 && "disable_btn"}`}>
        {+total === (+skip) + 10 ? (
          <p>next</p>
        ) : (
          <Link href={`?skip=${+skip + 10}`}>next</Link>
        )}
      </div>
    </div>
  );
};

export default CustomPagination;
