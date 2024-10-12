import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebase";
const Gallery = () => {
  const [imageList, setImageList] = useState([]);

  // getting image from db

const getImage=async ()=>{
  const res=(await getDocs(collection(db,"sites"))).docs.map((doc)=>({
...doc.data()
  }))
  setImageList(res[0].siteData.Gallery.images)
  console.log(res)
}
  useEffect(() => {
    getImage();
  }, []);
  console.log(imageList)
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
    </>
  );
};

export default Gallery;
