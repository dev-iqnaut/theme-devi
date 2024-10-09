import React from "react";


import BlogCard from "../components/Blog/BlogCard";
const Blog = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold  w-full ">
      <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">BLOG</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Blog</p>
       </div>
      </div>
      <div className="mx-auto w-[80%] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-y-12 my-[80px] lg:w-[70%]">
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>

       

        
        

       
      </div>
    </div>
  );
};

export default Blog;
