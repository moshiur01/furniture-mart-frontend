import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-12 drop-shadow-lg sm:py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Products</a>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="ml-10 text-nowrap text-sm font-bold text-[#054C73] sm:text-4xl sm:leading-10"
        >
          FURNITURE MART
        </Link>
      </div>

      {/* for lg devices  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>

      {/* avatar  */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-8 rounded-full sm:w-10">
              <img alt="avatar" src={avatar} className="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>

            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
