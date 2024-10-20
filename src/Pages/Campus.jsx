import React from "react";

import ArtRooms from "../components/campus/ArtRooms";
import AssemblyArea from "../components/campus/AssemblyArea";
import Auditorium from "../components/campus/Auditorium";
import Clinic from "../components/campus/Clinic";
import Hostels from "../components/campus/Hostels";
import Laboratories from "../components/campus/Laboratories";
import Libraries from "../components/campus/Libraries";
import PresentationHalls from "../components/campus/PresentationHalls";
import SchoolBlocks from "../components/campus/SchoolBlocks";
import SchoolReception from "../components/campus/SchoolReception";
import SportsGround from "../components/campus/SportsGround";

const Campus = () => {

  
  return (
    <>
      <div className="flex text-4xl md:text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Campus</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            AboutUs <span className="text-[#FE6440]">//</span> Campus
          </p>
        </div>
      </div>
      {/* content */}
      <div className="w-[80%] mx-auto my-[80px]">
        <div className="flex flex-col gap-16">
          {/* art rooms */}
          <div>
            <h4 className="font-semibold text-2xl mb-5">Art Rooms</h4>
            <ArtRooms/>
          </div>
          {/* assembly area */}
          <div>
          <h4 className="font-semibold text-2xl mb-5">Assembly Area</h4>
          <AssemblyArea/>
          </div>
       
        {/*auditorium*/}
        <div>
            <h4 className="font-semibold text-2xl mb-5">Auditorium</h4>
            <Auditorium/>
          </div>
          {/* clinic */}
          <div> 
            <h4 className="font-semibold text-2xl mb-5">Clinic</h4>
            <Clinic/>
          </div>
          {/*hostels  */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">Hostels</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Hostels/>
            </div>
          </div>

          {/* laboratories */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">Laboratories</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Laboratories/>
            </div>
          </div>
          {/* Libraries */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">Libraries</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Libraries/>
            </div>
          </div>
          {/* presentationhalls */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">Presentation Halls</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <PresentationHalls/>
            </div>
          </div>
          {/* school blocks */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">School Blocks</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <SchoolBlocks/>
            </div>
          </div>
          {/* school reception */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">School Reception</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <SchoolReception/>
            </div>
          </div>
          {/* sports ground */}
          <div className="">
            <h4 className="font-semibold text-2xl mb-5">Sports Ground</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <SportsGround/>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Campus;
