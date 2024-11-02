import React, { useContext,  useState } from "react";

import GalleryCard from "../components/gallery/GalleryCard";
import { siteContext } from "../context/SiteContextProvider";

const GalleryPage = () => {
 
 const data=useContext(siteContext)

  return (
    <>
      <div className="flex text-4xl md:text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Gallery</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Gallery
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[80%] mx-auto my-[80px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 ">
          {data?.gallery?.images.map((img,i)=>
            ( 
              <GalleryCard img={img} key={i}/>
            )
          )}
        
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
