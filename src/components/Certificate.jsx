import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Certificate() {
  const SlideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 310;
  };
  const SlideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 310;
  };
  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };
  return (
    <>
      <h1 className="text-white text-4xl text-center pb-12 pt-28">My Certificate</h1>
      <div className="max-w-4xl mx-auto relative lg:px-0 px-6">
        <div className="flex w-full  justify-center items-center">
          <MdChevronLeft onClick={SlideLeft} className="lg:w-12 lg:h-12 w-8 h-8 block lg:-left-12 left-0 absolute bg-slate-800 text-violet-200 hover:animate-pulse  rounded-full cursor-pointer z-10" />

          <div id={"slider"} className="w-full  scrollbar-hide h-full overflow-x-scroll scroll whitespace-nowrap">
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href="/img/dicoding.png" className="lg:h-[50%] h-[80%] w-[80%] lg:w-[50%] inline-block cursor-pointer relative p-3">
                <LazyLoadImage className="w-full  h-full object-cover" src="/img/dicoding.png" effect="blur" />
              </a>
              <a href="/img/codefirst.png" className="lg:h-[50%] h-[80%] w-[80%] lg:w-[50%] inline-block cursor-pointer relativ  p-3">
                <LazyLoadImage className="w-full  h-full object-cover" src="/img/codefirst.png" effect="blur" />
              </a>
              <a href="/img/skilvul.png" className="lg:h-[50%] h-[80%] w-[80%] lg:w-[50%] inline-block cursor-pointer relative   p-3">
                <LazyLoadImage className="w-full  h-full object-cover" src="/img/skilvul.png" effect="blur" />
              </a>
              <a href="/img/dea.png" className="lg:h-[50%] h-[80%] w-[80%] lg:w-[50%] inline-block cursor-pointer relative   p-3">
                <LazyLoadImage className="w-full  h-full object-cover" src="/img/dea.png" effect="blur" />
              </a>
            </LightGallery>
          </div>

          <MdChevronRight onClick={SlideRight} className="lg:w-12 lg:h-12 w-8 h-8 block  lg:-right-12 right-0 absolute bg-slate-800 text-violet-200 hover:animate-pulse  rounded-full cursor-pointer z-1" />
        </div>
      </div>
    </>
  );
}
