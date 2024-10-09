import React from "react";
import ServiceCard from "../components/service/ServiceCard";

const Service = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold ">
      <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">SERVICES</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Services</p>
       </div>
      </div>

      <div className="w-[70%] mx-auto my-[80px]">
        <h2 className="text-center text-3xl font-semibold">Check Out Educate Features <br /> Win Any Exam</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-24 lg:gap-0">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Service;
