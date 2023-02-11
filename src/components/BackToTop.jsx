import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function BackToTop({ show }) {
  return (
    <>
      <div className={`${show ? "fixed" : "scale-0"} transition-all duration-700 fixed z-[9999] hover:cursor-pointer bottom-4 right-4`}>
        <div className="p-2 shadow-xl bg-violet-700 rounded-full">
          <a href="#">
            <ChevronDoubleUpIcon className="h-8 w-8 text-white hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>
  );
}
