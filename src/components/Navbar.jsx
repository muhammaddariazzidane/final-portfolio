import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <>
      <nav className="z-40 bg-slate-900 relative dark:shadow-none  lg:px-[4.2rem] px-4  py-4 ">
        <div className="container mx-auto lg:max-w-screen-2xl flex flex-row items-center justify-between">
          <Link className="mr-3 lg:px-3 flex shrink-0 text-white text-2xl font-semibold items-center focus:outline-none" to="/">
            ZIDANE
          </Link>
          <div className="hidden sm:block md:block lg:block">
            <ul className="flex space-x-7 ">
              <li>
                <a href="#skills" className="text-white transition-all duration-300 p-2 px-3 rounded-md hover:bg-violet-800">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white transition-all duration-300 p-2 px-3 rounded-md hover:bg-violet-800">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition-all duration-300 p-2 px-3 rounded-md hover:bg-violet-800">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white transition-all duration-300 p-2 px-3 rounded-md hover:bg-violet-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button onClick={handleFlip} id="hamburger" type="button" className={flip ? "absolute right-4 block md:hidden sm:hidden lg:hidden hamburger-active" : "absolute right-4 block md:hidden sm:hidden lg:hidden"}>
            {/* <span className=" hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className=" hamburger-line transition duration-300 ease-in-out"></span>
            <span className=" hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span> */}
            <span className=" hamburger-line origin-top-right transition duration-300 ease-in-out"></span>
            <span className=" hamburger-line transition duration-300  ease-in-out"></span>
            <span className=" hamburger-line origin-bottom-right transition duration-300 ease-in-out"></span>
          </button>
        </div>
        <div
          className={`absolute z-[99]  top-16 right-8 max-w-xs w-[45%] font-semibold  rounded-lg p-3 bg-slate-900 border border-violet-900 shadow-sm transition-all duration-700 lg:hidden md:hidden sm:hidden  ${
            flip ? "rotate-0 " : "rotate-180 scale-y-0 transition-all duration-500"
          }`}
        >
          <div className="flex text-center  flex-col gap-y-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5  [&_svg]:stroke-1 [&_svg]:mr-2">
            <a onClick={handleFlip} href="#skills" className="text-violet-200  hover:bg-slate-800 focus:bg-violet-800 rounded-lg p-2 transition-all duration-300 hover:text-white">
              Skills
            </a>
            <a onClick={handleFlip} href="#projects" className="text-violet-200  hover:bg-slate-800 focus:bg-violet-800 rounded-lg p-2 transition-all duration-300 hover:text-white">
              Project
            </a>
            <a onClick={handleFlip} href="#" className="text-violet-200 hover:bg-slate-800 focus:bg-violet-800 rounded-lg p-2 transition-all duration-300 hover:text-white">
              About
            </a>
            <a onClick={handleFlip} href="#contact" className="text-violet-200 hover:bg-slate-800 focus:bg-violet-800 rounded-lg p-2 transition-all duration-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
