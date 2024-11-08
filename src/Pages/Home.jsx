import React, { useContext, useState } from "react";
import Hero from "../components/Hero/Hero";
import CategoryCard from "../components/Home/CategoryCard";
import img1 from "../assets/blog/img5.jpg";
import img2 from "../assets/blog/img8.jpg";
import img3 from "../assets/blog/img3.jpeg";
import img from "../assets/blog/img5.jpg";
import CourseCard from "../components/Course/CourseCard";
import Card from "../components/Home/Card";
import StudentIcon from "../components/common/StudentIcon";
import Book from "../components/common/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faUsers } from "@fortawesome/free-solid-svg-icons";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import Quote from "../components/common/Quote";
import InstructorCard from "../components/instructor/InstructorCard";
import { Link } from "react-router-dom";
import video from "../assets/video/home.mp4";
import DiscoverCard from "../components/Home/DiscoverCard";
import BlogCard from "../components/Blog/BlogCard";
import Arrow from "../components/common/Arrow";

import Gear from "../components/common/Gear";
import Art from "../components/common/Art";
import Medal from "../components/common/Medal";
import Video from "../components/common/Video";
import Laptop from "../components/common/Laptop";
import Speaker from "../components/common/Speaker";
import Pen from "../components/common/Pen";
import Palette from "../components/common/Palette";
import BadgeCheck from "../components/common/BadgeCheck";
import courseData from "../sampleData/CourseData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdmissionPopup from "../components/admissions/AdmissionPopup";
import { siteContext } from "../context/SiteContextProvider";
export const categoryData = [
  {
    id: 1,
    title: "Business Management",
    color: "#EAF7FF",
    dark: "#4991ED",
    icon: <Gear />,
  },
  {
    id: 2,
    title: "Art & Design",
    color: "#FEF2F4",
    dark: "#FF8CA0",
    icon: <Art />,
  },
  {
    id: 3,
    title: "Personal Development",
    color: "#EEFBF4",
    dark: "#82DFB4",
    icon: <BadgeCheck />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    color: "#FEFAEF",
    dark: "#F8C75E",
    icon: <Palette />,
  },
  {
    id: 5,
    title: "Graphic Design",
    color: "#F7F4FF",
    dark: "#6D37D9",
    icon: <Pen />,
  },
  {
    id: 6,
    title: "Digital Marketing",
    color: "#FFEFF9",
    dark: "#C52279",
    icon: <Speaker />,
  },
  {
    id: 7,
    title: "Exclucive Design",
    color: "#F4F4FE",
    dark: "#212FC4",
    icon: <Medal />,
  },
  {
    id: 8,
    title: "Product Design",
    color: "#FFF7F0",
    dark: "#E5A461",
    icon: <Laptop />,
  },
  {
    id: 9,
    title: "Video & Photography",
    color: "#F2FBFF",
    dark: "#06ABEF",
    icon: <Video />,
  },
];

const settings = {
  dots: true, // Show dots navigation
  infinite: true, // No infinite scrolling
  speed: 800, // Speed of transition
  slidesToShow: 1, // Number of instructors to show at a time
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000, // Scroll 1 instructor at a time
};

const Home = () => {
  const [open, setOpen] = useState(true);
  const data=useContext(siteContext);
  console.log(courseData);
   console.log("carousel",data?.home?.carousel)
  // display only first 4 instructors
  const instructorFilter = data.facultyStaff;
  return (
    <div>
      {open && <AdmissionPopup setOpen={setOpen} />}
     <Slider {...settings}>
        <div>
          <Hero />
        </div>
        {data?.home?.carousel.map((item, i) => (
          <div key={i} className="w-full md:h-[500px]  relative h-[420px]">
            <div className="w-[100%] h-[100%]">
              <img
                src={item.image}
                alt=""
                className="w-[100%] h-[100%] object-cover opacity-90"
              />
            </div>
           <div className="absolute top-[120px] left-[120px]">
           <p className="text-3xl md:text-4xl  text-white font-bold md:w-[400px] w-full ">
             {item.title}
            </p>
            <button className="text-md bg-[#18254F] text-white rounded-full px-5 py-3 md:mt-8 mt-4"><Link to={`${item.buttonUrl}`}>{item.buttonText}</Link></button>
           </div>
          </div>
        ))}
      </Slider>
      {/* categories */}
      <div className="w-full">
        <h3 className="mt-24 text-3xl font-semibold text-center " data-aos="fade-up" data-aos-duration="1000">
          Browse By Categories
        </h3>
        <div className="w-[80%] md:w-[80%] lg:w-[66%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8"
        data-aos="zoom-out" data-aos-duration="1000">
          {categoryData.map((item) => (
            <CategoryCard item={item} key={item.id} />
          ))}
        </div>
      </div>

      {/* top courses */}
      <div className="bg-[#FDF9F6] w-full min-h-[950px] pt-[20px] mt-24">
        <div className="w-[80%] md:w-[70%] mx-auto mt-12 ">
          <h3 className="text-3xl font-semibold " data-aos="fade-up" data-aos-duration="1000">Top Courses</h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mx-auto">
            <h4 className="mt-4 font-medium text-gray-700" data-aos="fade-up" data-aos-duration="1000">
              Edunity Course Student Can Join With Us
            </h4>
            <div className="flex justify-center items-center ">
              <div className="flex justify-between w-[180px] h-[50px] bg-[#7768E5] rounded-full " data-aos="fade-up" data-aos-duration="1000">
                <button className="px-5 py-2  text-white text-sm" >
                  <Link to="/courses">Know More</Link>
                </button>
                <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12 gap-y-8">
            {courseData.slice(0, 4).map((course) => (
              <div key={course.id} data-aos="fade-up" data-aos-duration="1000">
                {" "}
                <CourseCard course={course} />
              </div>
            ))}
            {/* <CourseCard />
            <CourseCard />
            <CourseCard /> */}
          </div>
        </div>
      </div>
      {/* about us */}
      <section>
        <div className="w-full md:w-[80%] mx-auto mt-24">
          <div className="flex gap-10 ">
            <div className="w-[100%] lg:w-[50%] hidden lg:block">
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-20 md:gap-12">
                <div className="w-[300px] h-[300px] " data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src={img1}
                    alt=""
                    className="w-[100%] h-[100%] object-cover rounded-xl"
                  />
                </div>
                <div className="w-[220px] h-[220px]" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src={img2}
                    alt=""
                    className="w-[100%] h-[100%] object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4 w-[580px] h-[290px] relative flex justify-end">
                <div className="hidden lg:block w-[200px] h-[200px] bg-amber-100 absolute -top-20 right-[40%] rounded-full " data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex flex-col justify-center items-center top-[60px] right-[30px] absolute">
                    <p className="text-2xl text-gray-800 font-bold">35+</p>
                    <p className="mt-3 font-medium">Years Experience</p>
                  </div>
                </div>
                <img
                  src={img3}
                  alt=""
                  className="w-[50%] md:w-[90%] h-[100%] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* right side images */}

            <div className="w-[50%] relative mx-auto">
              <h3 className="text-3xl font-semibold " data-aos="fade-up" data-aos-duration="1000">
                Learn & Grow Your Skills Everywhere
              </h3>
              <p className="mt-12 text-gray-700 text-sm" data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem corrupti enim repellat dolor, in culpa, consequuntur,
                illo itaque quasi quaerat ea quibusdam iste vitae fugiat.
                Accusamus omnis eaque reiciendis explicabo.
              </p>
              <div className="flex flex-col md:flex-row justify-between mt-20 gap-8 ">
                {/* left */}
                <div className="w-full md:w-[50%]">
                  <h4 className="font-semibold" data-aos="fade-up" data-aos-duration="1000">Flexible Classes</h4>
                  <p className="text-sm mt-4 text-gray-700" data-aos="fade-up" data-aos-duration="1000">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis facilis quibusdam debitis, amet nihil
                    reprehenderit eos incidunt sequi praesentium dolore, quod
                    nemo corrupti quis.
                  </p>
                </div>
                {/* right */}
                <div className="w-full md:w-[50%] pr-4">
                  <h4 className="font-semibold" data-aos="fade-up" data-aos-duration="1000">Learn From Anywhere</h4>
                  <p className="text-sm mt-4 text-gray-700" data-aos="fade-up" data-aos-duration="1000">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatibus illo doloribus distinctio. Mollitia distinctio
                    nostrum veritatis quod! Dolorum ex animi alias enim porro
                    tenetur.
                  </p>
                </div>
              </div>
              <div className="flex  items-center ">
                <div className="flex justify-between w-[170px] h-[50px] bg-[#7768E5] rounded-full mt-12" data-aos="fade-up" data-aos-duration="1000">
                  <button className="px-5 py-2  text-white text-sm">
                    <Link to="/about">Load More</Link>
                  </button>
                  <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video */}
      <div className="w-full h-[400px] mt-24 relative" data-aos="zoom-in" data-aos-duration="1000">
        <video
          src={video}
          className="w-[100%] h-[100%] object-cover "
          controls
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
        <div className="absolute top-20 md:left-40  left-5  z-10 opacity-80 md:opacity-100">
          <p className="text-[#FFD25D] font-semibold" > Join Our New Session</p>
          <h4 className="text-4xl text-white font-bold mt-6">
            Call To Enroll Your Child
          </h4>
          <p className="mt-4 text-white text-4xl font-semibold">
            (+91)958423452
          </p>
          <div className="flex justify-between w-[180px] h-[50px] bg-[#FFD25D] rounded-full mt-8">
            <button className="px-5 py-2   text-sm">
              <Link to="/student/registration">Join With Us</Link>
            </button>
            <div className="w-12 h-12 bg-[#FFD25D] shadow-md rounded-full flex justify-center items-center ">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="mt-20 w-[80%] mx-auto  md:h-[550px]">
        <div className="">
          {/* left side content */}
          <div className="flex flex-col lg:flex-row  gap-20 justify-between">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-semibold text-3xl" data-aos="fade-up" data-aos-duration="1000">Why Choose Us?</h2>
              <h4 className="mt-12 font-medium text-xl"data-aos="fade-up" data-aos-duration="1000">
                Creating A Community Of Lifelong Learners
              </h4>
              <p className="mt-3 text-sm text-gray-700"data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                omnis voluptates ex tempore esse ratione magnam temporibus,
                corrupti aliquid dolores nisi impedit vel tenetur ipsum rem odio
                illo! Eaque, odio?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12" data-aos="fade-up" data-aos-duration="1000">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            {/* right side image */}
            <div className="w-full lg:w-1/2  block">
              <div className="w-full h-[550px] " data-aos="fade-up" data-aos-duration="1000">
                <img
                  src={img}
                  alt=""
                  className="w-[100%] h-[100%] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details card */}
      <div className="hidden xl:block bg-[#FFD25D] mt-28 mx-60 rounded-full px-12 py-10 absolute top-[555%] z-10 " data-aos="zoom-out" data-aos-duration="1000">
        <div className=" flex items-center gap-12">
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[10px] left-[18px]  w-[30px] h-[30px]">
                <StudentIcon />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl  font-semibold">3.9K+</h5>
              <p className="text-sm text-gray-800 mt-2">Successfully Trained</p>
            </div>
          </div>
          {/*  */}

          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[18px] w-[30px] h-[30px]">
                <Book />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl  font-semibold">15.8K+</h5>
              <p className="text-sm text-gray-800 mt-2">Classes Completed</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[16px] w-[30px] h-[30px]">
                <FontAwesomeIcon icon={faCrown} />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl  font-semibold">97.5K+</h5>
              <p className="text-sm text-gray-800 mt-2">Satisfaction Rate</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-white rounded-full relative">
              <p className="absolute top-[13px] left-[16px]  w-[30px] h-[30px]">
                <FontAwesomeIcon icon={faUsers} />
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="text-2xl  font-semibold">100.2K+</h5>
              <p className="text-sm text-gray-800 mt-2">Students Community</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="bg-[#F8F7FF] w-full lg:h-[550px] pt-32 md:mt-60 relative mt-0 ">
        <div className="w-[80%] mx-auto relative">
          <h3 className="font-semibold text-center text-2xl" data-aos="fade-up" data-aos-duration="1000">Testimonials</h3>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 mt-16 " data-aos="fade-up" data-aos-duration="1000">
          {/* <Slider {...settings}> */}
            <div className="z-10">
              <TestimonialCard />
            </div>
            <div className="z-10">
              <TestimonialCard />
            </div>
            <div className="z-10">
              <TestimonialCard />
            </div>

           
             {/* </Slider> */}
             </div>
            <div className="hidden lg:block absolute top-[45px] left-[10px] ">
              <Quote />
            </div>
            <div className="hidden lg:block absolute top-[45px] left-[410px]">
              <Quote />
            </div>
            <div className="hidden lg:block absolute top-[45px] left-[820px] ">
              <Quote />
            </div>
         
        </div>
      </div>
      <div className=" w-full  lg:h-[550px]">
        {/* meet our instructor */}
        <div className="w-[80%] flex flex-col lg:flex-row md:w-[80%] mx-auto mt-20">
          {/* left content */}
          <div className="w-full lg:w-[50%] flex  flex-col justify-center mx-auto" >
            <h1 className="text-3xl font-semibold " data-aos="fade-up" data-aos-duration="1000">
              Meet Our Expert Instructor
            </h1>
            <p className="text-sm text-gray-700 mt-6" data-aos="fade-up" data-aos-duration="1000">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate, autem ab animi dolore corporis a atque recusandae
              dolorum laudantium porro provident voluptates praesentium soluta.
              Optio architecto voluptatem quisquam cumque voluptatum.
            </p>
            <div className="flex flex-col md:flex-row gap-10 mt-10 items-center">
              <div className="flex justify-center items-center mt-4">
                <div className="flex justify-between w-[170px] h-[50px] bg-[#7768E5] rounded-full " data-aos="fade-up" data-aos-duration="1000">
                  <button className="px-5 py-3  text-white text-sm">
                    <Link to="/teacher">Contact Us</Link>
                  </button>
                  <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 mb-12 md:mb-0">
                <div className="flex justify-between w-[180px] h-[50px] bg-[#18254F] rounded-full " data-aos="fade-up" data-aos-duration="1000">
                  <button className="px-5 py-3  text-white text-sm">
                    <Link to="/courses">Find Courses</Link>
                  </button>
                  <div className="w-12 h-12 bg-[#203061] shadow-md rounded-full flex justify-center items-center text-white">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="w-[50%] px-12 md:mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-x-72 lg:gap-x-0">
              {instructorFilter &&
                instructorFilter.facultyPicture.slice(0,4).map((item) => (
                  <div
                    className="border-2 border-blue-700 w-[202px] h-[242px] flex justify-center items-center rounded-sm"
                    key={item.id} data-aos="fade-up" data-aos-duration="1000"
                  >
                    <InstructorCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* discover your brain  */}
      <div className="bg-[#F4F4F4] w-full lg:h-[550px] pt-24 mt-20">
        <div className="w-full lg:w-[70%] mx-auto">
          <div className="flex justify-center">
            <h3 className="text-3xl font-semibold " data-aos="fade-up" data-aos-duration="1000">
              Discover Your <span className="">Gain</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 " data-aos="fade-up" data-aos-duration="1000">
            <DiscoverCard />
            <DiscoverCard />
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="w-[80%] lg:w-[70%] mx-auto mt-28">
        <div className="flex flex-col lg:flex-row justify-between mx-auto ">
          <h3 className="text-4xl gap-4 lg:gap-0 md:text-3xl font-semibold" data-aos="fade-up" data-aos-duration="1000">
            Popular Post
          </h3>

          <div className="flex justify-center items-center mt-4">
            <div className="flex justify-between w-[180px] h-[50px] bg-[#7768E5] rounded-full " data-aos="fade-up" data-aos-duration="1000">
              <button className="px-5 py-3  text-white text-sm">
                <Link to="/blog">All Blog Post</Link>
              </button>
              <div className="w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center text-white">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      {/* newsletter */}
      <div className="w-full bg-[#704FE6] mt-24 flex flex-col md:flex-row justify-around items-center h-[200px] " data-aos="fade-up" data-aos-duration="1000">
        <div className="text-white">
          <h4 className="text-3xl font-semibold" data-aos="fade-up" data-aos-duration="1000">Join Our Newsletter</h4>
          <p className="text-xs mt-4 text-[#ffff] font-light" data-aos="fade-up" data-aos-duration="1000">
            Subscribe Our Newsletter to get our Latest Updates and News
          </p>
        </div>
        <div>
          <div className="bg-white rounded-md px-2 py-1 flex " data-aos="fade-up" data-aos-duration="1000">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-none outline-none "
            />
            <button className="bg-[#18254F] px-5 py-3 text-xs text-white rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
