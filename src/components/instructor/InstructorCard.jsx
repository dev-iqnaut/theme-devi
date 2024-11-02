import React, { useState } from "react";

import ShareIcon from "../common/ShareIcon";
import Facebook from "../common/Facebook";
import Instagram from "../common/Instagram";
import LinkedIn from "../common/LinkedIn";
import { Link } from "react-router-dom";




const InstructorCard = ({item}) => {
  if(!item){
    return <div>loading..</div>
  }
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

   
  return (
    <div>
       
      <div className="flex flex-col w-[200px] h-[240px]   bg-gray-50 shadow-md cursor-pointer relative ">
      
       
        <div className="flex flex-col justify-center items-center mt-3" >
          
          {/* image */}
          <div className="w-[180px] h-[160px]">
            <img
              src={item.url}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#FE6440] absolute right-[20px] top-[155px] rounded"
            onClick={handleClick}
          >
            <div className="flex justify-center items-center w-full h-full">
              <ShareIcon />
            </div>
          </div>
          {show && (
            <div>
              <div className="w-[30px] h-[30px] bg-[#FE6440] absolute right-[20px] top-[120px] rounded">
                <div className="flex justify-center items-center w-full h-full">
                  <LinkedIn />
                </div>
              </div>
              <div className="w-[30px] h-[30px] bg-[#FE6440] absolute right-[20px] top-[85px] rounded">
                <div className="flex justify-center items-center w-full h-full">
                  <Instagram />
                </div>
              </div>
              <div className="w-[30px] h-[30px] bg-[#FE6440] absolute right-[20px] top-[50px] rounded">
                <div className="flex justify-center items-center w-full h-full">
                  <Facebook />
                </div>
              </div>
            </div>
          )}

          {/* content */}
          <Link to={`/teacher/${item.id}`}><div>
            <h4 className="text-xl font-bold mt-3"><a href="#">{item.name} </a></h4>
            <p>Teacher</p>
          </div></Link>
        </div>
        
      </div>
       
    </div>
  );
};

export default InstructorCard;
