import React from "react";
import Arrow from "../common/Arrow";

const ReviewSection = () => {
  return (
    <div>
      <div className="mt-16">
        <h1 className="text-bold text-2xl font-semibold ">Leave A Review </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[40px]">
          <input
            type="text"
            placeholder="First Name"
            className="px-3 py-2 border border-gray-300 bg-transparent focus:outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-3 py-2 border border-gray-300 bg-transparent focus:outline-none rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-3 py-2 border border-gray-300 bg-transparent focus:outline-none rounded-md"
          />
          <input
            type="text"
            placeholder="Rating"
            className="px-3 py-2 border border-gray-300 bg-transparent focus:outline-none rounded-md"
          />
        </div>
        <textarea
          type="text"
          placeholder="Write Here..."
          className="px-3 py-2 border border-gray-300 bg-transparent focus:outline-none rounded-md mt-[30px] w-full resize-none"
        />
        <div className="flex justify-between w-[250px] h-[50px] bg-[#7768E5] text-white mt-8 rounded-full font-medium">
          <button className="px-4 py-3   text-sm ">
            <a href="#">Submit Comment</a>
          </button>
          <div className="w-12 h-12  bg-[#795DD8] rounded-full flex justify-center items-center  ">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
