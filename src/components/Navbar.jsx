import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-light">
      <h1 className="w-full text-3xl text-[#33d3a0]">React.</h1>
      <ul className="hidden md:flex">
        <a href="http://">
          <li className="p-4">Home</li>
        </a>
        <a href="http://">
          <li className="p-4">Company</li>
        </a>
        <a href="http://">
          <li className="p-4">Resources</li>
        </a>
        <a href="http://">
          <li className="p-4">About</li>
        </a>
        <a href="http://">
          <li className="p-4">Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <h1 className="w-full text-3xl text-[#33d3a0] m-4">React.</h1>
        <ul className="pt-4 uppercase">
          <a href="http://">
            <li className="p-4 border-b border-gray-600">Home</li>
          </a>
          <a href="http://">
            <li className="p-4 border-b border-gray-600">Company</li>
          </a>
          <a href="http://">
            <li className="p-4 border-b border-gray-600">Resources</li>
          </a>
          <a href="http://">
            <li className="p-4 border-b border-gray-600">About</li>
          </a>
          <a href="http://">
            <li className="p-4">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
