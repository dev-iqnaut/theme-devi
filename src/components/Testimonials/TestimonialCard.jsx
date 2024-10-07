import React from "react";
import Star from "../common/Star";
import img from "../../assets/blog/img7.jpg";
const TestimonialCard = () => {
  return (
    <div>
      <div className="w-full md:w-[400px] min-h-[250px] border border-dashed border-[#FE6440]  px-8 py-3 rounded  ">
        <div className="flex gap-4">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam quos quaerat saepe ducimus nisi possimus adipisci iusto qui.
          Deleniti aperiam cupiditate qui ipsam numquam.
        </p>
        <div className="flex items-center gap-4">
          {/* left */}
          <div className="w-[50px] h-[50px] bg-white rounded-full">
            <img
              src={img}
              alt=""
              className="rounded-full w-[100%] h-[100%] object-cover"
            />
          </div>
          {/* right */}
          <div>
            <h3 className="mt-5 font-semibold text-xl">John Mathew</h3>
            <p className="text-purple-400 text-sm mt-1 ">Founder @ Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
