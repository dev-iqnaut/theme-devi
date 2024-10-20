import React from "react";
import Star from "../common/Star";
import thermometer from "../../assets/shop/thermometer.jpg";
const ShopCard = ({equip}) => {
  return (
    <div>
      <div className="w-[80%] md:w-[280px] h-[380px] bg-[#FFFFFF] shadow-sm px-8 py-5 rounded-sm flex flex-col justify-center mx-auto ">
        <div className="w-[80%] h-[60%] m-auto">
          <img
            src={equip.img}
            alt=""
            className="w-[100%] h-[60%]object-cover"
          />
        </div>
        <h4 className="mt-6 font-bold text-center text-xl">{equip.name}</h4>
        <div className="flex justify-center gap-8  mt-5 text-gray-700 text-md">
          <p className="flex gap-1">
            <span className="line-through">${equip.old_price}</span>
            <span className="text-[#7768E5]">${equip.new_price}</span>
          </p>
          <p className="flex gap-1">
            <Star />
            <span className="font-semibold">4.5K</span>
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
