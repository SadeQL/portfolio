import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";

import Navbar from "./Navbar";
import Project from "./Project";
import TechStacks from "./TechStacks";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStacks />
      <Project />
      <About />
      <Footer />
    </>
  );
};

export default Layout;
