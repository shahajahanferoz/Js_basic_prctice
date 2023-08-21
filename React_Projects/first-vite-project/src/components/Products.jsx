import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <Fragment>
      <div>
        <input type="search" placeholder="Search your Product" />
      </div>
      <nav className="product-nav">
        <Link to="Featured"> Featured </Link>
        <Link to="new"> New </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
}
