import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeigniterBlog from "./content/CodeigniterBlog";
import Home from "./pages/Home";

// const Home = lazy(() => import("./pages/Home"));
// const CodeigniterBlog = lazy(() => import("./content/CodeigniterBlog"));

export default function App() {
  return (
    <>
      <Router>
        {/* <Suspense fallback={<div className="text-4xl text-red-600 text-center py-44">Loading...</div>}> */}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/ci4" element={<CodeigniterBlog />} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </>
  );
}
