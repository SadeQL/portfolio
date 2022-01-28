import React from "react";
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
    </>
  );
};

export default Layout;
