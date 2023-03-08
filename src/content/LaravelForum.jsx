import React from "react";
import Layout from "../Layout/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tailwind from "../components/icons/Tailwind";
import Mysql from "../components/icons/Mysql";
import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Laravel from "./../components/icons/Laravel";
import Alpine from "../components/icons/Alpine";

export default function LaravelForum() {
  const demo = "https://whyngebull.000webhostapp.com/";
  const repo = "https://github.com/muhammaddariazzidane/laravel-9-forum";
  const onInit = () => {};
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <div className="grid grid-cols-12 max-w-screen-2xl lg:py-32 pt-24  mx-auto">
          <section className="col-span-10  col-start-2">
            <div className="relative flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-12">
              <div className="w-full lg:w-7/12">
                <h1 className="font-semibold text-xl max-w-xl lg:text-5xl tracking-tight leading-none bg-gradient-to-br from-violet-700 to-violet-300 bg-clip-text text-transparent py-2">WhyNgebull-app</h1>
                <div className="">
                  <p className="text-slate-500 dark:text-slate-400 leading-rela5ed mt-3 md:mt-6 md:text-lg">
                    Project ini terinspirasi dari stackoverflow, lalu saya belajar laravel 9 dan coba untuk membuat sebuah forum sederhana dengan menggunakan beberapa ekosistem dari laravel yaitu laravel, breeze, socialite, scout dan third
                    party laravel-turbolinks, laravel-notify
                  </p>
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
                    <Laravel className="h-5 w-5" />
                    Laravel
                  </p>
                  <p>
                    <Tailwind className="h-5 w-5" />
                    Tailwindcss
                  </p>
                  <p>
                    <Alpine className="h-5 w-5" />
                    Alpine js
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
              <div className="w-full lg:w-5/12 h-full flex-shrink-0 ">
                <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <a href="/img/forumLaravel9.png">
                    <LazyLoadImage effect="blur" className="w-full shadow-md  shadow-violet-900 rounded-lg sm:max-w-full" src="/img/forumLaravel9.png" />
                  </a>
                </LightGallery>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
