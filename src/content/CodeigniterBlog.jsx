import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../Layout/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Codeigniter from "../components/icons/Codeigniter";
import Tailwind from "../components/icons/Tailwind";
import Mysql from "../components/icons/Mysql";
import { Link } from "react-router-dom";

export default function CodeigniterBlog() {
  const demo = "https://muhammaddariazzidane-blog.000webhostapp.com/";
  const repo = "https://github.com/muhammaddariazzidane/next-portfolio";
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <div className="grid grid-cols-12  max-w-screen-2xl lg:py-32 pt-6  mx-auto">
          <section className="col-span-10 col-start-2">
            <div className="relative flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-12">
              <div className="w-full lg:w-7/12">
                <h1 className="font-semibold text-xl max-w-xl lg:text-5xl tracking-tight leading-none bg-gradient-to-br from-violet-700 to-violet-300 bg-clip-text text-transparent py-2">Dariazzidane-blog</h1>
                <div className="">
                  <p className="text-slate-500 dark:text-slate-400 leading-rela5ed mt-3 md:mt-6 md:text-lg">ini adalah hasil belajar codeigniter 4 dan ini sejenis blog cms sederhana</p>
                </div>
                <div className="font-mono tracking-tighter text-xs sm:text-sm mt-4">
                  <span className="h-px mt-6 mb-5 w-full hidden md:inline-block bg-gradient-to-r from-violet-300 dark:from-violet-700 via-transparent to-transparent"></span>
                </div>
                <div className="text-slate-500 font-mono dark:text-slate-400 flex flex-col gap-y-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5 [&_svg]:stroke-1 [&_svg]:mr-2">
                  <p className="text-slate-400">Tech : </p>
                  {/* <p>
                    <BeakerIcon className="h-6 w-6 text-blue-500" />
                    React js
                  </p> */}
                  <p>
                    <Codeigniter className="h-5 w-5" />
                    Codeigniter
                  </p>
                  <p>
                    <Tailwind className="h-5 w-5" />
                    Tailwindcss
                  </p>
                  <p>
                    <Mysql className="h-5 w-5" />
                    Mysql
                  </p>
                </div>
                <div className="flex mt-6 gap-3">
                  {/* <Link to={repo} target="_blank" className="p-1 px-4 rounded-full hover:bg-slate-600 transition-all duration-300  bg-slate-500 text-white text-center text-sm ">
                    Repo
                  </Link> */}
                  {/* <Link to={demo} target="_blank" className="p-1 px-4 rounded-full  hover:bg-violet-600 transition-all duration-300 bg-violet-500 text-white text-center text-sm ">
                    Demo
                  </Link> */}
                  <Link
                    to={repo}
                    target="_blank"
                    className="transition-all mt-3 duration-300 cursor-pointer hover:bg-slate-600 ease-in group inline-flex items-center rounded-full px-5 py-2 max-w-[7.4rem] font-medium   dark:text-white  bg-slate-700"
                  >
                    <span className="text-xs">View repo</span>
                    <svg className=" ml-2 -mr-1 stroke-current stroke-[1.5]" fill="none" height="10" width="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                      <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                  </Link>
                  <Link
                    to={demo}
                    target="_blank"
                    className="transition-all mt-3 duration-300 cursor-pointer hover:bg-violet-600 ease-in group inline-flex items-center rounded-full px-5 py-2 max-w-[7.4rem] font-medium   dark:text-white  bg-violet-700"
                  >
                    <span className="text-xs">Live demo</span>
                    <svg className=" ml-2 -mr-1 stroke-current stroke-[1.5]" fill="none" height="10" width="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                      <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-5/12 flex-shrink-0">
                <LazyLoadImage effect="blur" className="w-full shadow-lg shadow-violet-900 rounded-lg sm:max-w-full" src="/img/blogCI4.png" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
