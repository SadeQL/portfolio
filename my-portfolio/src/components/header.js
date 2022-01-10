import React from "react";
import HeaderBg from "../imgs/header-bg.jpg";
import Logo from "../imgs/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-box">
          <a href="#">
            <img src={Logo} className="logo" />
          </a>
        </div>
        <ul className="right-box">
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-text">
        <h1>QUENTIN LEE</h1>
        <p>
          Junior full-stack developer &amp; ex-marketer based in Paris,
          currently looking for a one-year apprenticeship.
        </p>
        <div className="header-btn">
          <a href="#">GET TO KNOW ME</a>
        </div>
      </div>
    </>
  );
};

export default Header;
