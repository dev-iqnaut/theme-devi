import React from "react";
import ShopCard from "../components/Shop/ShopCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EducationShop = () => {
  return (
    <div className="bg-[#FAFAFA] h-full w-full">
      <div className=" bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex   items-center justify-center  w-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-6xl font-bold">EDUCATION SHOP</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Shop
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto my-[80px]">
        <div className="flex justify-between ">
          <p className="font-medium">Showing 1-8 of 13 results</p>
          <select
            name=""
            id=""
            className="px-2 py-2 border border-gray-300 rounded-sm text-sm text-gray-700"
          >
            <option value="">default sorting</option>
          </select>
        </div>
        <div className=" mt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mx-auto">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>

        {/* pages */}
        <div className="mt-8 flex justify-center gap-5">
          <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-orange-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-95  transition-all">
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </div>
          <div className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">1</div>
          </div>
          <div className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">2</div>
          </div>
          <div className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">3</div>
          </div>
          <div className=" hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">50</div>
          </div>
          <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border  border-orange-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-95  transition-all">
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationShop;
