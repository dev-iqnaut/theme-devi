import React from "react";
import Star from "../common/Star";
import thermometer from "../../assets/shop/thermometer.jpg";
const ShopCard = () => {
  return (
    <div>
      <div className="w-[80%] md:w-[280px] h-[400px] bg-[#FFFFFF] shadow-sm px-8 py-5 rounded-sm flex flex-col justify-center mx-auto ">
        <div className="w-[100%] h-[60%] ">
          <img
            src={thermometer}
            alt=""
            className="w-[100%] h-[60%]object-cover"
          />
        </div>
        <h4 className="mt-6 font-semibold text-center">Thermometer</h4>
        <div className="flex justify-between  mt-5 text-gray-700 text-sm">
          <p className="flex gap-1">
            <span className="line-through">$150.00</span>
            <span className="text-[#7768E5]">$100.00</span>
          </p>
          <p className="flex">
            <Star />
            <span>4.5K</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-[#7768E5] px-3 py-2 bg-[#E8E8F4] m-5 rounded-sm w-[110px] transition-all duration-300 hover:bg-[#7768E5] hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
