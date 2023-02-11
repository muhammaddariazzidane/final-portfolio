import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Bootstrap from "./icons/Bootstrap";
import Codeigniter from "./icons/Codeigniter";
import Css from "./icons/Css";
import Html from "./icons/Html";
import Js from "./icons/Js";
import Laravel from "./icons/Laravel";
import Mysql from "./icons/Mysql";
import Php from "./icons/Php";
import ReactIcon from "./icons/React";
import Tailwind from "./icons/Tailwind";
import { FaPhp } from "react-icons/fa";
import { Animated } from "react-animated-css";

export default function Skills() {
  return (
    <>
      {/* <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}> */}
      <div className="pb-8 lg:mt-44 px-14 mt-28 scroll-mt-20" id="skills">
        <h4 className="text-4xl font-semibold text-center text-violet-100 mb-12">My Skills</h4>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mb-12 ">
          <div>
            <div className="p-6 shadow-sm shadow-orange-600 hover:shadow-md hover:shadow-orange-600 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Html />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">HTML 5</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-sky-500 hover:shadow-md hover:shadow-sky-500 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Css />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">CSS 3</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-yellow-400 hover:shadow-md hover:shadow-yellow-400 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Js />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">Javacript</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-[#6181B6] hover:shadow-md hover:shadow-[#6181B6] w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10 text-[#6181B6]">
                    <FaPhp size={"3.2em"} />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">PHP</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-violet-800 hover:shadow-md hover:shadow-violet-800 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    {/* <SiBootstrap size={"3.1em"} /> */}
                    <Bootstrap />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">Bootstrap</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-teal-400 hover:shadow-md hover:shadow-teal-400 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Tailwind />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-[#DC2626] hover:shadow-md hover:shadow-[#DC2626] w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Codeigniter />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">Codeigniter</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-cyan-400 hover:shadow-md hover:shadow-cyan-400 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <ReactIcon />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">React js</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-red-600 hover:shadow-md hover:shadow-red-600 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Laravel />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">Laravel</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 shadow-sm shadow-orange-600 hover:shadow-md hover:shadow-orange-600 w-30 h-[6rem] bg-slate-900  rounded-xl hover:scale-105 ease-in-out duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto max-w-[3rem] ">
                  <div className="h-10 w-10">
                    <Mysql />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-center">
                  <h3 className="text-violet-100 font-semibold italic">MYSQL</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Animated> */}
    </>
  );
}
