import React, { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 250) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className="relative">
        <Navbar />
        {/* <div> */}
        <div className="relative min-h-screen w-full bg-[#0B1120] sm:items-center py-4 sm:pt-0">{children}</div>
        {/* </div> */}
        {/* relative flex w-full justify-center */}
        <div className="w-full absolute bottom-0 py-4 bg-slate-900">
          <p className="text-center text-violet-100 text-sm">@copyright 2023. All right reserved</p>
        </div>
        <BackToTop show={show} />
      </div>
    </>
  );
}
