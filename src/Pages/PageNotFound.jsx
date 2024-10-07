import React from "react";
import img from "../assets/pagenotfound/img2.png";

const PageNotFound = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] w-full h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">404 Pages</h1>
          <p className="text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> pages
          </p>
        </div>
      </div>
      <div className="flex  justify-around w-[80%] mx-auto my-[80px]">
        {/* left */}
        <div className="">
          <h1 className="text-4xl font-bold ">Sorry,Page Not Found!</h1>
          <p className="mt-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium <br />
            libero exercitationem vero quas! Quae, reprehenderit.
          </p>
          <button className="bg-[#FE6440] px-3 py-2 mt-8 text-white rounded-full">
            Back To Home
          </button>
        </div>
        {/* right  */}
        <div className="w-[480px] ">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
