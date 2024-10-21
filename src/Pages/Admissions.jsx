import React, { useContext, useState } from "react";
import KinderGarten from "../components/admissions/KinderGarten";
import PrimaryLevel from "../components/admissions/PrimaryLevel";
import SecondaryLevel from "../components/admissions/SecondarLevel";
import HigherSecondary from "../components/admissions/HigherSecondary";
import { siteContext } from "../context/SiteContextProvider";

const Admissions = () => {
    const[showKinder,setShowKinder]=useState(true);
    const[showPrimary,setShowPrimary]=useState(false);
    const[showSecondary,setShowSecondary]=useState(false);
    const[showHigher,setShowHigher]=useState(false);

     const data=useContext(siteContext);
     console.log(data,"admission page")
 //show kindegarten
 const handleKinder=()=>{
    setShowKinder(true)
    setShowHigher(false)
    setShowPrimary(false)
    setShowSecondary(false)
 }

//show primary
const handlePrimary=()=>{
    setShowKinder(false)
    setShowHigher(false)
    setShowPrimary(true)
    setShowSecondary(false)
 }

 //show secondary
const handleSecondary=()=>{
    setShowKinder(false)
    setShowHigher(false)
    setShowPrimary(false)
    setShowSecondary(true)
 }

//show highersecondary
const handleHigher=()=>{
    setShowKinder(false)
    setShowHigher(true)
    setShowPrimary(false)
    setShowSecondary(false)
 }

  return (
    <>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Admissions</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Admissions
          </p>
        </div>
      </div>

      <div className="mb-[80px] flex justify-between">
        {/* left */}
       
        <div className="w-[20%] bg-blue-950 text-white  ">
          <ul className="flex flex-col">
            <li className="hover:bg-blue-900 px-3 py-2 cursor-pointer" onClick={handleKinder}>
              KinderGarten
            </li>
            <li className="hover:bg-blue-900 px-3 py-2 cursor-pointer"  onClick={handlePrimary}
          
                >
              Primary Level
            </li>
            <li className="hover:bg-blue-900 px-3 py-2 cursor-pointer"  onClick={handleSecondary}>
              Secondary Level
            </li>
            <li className="hover:bg-blue-900 px-3 py-2 cursor-pointer"  onClick={handleHigher}>
              Higher Secondary Level
            </li>
          </ul>
        </div>

        {/* right */}

        <div className="w-[70%]  mt-[20px]">
        <div className="mt-8">
          <h2 className="font-semibold text-3xl text-blue-900">Document List</h2>
          <div className="flex gap-5 items-center my-6">
          <div>1.data1</div>
          <div>2.data2</div>
          <div>3.data3</div>
          </div>
        </div>
          <h1 className="font-semibold text-3xl text-blue-900">Fee Structure</h1>
          {showKinder && <KinderGarten />}
          {showPrimary && <PrimaryLevel />}
          {showSecondary && <SecondaryLevel />}
          {showHigher && <HigherSecondary />}
          <div>
            <h2 className="font-semibold text-2xl mt-12">Additional Information for All Levels</h2>
            <ul className="mt-8 flex flex-col gap-3">
              <li className="flex gap-3  ">
                <h6 className="font-semibold w-[350px] ">
                  Boarding Fee: <span className="text-sm text-gray-600 font-medium">(if applicable)</span>
                </h6>
                <p>₹50,000 – ₹2,00,000 per annum</p>
              </li>
              <li className="flex gap-3">
                <h6 className="font-semibold  w-[350px]">
                Caution Deposit: <span className="text-sm text-gray-600 font-medium">(refundable)</span>
                </h6>
                <p>₹5,000 – ₹10,000 per annum</p>
              </li>
              <li className="flex gap-3">
                <h6 className="font-semibold  w-[350px]">
                Optional Fees: <br /><span className="text-sm text-gray-600 font-medium">(for extra coaching, clubs, or special activities)</span> 
                </h6>
                <p>₹1,000 – ₹3,000 per month</p>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="mt-8 text-2xl font-semibold">CBSC Compliance</h3>
          <p className="mt-5 text-sm text-gray-700"> We follow specific standards, rules, and regulations set by the CBSE, a prominent educational board in India. CBSE compliance ensures that affiliated schools provide a uniform, high-quality educational environment</p>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Admissions;
