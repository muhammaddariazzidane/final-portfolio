import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
// import 'react-lazy-load-image-component/src/effects/
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { Twitter } from "feather-icons-react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaGithub, FaYoutube } from "react-icons/fa";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Hero() {
  const onInit = () => {};
  return (
    <>
      <div className="grid grid-cols-12  max-w-screen-2xl lg:py-16 pt-24 scroll-mt-20 mx-auto">
        <section className="col-span-10 col-start-2">
          <div className="relative flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-12">
            <div className="w-full lg:mt-12 lg:w-7/12">
              <h1 className="font-semibold lg:text-4xl max-w-xl text-3xl tracking-tight leading-none text-slate-900 dark:text-white">
                Muhammad Dariaz Zidane
                <br />
                <span className="lg:mt-0 mt-3 block">
                  Front-end Web <span className="text-violet-500">Developer</span>{" "}
                </span>
              </h1>
              <div className="">
                <p className="text-slate-500 dark:text-slate-400 leading-rela5ed mt-3 md:mt-6 md:text-lg">
                  Halo👋, saya Zidan, saya mahasiswa di universitas bina sarana informatika karawang yang suka coding, musik, dan bermain game. Selamat datang di situs web pribadi saya{" "}
                </p>
              </div>
              <div className="font-mono tracking-tighter text-xs sm:text-sm mt-4">
                <span className="h-px mt-6 mb-5 w-full hidden md:inline-block bg-gradient-to-r from-violet-300 dark:from-violet-700 via-transparent to-transparent"></span>
              </div>
              <div className="text-slate-500 font-mono dark:text-slate-400 flex  gap-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5 [&_svg]:stroke-1 [&_svg]:mr-2">
                <Link to="https://twitter.com/" className="" target="_blank" rel="noreferrer">
                  <FiTwitter className=" text-sky-500 scale-150" />
                </Link>
                <Link to="https://web.facebook.com/m.zidan.186/" className="" target="_blank" rel="noreferrer">
                  <FiFacebook className=" text-blue-600 scale-150" />
                </Link>
                <Link to="https://www.instagram.com/dzm416/" className="" target="_blank" rel="noreferrer">
                  <FiInstagram className=" text-red-600 scale-150" />
                </Link>
                <Link to="https://github.com/muhammaddariazzidane/" className="" target="_blank" rel="noreferrer">
                  <FaGithub className=" text-slate-200 scale-150" />
                </Link>
                <Link to="https://www.youtube.com/@zidaneuchiha1554" className="" target="_blank" rel="noreferrer">
                  <FaYoutube className=" text-red-600 scale-150" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12 relative flex justify-center flex-shrink-0">
              <svg className="absolute -bottom-8 scale-125 right-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M37.1,23.8C25.1,42.1,-23.3,41.7,-35.5,23.3C-47.8,4.8,-23.9,-31.8,0.3,-31.6C24.5,-31.5,49,5.5,37.1,23.8Z" transform="translate(100 100)" />
              </svg>
              <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500} onInit={onInit}>
                <a href="/img/pp.png" className="">
                  <LazyLoadImage effect="blur" className="w-full  h-[21rem]  sm:max-w-full" src="/img/pp.png" alt="/" />
                </a>
              </LightGallery>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
