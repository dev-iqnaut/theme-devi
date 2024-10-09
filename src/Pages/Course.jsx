import React from "react";
import CourseCard from "../components/Course/CourseCard";
import courseData from "../sampleData/CourseData";
const Course = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold  w-[100%]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">COURSES</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Courses
          </p>
        </div>
      </div>
      {/* course card */}
      <div className="flex justify-center items-center w-full bg-[#FAFAFA] ">
        <div className="w-full md:w-[70%] h-full my-[80px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8">
           {courseData.map((course)=>
           <CourseCard  key={course.id} course={course}/>)}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
