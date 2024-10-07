import React from "react";

import LogoIcon from "../common/LogoIcon";
import Facebook from "../common/Facebook";
import Instagram from "../common/Instagram";
import LinkedIn from "../common/LinkedIn";
import Twitter from "../common/Twitter";
import Gallery from "./Gallery";
import AngleRight from "../common/AngleRight";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#17141B] w-full min-h-[480px] text-white ">
        {/* header */}
        <div className="flex flex-col md:flex-row  justify-around border-b border-[#37343D] p-10 ">
          <div className=" ">
            <p className="text-[#6055AA] text-sm">Address</p>
            <h1 className="mt-3 text-xl font-semi-bold">1923 Boggess Street</h1>
          </div>
          <div>
            <p className="text-[#6055AA] text-sm">Phone</p>
            <h1 className="mt-3 text-xl font-semi-bold">(00) 875 784 568</h1>
          </div>
          <div>
            <p className="text-[#6055AA] text-sm">Email</p>
            <h1 className="mt-3 text-xl font-semi-bold">info@gmail.com</h1>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col gap-5 md:flex-row justify-around mx-auto w-[80%] md:gap-10 mt-20 ">
          <div>
            <div className="flex gap-2">
              <div className="text-3xl">
                {" "}
                <LogoIcon />
              </div>
              <h1 className="text-4xl font-semi-bold">edunity</h1>
            </div>
            <p className="mt-6 text-gray-300">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. At, consectetur?
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-[50px] h-[50px] rounded-full bg-[#4C5353] flex justify-center items-center cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                <div className="text-2xl ">
                  <Facebook />
                </div>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#4C5353] flex justify-center items-center cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                <div className="text-2xl ">
                  <Instagram />
                </div>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#4C5353] flex justify-center items-center cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                <div className="text-2xl ">
                  <Twitter />
                </div>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#4C5353] flex justify-center items-center cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                <div className="text-2xl ">
                  <LinkedIn />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="mt-5 md:font-semibold md:mt-0">Our Services:</h6>
            <ul className="mt-6 flex flex-col gap-4">
              <div className="flex gap-4 cursor-pointer hover:text-orange-500 transition-all duration-200">
                <div>
                  <AngleRight />
                </div>
                <li>Web Development</li>
              </div>
              <div className="flex gap-4 cursor-pointer hover:text-orange-500 transition-all duration-200">
                <div>
                  <AngleRight />
                </div>
                <li>UI / UX Design</li>
              </div>
              <div className="flex gap-4 cursor-pointer hover:text-orange-500 transition-all duration-200">
                <div>
                  <AngleRight />
                </div>
                <li>Management</li>
              </div>
              <div className="flex gap-4 cursor-pointer hover:text-orange-500 transition-all duration-200">
                <div>
                  <AngleRight />
                </div>
                <li>Digital Marketing</li>
              </div>
            </ul>
          </div>
          <div>
            <h6 className="mt-5 md:font-semibold md:mt-0">Gallery</h6>
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6">
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
            </div>
          </div>
          <div>
            <h6 className="mt-5 md:font-semibold md:mt-0">Subscribe</h6>
            <div className="input-group flex flex-col mt-6">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-[230px] px-4 py-2 border-none rounded md:w-[300px] "
              />
              <button className="mb-2 mt-4 bg-[#FE6440] px-3 py-2 w-[150px] rounded">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#202020] w-full h-[50px] flex text-white  items-center gap-32">
        <p className="text-xs md:text-sm text-white ">
          Copyright @2024 <span className="text-[#FE6440]">edunity</span> || All
          Rights Reserved
        </p>
        <p className="text-xs md:text-sm text-white ">Designed by <span className="text-[#FE6440]">Kumaradevi</span></p>
      </div>
    </div>
  );
};

export default Footer;
