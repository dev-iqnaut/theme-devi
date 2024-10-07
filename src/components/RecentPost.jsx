import React from "react";
import img1 from "../assets/blog/img1.jpg";

import Calendar from "./common/Calendar";
const RecentPost = () => {
  return (
    <div>
      <div className="mt-[40px] w-[400px]">
       
        {/* blog-1 */}
        <div className="flex  gap-5 w-[280px] sm:w-[400px] mt-[30px] border-b border-gray-300 h-32">
          <div className="w-[120px] h-[100px] ">
            <img src={img1} alt="" className="w-[100%] h-[100%] object-cover rounded-md" />
          </div>
          <div >
           <div className="flex gap-2">
           <div className="text-orange-500"><Calendar/></div>
           <p>14 June 2024</p>
           </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.
              Consectetur omnis nulla voluptatum?
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default RecentPost;
