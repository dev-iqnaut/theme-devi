import React, { useState } from "react";
import ShopCard from "../components/Shop/ShopCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/shop/thermometer.jpg"
import img2 from "../assets/shop/mask.jpg"
import img3 from "../assets/shop/book.jpg"
import img4 from "../assets/shop/funnel.jpg"
import img5 from "../assets/shop/phmeter.jpg"
import img6 from "../assets/shop/handlens.jpg"
import img7 from "../assets/shop/testtube.jpg"
import img8 from "../assets/shop/beaker.jpg"
import img9 from "../assets/shop/calculator.jpg"
import img10 from "../assets/shop/ammeter.png"
const equipments=[
  {id:1,name:"Thermometer",old_price:120,new_price:99,ratings:4,img:img1},
  {id:2,name:"Mask",old_price:10,new_price:9,ratings:4,img:img2},
  {id:3,name:"Book",old_price:150,new_price:120,ratings:4,img:img3},
  {id:4,name:"Funnel",old_price:60,new_price:40,ratings:4,img:img4},
  {id:5,name:"PH-Meter",old_price:250,new_price:220,ratings:4,img:img5},
  {id:6,name:"Hand Lens",old_price:150,new_price:120,ratings:4,img:img6},
  {id:7,name:"TestTube",old_price:20,new_price:15,ratings:4,img:img7},
  {id:8,name:"Beaker",old_price:30,new_price:20,ratings:4,img:img8},
  {id:9,name:"Calculator",old_price:20,new_price:15,ratings:4,img:img9},
  {id:10,name:"Ammeter",old_price:30,new_price:20,ratings:4,img:img10},
]









const EducationShop = () => {
 const[page,setPage]=useState(1)
 const[totalPages,setTotalPages]=useState(10)
 

  return (
    <div className="bg-[#FAFAFA] h-full w-full">
      <div className=" bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex   items-center justify-center  w-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-6xl font-bold">EDUCATION SHOP</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Shop
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto my-[80px]">
        <div className="flex justify-between ">
          <p className="font-medium" data-aos="fade-up" data-aos-duration="1000">Showing 1-8 of 13 results</p>
          <select
            name=""
            id=""
            className="px-2 py-2 border border-gray-300 rounded-sm text-sm text-gray-700" data-aos="fade-up" data-aos-duration="1000"
          >
            <option value="">default sorting</option>
          </select>
        </div>
        <div className=" mt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mx-auto">
           {equipments.slice(page*8-8,page*8).map((equip)=>
           <div  data-aos="fade-up" data-aos-duration="1000" key={equip.id}>
            <ShopCard  equip={equip}/>
            </div>)}
           
          </div>
        </div>

        {/* pages */}
        <div className="mt-8 flex justify-center gap-5">
          <div onClick={()=>setPage((prev)=>prev-1)} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-orange-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-95  transition-all">
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </div>
          <div onClick={()=>setPage(1)} className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg " >1</div>
          </div>
          <div onClick={()=>setPage(2)}
          className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg " >2</div>
          </div>
          <div className="hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">3</div>
          </div>
          <div className=" hidden md:flex justify-center items-center w-[50px] h-[50px] border border-orange-600 rounded-full  cursor-pointer hover:scale-95  transition-all">
            <div className="text-lg ">50</div>
          </div>
          <div onClick={()=>setPage((prev)=>prev+1)} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border  border-orange-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-95  transition-all">
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationShop;
