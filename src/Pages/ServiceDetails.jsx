import React from "react";
import img from "../assets/blog/img7.jpg";
import Search from "../components/common/Search";
import Tick from "../components/common/Tick";
import video from "../assets/video/video1.mp4";

import AngleRight from "../components/common/AngleRight";
import PopularTag from "../components/PopularTag";
const ServiceDetails = () => {
  return (
    <div>
      <div className="flex text-4xl md:text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">SERVICE DETAILS</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Service Details
          </p>
        </div>
      </div>
      {/* section-1 */}
      <div className="flex flex-col sm:flex-row justify-between w-[80%] mx-auto my-[80px] gap-10">
        <div className="w-full flex flex-col sm:flex-row gap-10  sm:w-3/4">
          {/* left */}
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row gap-10">
              <div>
                <div className="w-full sm:w-[300px] h-[300px]">
                  <img
                    src={img}
                    alt=""
                    className="w-[100%] h-[100%] object-cover rounded-sm"
                  />
                </div>
              </div>
              {/* right */}
              <div>
                <div>
                  <h4 className="font-semibold text-3xl">WEB DESIGN</h4>
                  <p className="mt-4 text-sm text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa placeat laudantium quia commodi deleniti dignissimos
                    numquam quas obcaecati, libero ratione repellendus explicabo
                    quae repellat iste consectetur impedit nihil similique,
                    assumenda et? Doloribus fugit modi ut molestias optio
                    eveniet tenetur aliquid recusandae harum deserunt eos quam
                    quia libero, vitae illum iste.
                  </p>
                  <p className="mt-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum exercitationem iusto dolorum quia cum veritatis! Eaque
                    ipsam nesciunt fuga maxime molestias quos modi at, omnis aut
                    nihil eum eius est laudantium obcaecati sed ad ea,
                    perferendis commodi id tempora iste. Commodi dolores
                    asperiores voluptate, blanditiis ipsa maiores, adipisci
                  </p>
                </div>
              </div>
            </div>
            {/* section-2 */}

            <div className="mt-[80px]">
              <div>
                <h3 className="font-semibold text-3xl">SERVICE DESCRIPTION</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem laborum vitae nihil ex expedita facilis quidem eaque
                  laboriosam omnis? Repellendus a aperiam cum dolores, quos
                  nobis porro! Accusamus, libero nemo.
                </p>
                <p className="mt-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                  nemo officiis? Molestiae mollitia suscipit voluptatibus iste
                  quae animi. Unde esse ipsam distinctio sint cum quam
                  voluptatum debitis, harum consequuntur. Atque!
                </p>
              </div>
            </div>
            {/* requirements and description */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 ">
              <div className="bg-[#E8E8F4] rounded-md p-4">
                <div className="flex gap-2 justify-center items-center">
                  <div className="text-orange-500">
                    <Tick />
                  </div>
                  <h4 className="font-medium">Requirements</h4>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor aut, error sed, asperiores nihil odit neque vero quidem
                  nulla, veritatis laborum ad? Illo, saepe.
                </p>
              </div>
              <div className="bg-[#E8E8F4] rounded-md p-5">
                <div className="flex gap-2 justify-center items-center">
                  <div className="text-orange-500">
                    <Tick />
                  </div>
                  <h4 className="font-medium">Description</h4>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque dicta adipisci, nostrum impedit officiis nisi?
                  Molestias incidunt labore officiis, eius ipsam iure eligendi
                  ipsa!
                </p>
              </div>
            </div>
            {/* why you will learn */}
            <div className="mt-[80px]">
              <h4 className="text-3xl font-semibold">WHY YOU'LL LEARN</h4>
              <p className="text-sm text-gray-600 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                minus cumque facilis facere nam libero rem, ducimus quis
                laudantium, sit autem unde consectetur inventore fugit natus
                beatae perspiciatis tenetur fuga exercitationem quas voluptatum
                a alias.
              </p>
              <div className="mt-10">
                <video
                  src={video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-[300px] object-cover"
                  type="video/mp4"
                ></video>
              </div>
              <p className="mt-10 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                deleniti officia eum? Doloribus enim quibusdam veritatis nihil
                molestiae earum aliquid accusamus reprehenderit, impedit rem
                facere! Minus debitis voluptates, quos mollitia sunt molestiae
                id inventore sit.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                magnam ducimus, officiis numquam aliquid, dolore impedit
                pariatur voluptatum eos accusamus sint. Molestias illum
                voluptatum neque ea illo at, facere quasi animi reiciendis ex
                asperiores numquam esse voluptates, doloribus, non deserunt?
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" w-full sm:w-1/4">
          <div className=" w-[1/4] flex justify-between border border-gray-300  rounded-sm px-3 py-2 items-center  ">
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

          {/* categories */}
          <div className="mt-8">
            <h2 className="font-bold text-md sm:text-lg">SERVICE CATEGORY</h2>
            <div className=" w-[250px] mt-4 flex flex-col gap-3 sm:w-[300px] ">
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm  hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Grapic Design <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Web Design <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Frontend Developer <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Digital Marketing <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  FullStack Developer{" "}
                  <AngleRight/>
                </p>
              </div>
            </div>
          </div>
          {/* popular tag */}
          <PopularTag/>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
