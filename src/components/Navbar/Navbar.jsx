import React, { useState } from "react";
import { Link } from "react-router-dom";
import DownArrow from "../common/DownArrow";
import RightArrow from "../common/RightArrow";
import "../../App.css";

import Bars from "../common/Bars";

import LogoIcon from "../common/LogoIcon";
import Arrow from "../common/Arrow";
import Cart from "../common/Cart";
import Shop from "../common/Shop";
import Responsive from "./Responsive";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRightArrow} from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [submenuActive, setSubmenuActive] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleActive = () => {
    setActive(!active);
    setSubmenuActive(false);
  };

  return (
    <div className="sticky top-0 z-[999]">
      <div className="flex shadow z-40  w-[100%] bg-white h-[90px]  justity-between items-center">
        <div className="w-[100%] lg:w-[90%] mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="font-medium text-3xl flex gap-2 px-4 lg:px-0">
            <div className="text-[#795DD8]">
              <LogoIcon />
            </div>
            <h1>edunity</h1>
          </div>
          {/* menu */}
          <div className="hidden lg:block">
            <ul className="nav-link flex gap-3  relative">
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                {" "}
                <Link to="/home">Home</Link>
              </li>
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                {" "}
                <Link to="/about">
                  <button className=" flex gap-2">
                    About Us
                    <div onClick={handleActive}>
                      <DownArrow />
                    </div>
                  </button>
                  {active && (
                    <ul
                      className="mt-[35px] bg-white w-[240px] absolute z-50 shadow-md flex flex-col gap-3"
                      onMouseLeave={() => setActive(false)}
                    >
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/teacher" className="px-5 ">
                          Know Our Teacher
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/campus" className="px-5 ">
                          Campus
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/admissions" className="px-5 ">
                         Admissions
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/event" className="px-5 ">
                          Event
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/faqs" className="px-5">
                          Faqs
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] text-black"
                        onClick={() => setActive(false)}
                      >
                        <Link to="/testimonials" className="px-5">
                          Testimonials
                        </Link>
                      </li>
                      <li
                        className="hover:bg-gray-200 h-[35px] relative text-black"
                        onMouseEnter={() => setSubmenuActive(true)}
                      >
                        <p className="px-5 flex justify-between items-center">
                          Registration{" "}
                          <div>
                            <RightArrow />
                          </div>
                        </p>
                        {submenuActive && (
                          <ul
                            className="w-[260px] absolute bg-white top-0 left-[240px] shadow-md"
                            onMouseLeave={() => setSubmenuActive(false)}
                          >
                            <li
                              className="hover:bg-gray-200 h-[35px] text-black"
                              onClick={() => setActive(false)}
                            >
                              <Link to="/student/registration" className="px-5">
                                Student Registration Form
                              </Link>
                            </li>
                            <li
                              className="hover:bg-gray-200 h-[35px] text-black"
                              onClick={() => setActive(false)}
                            >
                              <Link to="/teacher/registration" className="px-5">
                                Teacher Registration Form
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </Link>
              </li>
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                <Link to="/academics" className="hover:text-[#795DD8] ">
                 Academics
                </Link>
              </li>
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                <Link to="/courses" className="hover:text-[#795DD8] ">
                Courses
                </Link>
              </li>
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                <Link to="/gallery" className="hover:text-[#795DD8]">
                 Gallery
                </Link>
              </li>
              <li className="px-4 py-1 rounded-full border border-transparent hover:border-[#795DD8] hover:text-[#795DD8] transition-all duration-200">
                <Link to="/contact" className="hover:text-[#795DD8] ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mr-0">
            <div className="flex md:justify-center gap-4 items-center ">
             
              <div className="cursor-pointer hover:text-[#795DD8] transition-all duration-200 hover:scale-125">
                <Link to={"/educationshop"}>
                  <Shop />
                </Link>
              </div>
              <div className="cursor-pointer hover:text-[#795DD8] transition-all duration-200 hover:scale-125">
                <Link to={"/cart"}>
                  <Cart />
                </Link>
              </div>
              {/* login button */}
              <div className="lg:flex justify-center items-center hidden ">
                <div className="flex justify-between w-[150px] h-[50px] bg-[#7768E5] rounded-full ">
                  <button className="px-5 py-2  text-white text-sm">
                    <Link to="/signup">Signin</Link>
                  </button>
                  <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
            {/* bar menu */}
            <div
              className="block lg:hidden px-4 text-2xl"
              onClick={() => setSideBarOpen(!sidebarOpen)}
            >
              <Bars />
            </div>
          </div>

          {/* responsive menubar */}
          {sidebarOpen && (
            <div className="absolute top-[100px] right-0 w-[60%] md:w-[25%] bg-white shadow-md lg:hidden ">
              <Responsive
                active={active}
                setActive={setActive}
                submenuActive={submenuActive}
                setSubmenuActive={setSubmenuActive}
                sidebarOpen={sidebarOpen}
                setSideBarOpen={setSideBarOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
