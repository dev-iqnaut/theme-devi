import React from "react";
import img from "../assets/blog/img3.jpeg";
import img1 from "../assets/blog/img5.jpg";
import StudentIcon from "../components/common/StudentIcon";
import Book from "../components/common/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faUsers } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import CourseCard from "../components/Course/CourseCard";
import InstructorCard from "../components/instructor/InstructorCard";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import teacherData from "../sampleData/TeacherData";
import courseData from "../sampleData/CourseData";


const About = () => {
  const settings = {
    dots: false, // Show dots navigation
    infinite: false, // No infinite scrolling
    speed: 800, // Speed of transition
    slidesToShow: 4, // Number of instructors to show at a time
    slidesToScroll: 1, 
    arrows:false,
    autoplay:true,
    autoplayspeed:4000,// Scroll 1 instructor at a time
  };

  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">ABOUT US</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> About Us
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-[120px] w-[80%] h-full relative flex flex-col md:flex-row ">
          {/* leftside imge */}
          <div className="hidden w-[50%] h-full md:grid grid-cols-2 space-y-28 gap-3 ">
            <div>
              <img
                src={img}
                alt=""
                className="w-[100%] h-[300px] object-cover"
              />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block w-[160px] h-[150px] bg-amber-50 absolute top-[-48px] left-[255px] border-2 border-gray-100">
            <div className="flex flex-col gap-3 justify-center items-center h-full">
              <div className="w-[70px] h-[70px] rounded-full bg-white relative border-2 border-orange-600">
                <p className="absolute top-[23px] left-[20px]">35+</p>
              </div>
              <p className="text-gray-700 font-medium text-md">
                Years Experience
              </p>
            </div>
          </div>
          <div className="hidden md:block w-[150px] h-[10px] bg-purple-400 absolute bottom-[50px] rounded-full"></div>
          <div className="hidden md:block w-[100px] h-[10px] bg-emerald-400 absolute bottom-[70px] rounded-full"></div>
          {/* right side content */}
          <div className="w-full md:w-[70%] h-full md:px-24  ">
            <div>
              <h1 className="text-2xl font-semibold">
                Benefit From Our Online Learning Expertise Earn{" "}
                <span className="text-orange-600">Professional</span>
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, numquam.
              </p>
              <div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
                  {/* mission */}
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-sm text-gray-700 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos sint et dolor possimus voluptatem exercitationem id
                      nesciunt repellat nemo cum.
                    </p>
                  </div>
                  {/* vision */}
                  <div>
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="text-sm text-gray-700 mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam vitae asperiores quidem accusantium iste, optio
                      dignissimos soluta doloribus! Assumenda, rem.
                    </p>
                  </div>
                </div>
                <button className="px-3 py-2 text-white bg-[#FE6440] mt-6 rounded-full hover:scale-95 transition-all">
                  Admission Open
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-[#FE6440] mt-28 mx-auto rounded-full px-12 py-10 md:w-[70%] w-[50%]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/*  */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[10px] left-[18px] text-orange-600 w-[30px] h-[30px]">
                <StudentIcon />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl text-white font-semibold">3.9K+</h5>
              <p className="text-sm text-gray-800 mt-2">Successfully Trained</p>
            </div>
          </div>
          {/*  */}

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[18px] text-orange-600 w-[30px] h-[30px]">
                <Book />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl text-white font-semibold">15.8K+</h5>
              <p className="text-sm text-gray-800 mt-2">Classes Completed</p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[16px] text-orange-600 w-[30px] h-[30px]">
                <FontAwesomeIcon icon={faCrown} />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl text-white font-semibold">97.5K+</h5>
              <p className="text-sm text-gray-800 mt-2">Satisfaction Rate</p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[16px] text-orange-600 w-[30px] h-[30px]">
                <FontAwesomeIcon icon={faUsers} />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl text-white font-semibold">100.2K+</h5>
              <p className="text-sm text-gray-800 mt-2">Students Community</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="w-full mx-auto md:w-[80%]  mt-24 ">
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          Creating A Community Of <br />
          Lifelong Learners
        </h3>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-[100%]">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      {/* courses */}
      <h3 className="mt-28 text-4xl md:text-3xl font-semibold text-center">
        Our Courses
      </h3>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mx-auto md:w-[70%] gap-y-8">
      {courseData.slice(0,4).map((course)=>
        <CourseCard course={course} />)}
      
      </div>
      {/* our Instructor */}
      <div className="bg-[#E8E8F4] w-full min-h-[550px] pt-20 mt-28">
        <h3 className=" text-2xl md:text-3xl font-semibold text-center">
          Meet Our Instructor
        </h3>

       <div className="mt-12 grid grid-cols-1 sm:grid-cols-4  w-[60%] mx-auto gap-8 md:gap-0 "> 
      
          {teacherData &&
            teacherData.slice(0, 4).map((item) => (
              <div
                className=" w-[202px] h-[242px] flex justify-center items-center rounded-sm"
           
              >
                <InstructorCard item={item}      key={item.id}/>
              </div>
            
            ))}
       
         </div> 
        <div className="md:mt-8 flex justify-center gap-5 py-6">
          <div className="w-[60px] h-[60px] bg-orange-600 rounded-full relative cursor-pointer hover:scale-95  transition-all">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-white absolute top-[20px] right-[24px]"
            />
          </div>
          <div className="w-[60px] h-[60px] bg-orange-600 rounded-full relative cursor-pointer hover:scale-95 transition-all">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white absolute top-[20px] right-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
