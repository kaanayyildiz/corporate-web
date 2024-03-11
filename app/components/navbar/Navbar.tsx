import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="navbar mt-4 p-4 max-w-[111rem] mx-auto bg-transparent absolute backdrop-blur-xl rounded-full top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-4 uppercase font-semibold text-md text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-3">
          {/* <div className="search">
            <form action="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 21 21"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8.5" cy="8.5" r={5} />
                  <path d="m17.571 17.5-5.571-5.5" />
                </g>
              </svg>
            </form>
          </div> */}
          <div className="get-in-touch flex items-center bg-white rounded-full p-3">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 21 21"
              >
                <path
                  d="m3.49859901.50058486-2 .00245141c-.55180573.00067635-.9987743.4481931-.9987743.99999924v1.99673096c0 .51283584.38604019.93550716.88337888.99327227l.11784682.00672698 2-.00245141c.55180573-.00067635.9987743-.4481931.9987743-.99999925v-1.9967302c0-.51283659-.38604019-.93550791-.88337887-.99327302zm6 0-2 .00245141c-.55180573.00067635-.9987743.4481931-.9987743.99999924v1.99673096c0 .51283584.38604019.93550716.88337888.99327227l.11784682.00672698 2-.00245141c.55180569-.00067635.99877429-.4481931.99877429-.99999925v-1.9967302c0-.51283659-.3860402-.93550791-.88337886-.99327302zm-6 6-2 .00245141c-.55180573.00067635-.9987743.4481931-.9987743.99999924v1.99673096c0 .51283583.38604019.93550713.88337888.99327223l.11784682.006727 2-.0024514c.55180573-.0006763.9987743-.4481931.9987743-.99999924v-1.9967302c0-.51283659-.38604019-.93550791-.88337887-.99327302zm6 0-2 .00245141c-.55180573.00067635-.9987743.4481931-.9987743.99999924v1.99673096c0 .51283583.38604019.93550713.88337888.99327223l.11784682.006727 2-.0024514c.55180569-.0006763.99877429-.4481931.99877429-.99999924v-1.9967302c0-.51283659-.3860402-.93550791-.88337886-.99327302z"
                  fill="none"
                  stroke='#000000'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(5 5)"
                />
              </svg>
              <span className="ml-1 hidden md:block uppercase font-semibold text-xs text-gray-600 ">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
