import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
// import 'react-lazy-load-image-component/src/effects/
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { Twitter } from "feather-icons-react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-12  max-w-screen-2xl lg:py-12 pt-6 scroll-mt-20 mx-auto">
        <section className="col-span-10 col-start-2">
          <div className="relative flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-12">
            <div className="w-full lg:w-7/12">
              <h1 className="font-semibold text-xl max-w-xl lg:text-5xl tracking-tight leading-none text-slate-900 dark:text-white">lorem lorem lorem sndshd hgsdd hash</h1>
              <div className="md:block hidden">
                <p className="text-slate-500 dark:text-slate-400 leading-rela5ed mt-3 md:mt-6 md:text-lg">Dalam artikel kali ini kita akan membahas apa saja yang terbaru dalam laravel dan juga ekosistem nya.</p>
              </div>
              <div className="font-mono tracking-tighter text-xs sm:text-sm mt-4">
                <span className="h-px mt-6 mb-5 w-full hidden md:inline-block bg-gradient-to-r from-violet-300 dark:from-violet-700 via-transparent to-transparent"></span>
              </div>
              <div className="text-slate-500 font-mono dark:text-slate-400 flex  gap-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5 [&_svg]:stroke-1 [&_svg]:mr-2">
                <Link to="https://parsinta.com/" className="scale-125" target="_blank" rel="noreferrer">
                  <FiTwitter className=" text-sky-500" />
                </Link>
                <Link to="https://parsinta.com/" className="scale-125" target="_blank" rel="noreferrer">
                  <FiFacebook className=" text-blue-600" />
                </Link>
                <Link to="https://parsinta.com/" className="scale-125" target="_blank" rel="noreferrer">
                  <FiInstagram className=" text-red-600" />
                </Link>
                <Link to="https://github.com/muhammaddariazzidane/" className="scale-125" target="_blank" rel="noreferrer">
                  <FaGithub className=" text-slate-200" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <LazyLoadImage effect="blur" className="w-full  rounded-lg sm:max-w-full" src="/img/dicoding.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
