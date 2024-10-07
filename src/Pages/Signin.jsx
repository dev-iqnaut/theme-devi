import React from "react";
import img from "../assets/signup/img.jpg";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div>
        <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold">
        <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">SIGNIN</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Signin</p>
       </div>
            </div>
     
      <div className="flex flex-col w-full  md:flex-row  md:w-[80%] justify-center my-[80px] mx-auto min-h-[300px]">
        {/* left */}
        <div className="bg-gray-300 w-full sm:w-[400px] p-10">
          <h2 className="font-semi-bold text-2xl ">Signin</h2>
         
          <div className="input-field mt-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className=" w-[100%]  px-5 py-2 "
            />
          </div>
          <div className="input-field mt-4">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className=" w-[100%]  px-5 py-2 "
            />
          </div>
          <div className="mt-4 flex text-sm justify-between">
          <p className="text-blue-600">Forgot Password?</p>
          <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remember me</label>
          </div>
          </div>
         
          <button className="bg-[#FE6440] text-white px-3 py-2 mt-[30px] rounded hover:bg-[#fe6340ca]">Signin</button>
          <p className="mt-[20px] ">Don't have an account? <Link className="text-[#e05839] font-semibold" to='/signup'>Signup</Link></p>
        </div>
        {/* right */}
        <div className="w-full sm:w-[400px] min-h-[350px]">
          <img
            src={img}
            alt=""
            className="w-[100%] h-[100%] object-cover opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
