import React from "react";
import Coaching from "../common/Coaching";
import Arrow from "../common/Arrow";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div>
      <div className="w-full md:w-[300px] min-h-[170px] bg-[#EFEFF7] shadow-sm mt-[80px] px-5 py-8 flex flex-col items-center gap-4 ">
        <div className="w-[60px] h-[60px] bg-transparent border-2 border-dashed border-[#795DD8] rounded-full flex justify-center items-center">
          <div className="w-[50px] h-[50px] bg-[#795DD8] rounded-full p-2 text-white flex justify-center items-center">
            <Coaching />
          </div>
        </div>
       <div className="flex flex-col justify-content items-center gap-4">
       <h3 className="text-lg font-medium ">Best Coaching</h3>
        <p className="text-xs  text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          temporibus, magni, nihil aut sint accusantium molestiae, ad ipsam
          asperiores impedit explicabo quod numquam!
        </p>
       </div>
       {/* button */}
        <div className="flex justify-center items-center mt-4">
          <div className="flex justify-between w-[160px] h-[50px] bg-[#7768E5] rounded-full ">
            <button className="px-5 py-3  text-white text-sm" ><Link to='/services/details'>View More</Link></button>
            <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
