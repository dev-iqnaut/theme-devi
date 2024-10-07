import React from 'react'
import img6 from "../../assets/blog/png1.png";
import Arrow from '../common/Arrow';
import { Link } from 'react-router-dom';
const DiscoverCard = () => {
  return (
    <div>
        <div className="w-[450px] h-[240px] bg-blue-500 p-2 mt-20">
            <div className="flex justify-between text-white gap-5">
              <div className="w-[50%] p-4 ">
                <p className="text-sm font-light">Start From Today</p>
                <p className="mt-4 text-sm font-medium">Join our Training Courses and Build Your Skills</p>
                <div className="flex justify-center items-center mt-4">
            <div className="flex justify-between w-[180px] h-[50px] bg-[#FFD25D] rounded-full mt-6">
              <button className="px-5 py-3   text-sm">
                <Link to="/courses">Join Now</Link>
              </button>
              <div className="w-12 h-12 bg-[#FEB65C] shadow-md rounded-full flex justify-center items-center ">
                <Arrow />
              </div>
            </div>
          </div>
              </div>
              <div className=" w-[50%] ">
                <div className=" w-[100%] ">
                  <img
                    src={img6}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default DiscoverCard