import React from "react";
import image from "../../assets/blog/img1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
const EventCard = () => {
  return (
    <div>
      <div className="w-full flex flex-col min-h-[360px] md:w-[290px] bg-gray-50 ">
        {/* top */}
        <div className="w-full h-[165px] relative">
    <img src={image} alt=""  className="w-[100%] h-[100%] object-cover "/>
    <div className="w-[60px] h-[60px] bg-purple-500 absolute top-[10px] right-[10px] rounded-sm border border-white">
     <div className="flex flex-col justify-center items-center text-white w-full h-full">
        <p className="font-bold">05</p>
        <p className="text-xs">October</p>
     </div>
    </div>
      </div>
        {/* bottom */}
        <div className="mt-4 px-4 ">
            <h3 className="font-medium">Print and Publishing Industries for Reviewing</h3>
            <p className="text-sm mt-3 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, adipisci?</p>
            <div className="flex justify-between text-xs mt-3">
                <p className="flex gap-1 items-center"><FontAwesomeIcon icon={faClock} className="text-[#FE6440]"/>Time: 8:00 AM - 4:00 PM</p>
                <p className="flex gap-1 items-center"><FontAwesomeIcon icon={faMapLocationDot} className="text-[#FE6440]"/>Location:USA</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
