import React, { useContext, useEffect, useState } from "react";
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

import courseData from "../sampleData/CourseData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { siteContext } from "../context/SiteContextProvider";
import { Link } from "react-router-dom";

const About = () => {
  // const [data, setData] = useState([]);
  const data = useContext(siteContext);
  console.log(data,"about us data")
  // console.log(data.AboutUs.principal_message);
  // slider
  const settings = {
    dots: false, // Show dots navigation
    infinite: true, // No infinite scrolling
    speed: 800, // Speed of transition
    slidesToShow: 6, // Number of instructors to show at a time
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // Scroll 1 instructor at a time
  };

  //testimonial settings
  const settingsTestimonial = {
    dots: false, // Show dots navigation
    infinite: true, // No infinite scrolling
    speed: 800, // Speed of transition
    slidesToShow: 3, // Number of instructors to show at a time
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // Scroll 1 instructor at a time
  };
//responsive slider
  const responsive = [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  const responsiveTestimomnial = [
    {
      breakpoint: 1440,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 780,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ];

  // get mission and vision data from firestore db
  // const getData = async () => {
  //   try {
  //     const res = (await getDocs(collection(db, "sites"))).docs.map((doc) => ({
  //       // id:doc.id,
  //       ...doc.data(),
  //     }));

  //     console.log(res[0].siteData);
  //     console.log(res[0].siteData["About-Us"]);
  //     setData(res[0].siteData["About-Us"]);

  //     console.log("mission ", data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

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

      <div className="flex justify-center items-center w-full">
        <div className="mt-[120px] lg:w-[80%] h-full relative flex flex-col lg:flex-row ">
          {/* leftside imge */}
          <div className="hidden w-[50%] h-full lg:grid grid-cols-2 space-y-28 gap-3 ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src={img}
                alt=""
                className="w-[100%] h-[300px] object-cover"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src={data.aboutUs?.principalMessage?.principalImage}
                alt=""
                className="w-[100%] h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="hidden lg:block w-[160px] h-[150px] bg-amber-50 absolute top-[-48px] left-[255px] border-2 border-gray-100" data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col gap-3 justify-center items-center h-full">
              <div className="w-[70px] h-[70px] rounded-full bg-white relative border-2 border-orange-600">
                <p className="absolute top-[23px] left-[20px]">35+</p>
              </div>
              <p className="text-gray-700 font-medium text-md">
                Years Experience
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-[150px] h-[10px] bg-purple-400 absolute bottom-[50px] rounded-full" data-aos="fade-up" data-aos-duration="1000"></div>
          <div className="hidden lg:block w-[100px] h-[10px] bg-emerald-400 absolute bottom-[70px] rounded-full" data-aos="fade-up" data-aos-duration="1000"></div>
          {/* right side content */}
          <div className="w-[80%] lg:w-[70%] h-full md:px-24 mx-auto ">
            <div>
              <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="1000">
                Benefit From Our Online Learning Expertise Earn{" "}
                <span className="text-orange-600" >Professional</span>
              </h1>
              <p className="mt-5" data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, numquam.
              </p>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2  mt-4 gap-4">
                  {/* mission */}
                  <div>
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-duration="1000">Our Mission</h3>
                  <p className="text-sm text-gray-700 mt-3" data-aos="fade-up" data-aos-duration="1000">
                     {data&&data.aboutUs?.mission}

                    </p>
                  </div>
                  {/* vision */}
                  <div>
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-duration="1000">Our Vision</h3>
                    <p className="text-sm text-gray-700 mt-3" data-aos="fade-up" data-aos-duration="1000">
                    {data&&data.aboutUs?.vision}
                      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam vitae asperiores quidem accusantium iste, optio
                      dignissimos soluta doloribus! Assumenda, rem. */}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-2 text-white bg-[#FE6440] mt-6 rounded-full hover:scale-95 transition-all" data-aos="fade-up" data-aos-duration="1000">
                 <Link to='/admissions'> Admission Open</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-[#FE6440] mt-28 mx-auto rounded-full px-12 py-10 md:w-[70%] w-[50%]" data-aos="fade-up" data-aos-duration="1000">
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
      <div className="w-[90%] mx-auto md:w-[80%]  mt-24 ">
        <h3 className="text-xl md:text-2xl font-semibold text-center" data-aos="fade-up" data-aos-duration="1000">
          Creating A Community Of <br />
          Lifelong Learners
        </h3>
        {/* <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 w-[100%]"> */}
        <div className="mt-8" data-aos="fade-up" data-aos-duration="1000">
        <Slider {...settingsTestimonial} responsive={responsiveTestimomnial}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          </Slider>
        {/* </div> */}
        </div>
      </div>
      {/* courses */}
      <h3 className="mt-28 text-4xl md:text-3xl font-semibold text-center" data-aos="fade-up" data-aos-duration="1000">
        Our Courses
      </h3>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-24 mx-auto lg:w-[70%] gap-y-8" >
        {courseData.slice(0, 4).map((course,i) => (
         <div  data-aos="fade-up" data-aos-duration="1000" key={i}>
           <CourseCard course={course} />
         </div>
        ))}
      </div>
      {/* our Instructor */}
      <div className="bg-[#E8E8F4] w-full min-h-[550px] pt-20 mt-28">
        <h3 className=" text-2xl md:text-3xl font-semibold text-center" data-aos="fade-up" data-aos-duration="1000">
          Meet Our Instructor
        </h3>
<div className="mt-8 mx-auto w-[85%]" data-aos="fade-up" data-aos-duration="1000">
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-[80%] lg:w-[60%] mx-auto gap-8 md:gap-0 "> */}
        <Slider {...settings} responsive={responsive}>
          {data &&
           
            data.facultyStaff?.facultyPicture.slice(0,6).map((item) => (
              <div
                key={item.id}
                className=" w-[202px] h-[242px] flex justify-center items-center rounded-sm"
              >
                <InstructorCard item={item} />
              </div>
            ))}
          </Slider>
          </div>
        {/* </div> */}
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
