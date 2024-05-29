import { FaAngleDown } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Listed = () => {
  return (
    <div>
      <h1
        style={{ background: "#9092915c" }}
        className="rounded-xl py-14 text-6xl font-bold mt-12"
      >
        Books
      </h1>
      <details className="dropdown">
        <summary className="m-1 btn btn-lg btn-success my-5">
          Sort By <FaAngleDown />
        </summary>
        <ul
          className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 text-center bg-gray-700"
          style={{ left: "-30px" }}
        >
          <li className="text-center text-lg border-b-2 mx-4 py-2">Rating</li>
          <li className="text-center text-lg border-b-2 mx-4 py-2">
            Number of Pages
          </li>
          <li className="text-center text-lg  mx-4 py-2">Published Year</li>
        </ul>
      </details>

      <div className="tabss mb-12 border-gray-400 border-b-2 mt-12 text-left">
        <NavLink to='/lists/readlist' className="tablink">Read Books</NavLink>
        <NavLink to='/lists/wishlist' className="tablink wish">Wishlist Books</NavLink>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Listed;
