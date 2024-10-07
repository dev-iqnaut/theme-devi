import React from "react";
import Star from "../common/Star"
import img7 from "../../assets/blog/img7.jpg"
const CommentsCard = () => {
  return (
    <div>
      

      <div className="border border-gray-300 rounded px-6 py-3 mt-8">
        <div className="flex flex-col justify-center  sm:flex-row items-center sm:justify-between mt-4 ">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="w-[60px] h-[60px] ">
              <img
                src={img7}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col sm:flex-col">
              <h4 className="font-semibold">Sherlin</h4>
              <p className="mt-1">13 sep 2024</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Rating</h4>
            <div className="mt-1 flex gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
        <p className="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          earum doloribus officiis et hic maiores unde. Optio quis esse aut fuga
          sapiente enim?
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
