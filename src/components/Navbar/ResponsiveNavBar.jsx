import React from "react";
import { Link } from "react-router-dom";
import DownArrow from "../common/DownArrow";
const ResponsiveNavBar = ({
  active,
  setActive,
  submenuActive,
  setSubmenuActive,
  sidebarOpen,
  setSideBarOpen
}) => {
  return (
    <div>
      <div className="relative "  >
        <ul className="flex flex-col gap-10  relative px-4 ">
          <li>
            {" "}
            <Link to="/home" className="hover:text-[#FE6440] flex gap-2" onClick={()=>setSideBarOpen(false)}>
              Home
            </Link>
          </li>
          <li onMouseEnter={()=>setActive(true)}>
            {" "}
            <Link to="/about"   onClick={()=>setSideBarOpen(false)}>
              <button className="hover:text-[#FE6440] flex gap-2" >
                About Us
                <DownArrow />
              </button> 
              {active && (
                
                  <ul className="mt-[35px] bg-white w-[240px] flex flex-col gap-3">
                    <li className="hover:bg-gray-200 h-[35px]">
                      <Link to="/teacher" className="px-5 " onClick={()=>setSideBarOpen(false)}>
                        Know Our Teacher
                      </Link>
                    </li>
                    <li className="hover:bg-gray-200 h-[35px]">
                      <Link to="/event" className="px-5 " onClick={()=>setSideBarOpen(false)}>
                        Event
                      </Link>
                    </li>
                    <li className="hover:bg-gray-200 h-[35px]">
                      <Link to="/faqs" className="px-5" onClick={()=>setSideBarOpen(false)}>
                        Faqs
                      </Link>
                    </li>
                    <li className="hover:bg-gray-200 h-[35px] relative">
                      <p
                        className="px-5 flex justify-between items-center"
                        onMouseEnter={() => setSubmenuActive(true)}
                        onMouseLeave={() => setSubmenuActive(true)}
                      >
                        Registration <RightArrow />
                      </p>
                      {submenuActive && (
                        <ul className="w-[250px] absolute bg-white top-0 left-[240px] shadow-md">
                          <li className="hover:bg-gray-200 h-[35px]">
                            <Link to="/student/registration" onClick={()=>setSideBarOpen(false)}>
                              Student Registration Form
                            </Link>
                          </li>
                          <li className="hover:bg-gray-200 h-[35px]">
                            <Link to="/teacher/registration" onClick={()=>setSideBarOpen(false)}>
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
          <li>
            <Link to="/courses" className="hover:text-[#FE6440] " onClick={()=>setSideBarOpen(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#FE6440] " onClick={()=>setSideBarOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#FE6440] " onClick={()=>setSideBarOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FE6440] " onClick={()=>setSideBarOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNavBar;
