import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import LOGO from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#131A26] z-[1001] ">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <div onClick={handleNav} className="block md:hidden mr-4 ">
          {nav ? '<AiOutlineClose size={30} />' : <AiOutlineMenu size={30} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[300px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="p-4">EXPENSE MANAGER</h1>
          <li className="p-4 cursor-pointer ">

            Home

          </li>
          <li className="p-4 cursor-pointer ">

            WebAR

          </li>
          <li className="p-4 cursor-pointer ">

            Services

          </li>
          <li className="p-4 cursor-pointer ">

            About

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;