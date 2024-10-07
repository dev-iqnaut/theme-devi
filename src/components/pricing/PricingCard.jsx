import React from "react";
import Tick from "../common/Tick";

const PricingCard = () => {
  return (
    <div>
      <div className="bg-[#0E2A47] w-72 min-h-96 flex justify-center items-end rounded-md">
        <div className="w-80 md:w-96 h-80 bg-[#F4F4F4] rounded-t-full rounded-b-md flex flex-col justify-center items-center text-sm p-8 mx-auto relative">
            <div className="absolute top-[-80px] bg-purple-600 left-[45px] text-white px-3 py-2 w-[70%] 
            flex items-center justify-center rounded-sm"><p>BASIN PLAN</p></div>
          <p className="mt-12 font-medium">Advanced Features For Pros Who Need More Customization</p>
          <div className="w-[80px] h-[80px] bg-white absolute top-[-12%] left-26 rounded-full border border-blue-700 shadow-sm
          flex justify-center items-center"><div className="text-2xl text-orange-500 flex ">20 <span className="text-xs text-gray-500 ">Month</span></div></div>
          <ul className="mt-5 flex flex-col gap-2 text-xs">
            <li className="flex gap-1"><span className="text-orange-500"><Tick/></span>7-Days Shipping World Wide</li>
            <li  className="flex gap-1"><span className="text-orange-500"><Tick/></span>3Kg Weight Max/Package</li>
            <li className="flex gap-1"><span className="text-orange-500"><Tick/></span>Free Wood Crate</li>
            <li className="flex gap-1"><span className="text-orange-500"><Tick/></span>Get In Touch To Discuss</li>
            <li className="flex gap-1"><span className="text-orange-500"><Tick/></span>Use Personal And Commercial</li>
            <li className="flex gap-1"><span className="text-orange-500"><Tick/></span>24/7 Support</li>
          </ul>
          <button className="mt-5 px-5 py-2 bg-[#795DD8] text-white rounded-sm">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
