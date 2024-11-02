import React from "react";
import { Link } from "react-router-dom";
import DownArrow from "../common/DownArrow";
import UpArrow from "../common/UpArrow";
const Responsive = ({
  active,
  setActive,
  submenuActive,
  setSubmenuActive,

  setSideBarOpen,
}) => {
  return (
    <div>
      <ul className="text-left px-3 py-2 flex flex-col gap-6">
        <li className="hover:bg-gray-100" onClick={() => setSideBarOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" className="flex justify-between" onClick={() => setActive(!active)}>
            about us {active ? <UpArrow/>: <DownArrow/>}
          </Link>
          {active && (
            <ul className="  min-h-[140px]  text-left px-3 py-2 flex flex-col gap-3">
              <li className="hover:bg-gray-100">
                <Link to="/teacher" onClick={() => setSideBarOpen(false)}>
                  Teacher
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to="/campus" onClick={() => setSideBarOpen(false)}>
                  Campus
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to="/admissions" onClick={() => setSideBarOpen(false)}>
                  Admissions
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to="/faqs" onClick={() => setSideBarOpen(false)}>
                  faqs
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to="/testimonial" onClick={() => setSideBarOpen(false)}>
                  testimonial
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link to="/event" onClick={() => setSideBarOpen(false)}>
                  event
                </Link>
              </li>
              <li
                
               onClick={()=>setSubmenuActive(!submenuActive)}
              >
                <Link className="flex justify-between hover:bg-gray-100">Registration {submenuActive ? <UpArrow/>: <DownArrow/>}</Link>

                {submenuActive && (
                  <ul className="py-2 text-left px-3  flex flex-col gap-3 w-full">
                    <li onClick={() => setSideBarOpen(false)}>
                      <Link to="/student/registration">
                        Student Form
                      </Link>
                    </li>
                    <li onClick={() => setSideBarOpen(false)}>
                      <Link to="/teacher/registration">
                        Teacher Form
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className="hover:bg-gray-100">
          <Link to="/academics" onClick={() => setSideBarOpen(false)}>
            Academics
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link to="/courses" onClick={() => setSideBarOpen(false)}>
            Courses
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link to="/gallery" onClick={() => setSideBarOpen(false)}>
            Gallery
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link to="/contact" onClick={() => setSideBarOpen(false)}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Responsive;
