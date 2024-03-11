import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block top-bar max-w-full p-2 bg-black backdrop-blur-xl bg-opacity-25 absolute z-50 top-0 left-0 right-0">
        <div className=" mx-auto flex justify-end gap-x-6">
          <div className="flex gap-x-2 items-center align-middle">
            <div className="text-white text-sm">Mon - Frd : 8:00 - 18:00</div>
          </div>
          <div className="flex gap-x-2 items-center align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-gray-100 text-sm">info@metalyapi-inox.com</div>
          </div>
        </div>
      </div>
      <nav className="navbar mt-12 p-4 max-w-[25rem] lg:max-w-[111rem] md:max-w-[111rem] mx-auto bg-transparent absolute rounded-full top-0 left-0 right-0 z-50 ">
        <div className="navbar-start justify-between md:justify-normal">
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
          <ul className="menu menu-horizontal gap-x-4 uppercase font-semibold text-md text-white ">
            <li className="border-animation-white inline-block">
              <a href="/">Home</a>
            </li>
           <li className="border-animation-white inline-block">
              <a href="/">About Us</a>
            </li>
           <li className="border-animation-white inline-block">
              <a href="/">Services</a>
            </li>
           <li className="border-animation-white inline-block">
              <a href="/">Projects</a>
            </li>
           <li className="border-animation-white inline-block">
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
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(5 5)"
                />
              </svg>
              <span className="ml-1 hidden md:block uppercase font-semibold text-xs text-gray-950 ">
                Get in Touch
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
