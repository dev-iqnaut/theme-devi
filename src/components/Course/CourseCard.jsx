import React from "react";
import img from "../../assets/blog/img6.jpg";
import Star from "../common/Star";

import image from "../../assets/blog/img7.jpg"
import Cart from "../common/Cart";
import {Link} from "react-router-dom"
import CourseIcon from "./CourseIcon";
const CourseCard = ({course}) => {
  console.log("course data",{course})
  return (
    <div>
      {/* card */}
      <div className=" w-[400px]  min-h-[300px] flex flex-col sm:flex-row sm:w-[500px] sm:h-[250px] bg-[#FFFFFF]  p-2 rounded-[4px] shadow-md sm:mx-auto">
        {/* left */}
        <div className="w-[100%] sm:w-[45%] h-[100%] relative ">
          <img src={course.img} alt="" className="w-[100%] h-[100%] object-cover bg-cover rounded-[4px]" />
          <p className="absolute top-[20px] left-[20px] bg-[#FE6440] text-white px-2 py-1 cursor-pointer hover:scale-105"><Link to='/courses/details'>{course.main}</Link></p>
        </div>
        {/* right */}
        <div className="px-4">
          <div className="flex gap-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="text-sm">(4.7)</p>
          </div>
          <h1 className="font-semibold mt-3">
           {course.title}
          </h1>
         
            <CourseIcon course={course}/>
          
          {/* price details */}
          <div>
            <div>
            <div className="flex mt-6 gap-3 text-sm items-center ">
                <div className="w-[30px] h-[30px] ">
                <img src={image} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
                </div>
                <p>By {course.name} in <span className="font-semibold">Development</span></p>
            </div>
            <div className="flex justify-between mt-8">
                <p className="font-semibold flex gap-3">{course.newPrice} <span className="line-through text-gray-500">{course.oldPrice}</span></p>
                <div className="flex text-gray-900 text-sm gap-2 cursor-pointer transition-all hover:text-[#FE6440] hover:scale-110">
                    <p><Cart/></p>
                <p>Add to Cart</p>
                </div>
            </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
