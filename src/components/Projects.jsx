import React from "react";
import Laravel from "../components/icons/Laravel";
import ReactIcon from "../components/icons/React";
import Tailwind from "../components/icons/Tailwind";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Codeigniter from "../components/icons/Codeigniter";
import Mysql from "../components/icons/Mysql";
import Bootstrap from "../components/icons/Bootstrap";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="mt-20 scroll-mt-20" id="projects">
        <h4 className="text-4xl font-semibold text-center text-violet-100 mb-12">Recent Projects</h4>
      </div>
      <section className="px-6 flex flex-wrap gap-x-12 gap-y-8 lg:gap-y-14 justify-center">
        <div className="w-full lg:w-1/4  shadow-sm  rounded-lg  md:w-1/3 2xl:w-1/5 sm:w-1/2 mx-4 ">
          <div className="overflow-hidden flex flex-col relative h-full">
            <a href="#" className="flex-1">
              <div className="is-visible">
                <LazyLoadImage effect="blur" src="/img/blogCI4.png" alt="" className="aspect-[6/3.33] rounded-lg w-full object-cover object-center shadow-none duration-500 ease-in-out group-hover:shadow-lg " />
                <div className="mt-2  flex gap-x-3 text-blue-600 font-medium text-xs md:text-sm  flex-wrap items-center ">
                  <div className="h-[1.85rem] w-[1.85rem]">
                    <Codeigniter />
                  </div>
                  <div className="h-[1.85rem] w-[1.85rem]">
                    <Tailwind />
                  </div>
                  <div className="h-[1.85rem] w-[1.85rem]">
                    <Mysql />
                  </div>
                </div>
                <h2 className="dark:text-slate-200  max-w-sm text-base font-medium leading-tight mt-2 truncate">Dariazzidane-blog</h2>
                <div className="dark:text-slate-400  leading-relaxed md:line-clamp-3 mt-2 text-sm lg:mt-3">ini adalah hasil belajar codeigniter 4 dan ini sejenis blog cms sederhana</div>
              </div>
            </a>

            <Link to="/CI4" className="transition-all mt-3 duration-300 cursor-pointer hover:bg-violet-600 ease-in group inline-flex items-center rounded-full px-5 py-2 max-w-[7.4rem] font-medium   dark:text-white  bg-violet-800">
              <span className="text-xs">View detail</span>
              <svg className=" ml-2 -mr-1 stroke-current stroke-[1.5]" fill="none" height="10" width="10" viewBox="0 0 10 10" aria-hidden="true">
                <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
