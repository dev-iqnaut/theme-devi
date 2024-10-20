import React, { useEffect, useState } from "react";
import img from "../assets/blog/img4.jpg";
import Facebook from "../components/common/Facebook";
import Instagram from "../components/common/Instagram";
import LinkedIn from "../components/common/LinkedIn";
import Twitter from "../components/common/Twitter";
import Phone from "../components/common/Phone";
import Map from "../components/common/Map";
import Mail from "../components/common/Mail";
import InstructorCard from "../components/instructor/InstructorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import teacherData from "../sampleData/TeacherData";
const TeacherDetails = () => {
  const {id} = useParams();
  const[selectedData,setSelectedData]=useState({});
  console.log("details", id);
  
  const getSelectedData=(id)=>{
    const data=teacherData.find((item)=>
    item.id===Number(id))
   if(data){
    setSelectedData(data)
   }
   
  }
 
  useEffect(()=>{
     getSelectedData(id)
  },[id])
  console.log(selectedData,"getid")
  return (
    
    <div>
      
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">TEACHER DETAILS</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Teacher Details
          </p>
        </div>
      </div>
      {/* details */}
      
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full ">
        <div className=" w-full md:w-[65%] min-h-[500px] bg-transparent md:bg-red-200 my-[80px] flex flex-col md:flex-row mx-auto">
          {/* left */}
          <div className="w-full md:w-[280px] min-h-[500px] bg-red-100">
       
      
            <div className="p-[30px]">
              <div className="w-[100%] h-[180px]">
                <img
                  src={selectedData.img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="mt-4 flex gap-3  items-center border-b border-gray-600 border-dashed h-[90px] ">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center transition-all duration-200 hover:bg-orange-500 hover:text-white ">
                  <p className=" cursor-pointer ">
                    <Facebook />
                  </p>
                </div>
                <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center transition-all duration-200 hover:bg-orange-500 hover:text-white">
                  <p className=" cursor-pointer ">
                    <Instagram />
                  </p>
                </div>
                <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center transition-all duration-200 hover:bg-orange-500 hover:text-white ">
                  <p className=" cursor-pointer ">
                    <Twitter />
                  </p>
                </div>
                <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center transition-all duration-200 hover:bg-orange-500 hover:text-white ">
                  <p className="cursor-pointer ">
                    <LinkedIn />
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-5">
                <div className="flex text-gray-900 gap-3 text-sm">
                  <p>
                    <Phone />
                  </p>
                  <p>(568) 367-987-237</p>
                </div>
                <div className="flex gap-3 text-gray-900 text-sm">
                  <p>
                    <Map />
                  </p>
                  <p>Hudson,Wisconsin(WI),54016</p>
                </div>
                <div className="flex gap-3 text-gray-900 text-sm">
                  <p>
                    <Mail />
                  </p>
                  <p>govillage@gmail.com</p>
                </div>
              </div>
              <button className="mt-6 px-3 py-2 bg-[#FE6440] text-white rounde-md hover:scale-105 transition-all">
                Contact Us Teacher
              </button>
            </div>
          </div>
          {/* right */}
          <div className="p-5 bg-white w-full m-5">
            
            <div className="p-4">
              <h1 className="text-2xl font-semibold">{selectedData.name}</h1>
              <span className="text-red-500">Teacher</span>
              <p className="mt-4 text-gray-800 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi dolorum deserunt, fugiat vero doloremque cupiditate
                quis, fugit ullam reiciendis numquam unde et! Dolorem, hic nemo
                autem maxime cupiditate ullam nisi.
              </p>
              <p className="mt-3 text-gray-800 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                dignissimos voluptates eaque, officia doloribus nostrum tenetur
                debitis quod ipsa? Sapiente vitae minima molestiae maiores?
              </p>
              <h2 className="mt-4 font-semibold text-xl">Education</h2>
              <p className="mt-3 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus aliquid perferendis tempora nesciunt ducimus sit dicta
                facilis omnis.
              </p>
              <h2 className="mt-4 font-semibold text-xl">
                Expertise and Skills
              </h2>

              {/* bar chart */}

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between">
                  <p className="font-semibold">lectures</p>
                  <p>80%</p>
                </div>
                <div className="w-full h-[8px] bg-[#E8E8F4] flex justify-start rounded-full">
                  <div className="w-[80%] bg-[#7768E5] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <div className="flex justify-between">
                  <p className="font-semibold">My Skills</p>
                  <p>90%</p>
                </div>
                <div className="w-full h-[8px] bg-[#E8E8F4] flex justify-start rounded-full">
                  <div className="w-[90%] bg-orange-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <div className="flex justify-between">
                  <p className="font-semibold">Consulting</p>
                  <p>70%</p>
                </div>
                <div className="w-full h-[8px] bg-[#E8E8F4] flex justify-start rounded-full">
                  <div className="w-[70%] bg-[#7768E5] rounded-full"></div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
 
      {/* instructor */}
      <div className="flex justify-center items-center ">
       
        <div className="w-full md:w-[65%] h-full mt-8  mx-auto">
          <h1 className="mt-8 text-center text-2xl font-semibold">
            Meet Our Instructor
          </h1>
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto mt-[50px]">
          {teacherData?.slice(0,4).map((item)=>
          <div key={item.id} data-aos="fade-up" data-aos-duration="1000">
            <InstructorCard item={item}/>
            
          </div>
          )}
          </div>
          <div className="mt-12 flex justify-center gap-5 mb-[80px] ">
            <div className="w-[60px] h-[60px] bg-orange-600 rounded-full relative">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-white absolute top-[20px] right-[24px]"
              />
            </div>
            <div className="w-[60px] h-[60px] bg-orange-600 rounded-full relative">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white absolute top-[20px] right-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  
  );
};

export default TeacherDetails;
