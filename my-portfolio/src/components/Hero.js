import React from "react";
import HeaderBg from "../imgs/header-bg.jpg";
import Logo from "../imgs/logo.png";
/* import "./header.css"; */
import "../index.css";

const Hero = () => {
  return (
    <div className="min-h-screen h-full">
      <div
        className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat opacity-85"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="flex flex-col items-center justify-center sm: mx-12 text-center">
          <h1 className="text-menu text-6xl font-bold leading-relaxed">
            QUENTIN LEE
          </h1>
          <p className="text-txt leading-relaxed">
            Junior Full Stack Developer &amp; ex-marketer based in Paris,
            currently looking for a one-year apprenticeship.
          </p>
          <div className="rounded-md shadow my-5">
            <a
              href="#"
              className="w-full flex items-center justify-center px-5 py-2 border border-transparent font-medium rounded-md text-blue bg-txt hover:bg-menu  md:py-2 md:px-5"
            >
              Get to know me
            </a>
          </div>
        </div>
      </div>
      {/*  <img className="h-auto w-auto" src={HeaderBg} alt="header-bg" /> */}
    </div>
  );
};

export default Hero;
