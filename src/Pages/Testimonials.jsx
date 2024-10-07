import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Star from "../components/common/Star"
import img from "../assets/blog/img7.jpg"

import TestimonialCard from "../components/Testimonials/TestimonialCard";
const Testimonials = () => {
  return (
    <div>
        <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold ">
        <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">TESTIMONIALS</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Testimonials</p>
       </div>
      </div>
      <div className="my-[80px]">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mt-[80px] mx-auto">
          Creating a Community Of <br /> Life Long Learners
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-[50px] mx-auto md:w-[80%]">
          
        <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <div className="flex justify-center items-center">
            <button className="mt-[100px] px-3 py-2 bg-[#FE6440] text-white  rounded cursor-pointer">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
