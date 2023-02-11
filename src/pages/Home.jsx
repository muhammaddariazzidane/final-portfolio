import React, { useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import { BeakerIcon } from "@heroicons/react/24/solid";

import Layout from "../Layout/Layout";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Certificate from "../components/Certificate";
// const Skills = React.lazy(() => import("../components/Skills"));

export default function Home() {
  return (
    <>
      <Layout>
        <div className="relative py-8 sm:py-16 lg:py-20 xl:py-24">
          {/* skills */}
          {/*  */}

          {/*  */}
          <div className="container mx-auto">
            <Hero />
            {/* <Suspense fallback={<div className="py-44 mx-auto text-center text-4xl text-red-600">loading cuyyy</div>}> */}
            <Skills />
            {/* </Suspense> */}
            <Projects />

            <Certificate />
            <Contact />
          </div>
          {/*  */}
        </div>
      </Layout>
    </>
  );
}
