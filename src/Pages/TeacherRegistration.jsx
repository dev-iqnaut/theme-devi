import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeacherRegistration = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold  w-[100%]">
      <div className="flex flex-col items-center ">
       <h1 className="text-3xl md:text-6xl font-bold text-center">TEACHER REGISTRATION</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Teacher Registration</p>
       </div>
      </div>
      {/* registration Form */}
      <form action="">
        <div className="flex justify-center items-center ">
          <div className="w-full md:w-[700px] min-h-[400px] bg-[#E8E8F4] my-[80px] px-10 py-6  ">
            <h1 className="text-xl md:text-2xl font-bold">TEACHER REGISTRATION</h1>
            <h5 className="mt-4 text-sm font-bold">Fields with are required</h5>
            <p className="mt-4 text-gray-500 text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              error laudantium ratione molestias illum? Explicabo, dignissimos!
            </p>
            <p className="text-lg font-bold mt-5">Credentials</p>

            <div
              className="
          flex flex-col mt-5"
            >
              <label htmlFor="" className="relative text-sm font-medium">Email <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input className="px-3 py-2 bg-transparent border border-gray-300" type="text" name="email"  />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Password  <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input className="px-3 py-2  bg-transparent border border-gray-300" type="password" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Confirm Password  <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input className="px-3 py-2  bg-transparent border border-gray-300" type="password" />
            </div>
            {/* profile information */}
            <h2 className="text-md font-bold mt-7">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-5">
              <div className="flex flex-col mt-3">
                <label htmlFor="" className="relative text-sm font-medium">First Name  <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="firstname" />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="" className="text-sm font-medium">Last Name</label>
                <input className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="lastname" />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="" className="relative text-sm font-medium">gender  <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <select className="px-3 py-2  bg-transparent border border-gray-300" name="gender" id="">
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="" className="relative text-sm font-medium">Birth Date <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input className="px-3 py-2  bg-transparent border border-gray-300" type="date" />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Nationality <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <select className="px-3 py-2  bg-transparent border border-gray-300" name="nationality" id="">
                <option value="india">india</option>
                <option value="america">america</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="relative text-sm font-medium">Address1 <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="address1" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-sm font-medium">Address2</label>
                <input className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="address2" />
              </div>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Country <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="country" />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">City <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="city" />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="text-sm font-medium">Postal Code / Zip (optional)</label>
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="city" />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Phone <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="phone" />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Begin Studies <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="text" name="beginstudies" />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Highest Degree <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <select  className="px-3 py-2  bg-transparent border border-gray-300" name="degree" id="">
                <option value="be">B.E</option>
                <option value="bsc">B.sc</option>
              </select>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Intended Study Field <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <select  className="px-3 py-2  bg-transparent border border-gray-300" name="study" id="">
                <option value="">select an option</option>
                <option value="science">Science</option>
              </select>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="" className="relative text-sm font-medium">Degree Sought <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
              <select  className="px-3 py-2  bg-transparent border border-gray-300" name="degreesought" id="">
                <option value="">select an option</option>
                <option value="science">Science</option>
              </select>
            </div>

            <div className="mt-3">
              <input  className="px-3 py-2  bg-transparent border border-gray-300" type="file" />
            </div>

            <h1 className="text-md font-bold mt-7">Agreements</h1>
            <div className="flex justify-center items-baseline gap-3">
              <input type="checkbox" className="mt-3  bg-transparent border border-gray-300" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                omnis impedit ullam delectus porro dolorum!
              </p>
            </div>

            <div className="flex justify-between mt-4 ">
              <button className="px-5 py-2 bg-[#7768E5] text-white rounded-full hover:scale-105 transition-all">
                Submit Now
              </button>
              <button className="px-5 py-2 bg-[#FE6440] text-white rounded-full hover:scale-105 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegistration;
