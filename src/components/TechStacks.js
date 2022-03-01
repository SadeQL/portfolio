import React from "react";
import cssImg from "../imgs/css.png";
import jsImg from "../imgs/js.png";
import htmlImg from "../imgs/html.png";
import nodeImg from "../imgs/node.png";
import goImg from "../imgs/go.png";
import pythonImg from "../imgs/python.png";
import reactImg from "../imgs/react.png";
import sqlImg from "../imgs/sql.png";

const TechStacks = () => {
  return (
    <>
      <div className="mb-16" id="stacks">
        <dh-component>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                STACKS
              </h1>
            </div>
          </div>

          <ul className="mb-16 flex md:w-full w-5/6 mx-auto">
            <li className="container mx-auto pt-10">
              <h2 className="text-3xl text-center text-gray-800 font-bold pb-6">
                Front End
              </h2>

              <ul className="container flex justify-around text-center mx-auto pt-5 lg:w-4/6 md:w-full">
                <li className="align-center">
                  <img src={htmlImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">HTML5</p>
                </li>
                <li className="align-center">
                  <img src={cssImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">CSS3</p>
                </li>
                <li className="align-center">
                  <img src={jsImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">JavaScript</p>
                </li>
                <li className="align-center">
                  <img
                    src={reactImg}
                    className="h-12 w-auto md:min-w-fit"
                  ></img>
                  <p className="text-center">ReactJS</p>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="mb-16 flex md:w-full w-5/6 mx-auto">
            <li className="container mx-auto pt-10">
              <h2 className="text-3xl text-center text-gray-800 font-bold pb-6">
                Back End
              </h2>

              <ul className="container flex justify-around mx-auto pt-5 lg:w-4/6 md:w-full">
                <li>
                  <img src={nodeImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p>NodeJS</p>
                </li>
                <li>
                  <img src={goImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p>Golang</p>
                </li>
                <li>
                  <img
                    src={pythonImg}
                    className="h-12 w-auto md:min-w-fit"
                  ></img>
                  <p className="text-center">Python</p>
                </li>
                <li>
                  <img src={sqlImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">SQL</p>
                </li>
              </ul>
            </li>
          </ul>

          {/* 
          <div className="mb-16 flex md:w-full w-5/6 mx-auto">
            <div className="container mx-auto pt-10">
              <h2 className="text-3xl text-center text-gray-800 font-bold pb-6">
                Front End
              </h2>

              <div className="container flex justify-around mx-auto pt-5 lg:w-4/6 md:w-full">
                <div>
                  <img src={htmlImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p>HTML5</p>
                </div>
                <div>
                  <img src={cssImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p>CSS3</p>
                </div>
                <div>
                  <img src={jsImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">JavaScript</p>
                </div>
                <div>
                  <img src={reactImg} className="h-12 w-auto md:min-w-fit"></img>
                  <p className="text-center">ReactJS</p>
                </div>
              </div>
            </div>

            <div className="mb-16 flex md:w-full w-5/6 mx-auto">
              <div className="container mx-auto pt-10">
                <h2 className="text-3xl text-center text-gray-800 font-bold pb-6">
                  Back End
                </h2>

                <div className="container flex justify-around mx-auto pt-5 lg:w-4/6 md:w-full">
                  <div>
                    <img src={nodeImg} className="h-12 w-auto md:min-w-fit"></img>
                    <p>NodeJS</p>
                  </div>
                  <div>
                    <img src={goImg} className="h-12 w-auto md:min-w-fit"></img>
                    <p>Golang</p>
                  </div>
                  <div>
                    <img
                      src={pythonImg}
                      className="h-12 w-auto md:min-w-fit"
                    ></img>
                    <p className="text-center">Python</p>
                  </div>
                  <div>
                    <img src={sqlImg} className="h-12 w-auto md:min-w-fit"></img>
                    <p className="text-center">SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </dh-component>
      </div>
    </>
  );
};

export default TechStacks;
