import React from "react";
import InstructorCard from "../components/instructor/InstructorCard";
import teacherData from "../sampleData/TeacherData";

const Teacher = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
      <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">TEACHER</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Teacher</p>
       </div>
      </div>

      <div className="my-[80px] w-full flex flex-col justify-center items-center">
        <h1 className="mt-5 font-bold text-2xl md:text-3xl text-center">
          Meet Our Instructor
        </h1>
        <div className="mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {teacherData && teacherData.map((item)=>
         <div key={item.id}>

          <InstructorCard item={item}/>
         
          </div>
         
          )}
           </div>
        </div>
      </div>

      {/* teacher page */}
    </div>
  );
};

export default Teacher;
