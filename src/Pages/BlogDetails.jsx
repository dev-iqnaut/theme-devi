import React, { useState } from "react";
import img1 from "../assets/blog/img1.jpg";
import Facebook from "../components/common/Facebook";
import Twitter from "../components/common/Twitter";

import RecentPost from "../components/RecentPost";
import PopularTag from "../components/PopularTag";
import CommentsCard from "../components/BlogDetails/CommentsCard";
import ReviewSection from "../components/BlogDetails/ReviewSection";
import Categories from "../components/BlogDetails/Categories";
import Calendar from "../components/common/Calendar";
import Message from "../components/common/Message";
import Skype from "../components/common/Skype";
import Search from "../components/common/Search";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const {id}=useParams();
  console.log("blog details page",id)

  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold">
        <div className="flex flex-col items-center">
          <h1 className=" text-3xl sm:text-6xl font-bold ">BLOG DETAILS</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Blog Details
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-[80%] mx-auto my-[80px] justify-between gap-20">
        <div className="">
          <div className=" w-full sm:w-[3/4]  ">
            {/* left */}
            <div className="w-full sm:w-[3/4] h-[290px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="flex gap-5 mt-3 text-gray-400">
              <div className="flex gap-2">
                <div className="text-orange-500 text-xs sm:text-sm">
                  <Calendar />
                </div>
                <p className="text-xs sm:text-sm">14 june 2024</p>
              </div>
              <div className="flex gap-2">
                <div className="text-orange-500 text-xs sm:text-sm">
                  <Message />
                </div>
                <p className="text-xs sm:text-sm">Comment (06)</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mt-10 ">
                Lorem ipsum dolor, sit amet adipisi
              </h2>
              <p className="mt-8 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, perspiciatis quaerat. Repudiandae blanditiis molestiae
                officia maiores. Delectus provident perspiciatis possimus
                quaerat voluptate. Vitae, repellat aspernatur sapiente,
                voluptatibus quidem quibusdam iusto nulla at quae ipsum et,
                itaque asperiores nisi voluptate tempore facere nobis! Laborum
                iste, officia eaque autem vel dolorem accusantium?
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                a cumque placeat magnam? Commodi, suscipit animi. Recusandae,
                eaque. Beatae qui vel nisi ad praesentium eligendi commodi ea
                nulla voluptate mollitia maiores eveniet, dolores porro fugit
                veniam deleniti tenetur, nobis fuga?
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis aperiam iure, tempora corrupti quasi explicabo.
              </p>
            </div>
            <div className="mt-10 bg-[#795DD8] text-white px-6 py-3 uppercase font-semibold underline">
              <p>
                "Educational Startegies:We delve into Effective Teaching and
                Learning Strategies,Instructional Method & Innovative Approaches
                to engage Students and enhance learning outcome".
              </p>
            </div>
            <div className="mt-16">
              <h2 className="font-semibold text-2xl">
                Learned from doing one of those Social Media
              </h2>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quos consequatur vitae nisi quas dolores ea possimus est eum
                deleniti.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                eveniet quos aperiam consequatur? Nulla, voluptatibus.
              </p>
              <p className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                distinctio velit quasi dolorem impedit enim ducimus, nihil quas!
              </p>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                deserunt odit voluptates necessitatibus aliquam atque soluta
                itaque esse harum ad dolores, porro ducimus repellat sunt non.
              </p>
            </div>
            <div className="hidden mt-[50px] md:flex flex-col sm:flex-row justify-between items-center bg-[#E8E8F4] px-5 py-3 rounded-md">
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <h6 className="font-semibold">Tags:</h6>
                <p className="px-4 py-1 bg-white rounded">Riding</p>
                <p className="px-4 py-1 bg-white">Travel</p>
                <p className="px-4 py-1 bg-white">Taxi</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <h6>Share</h6>

                <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center transition-all duration-200 hover:bg-orange-500   hover:text-white ">
                  <div className="text-2xl">
                    <Facebook />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center transition-all duration-200 hover:bg-orange-500   hover:text-white">
                  <div className=" text-2xl">
                    <Twitter />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center transition-all duration-200 hover:bg-orange-500   hover:text-white">
                  <div className=" text-2xl">
                    <Skype />
                  </div>
                </div>
              </div>
            </div>

            {/* comments section */}

            <div className="mt-[60px] ">
              <h1 className="font-semibold mt-4 text-2xl ">Comments</h1>
              <CommentsCard />
              <CommentsCard />
            </div>

            {/* Review Section */}

            <ReviewSection />
          </div>
        </div>
        {/* right */}
        <div className="w-full sm:w-[1/4]">
          <div className="flex w-full justify-between border border-gray-300 sm:w-[70%] rounded-sm px-3 py-2 items-center  ">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search here"
              className="border-none outline-none"
            />
            <div>
              <Search />{" "}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-semi-bold text-xl font-semibold uppercase">
              Category
            </h2>
            <Categories />
          </div>
          <div className="mt-12">
            <h1 className="text-xl text-semi-bold border-b border-gray-300 h-12 uppercase font-semibold">
              Recent Post
            </h1>
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
          <PopularTag />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
