import React from "react";
import img from "../assets/home/img-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/blog/img7.jpg"
import {
  faClock,
  faLocation,

} from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import Arrow from "../components/common/Arrow";
const EventDetails = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold  w-[100%]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">EVENT DETAILS</h1>
          <p className="text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Event Details
          </p>
        </div>
      </div>
      {/* details */}
      <div className="w-full mx-auto md:w-[80%] flex flex-col md:flex-row justify-between gap-20 my-[80px]">
        {/* left - image */}
        <div className="w-full md:w-[3/4]">
          <div className=" h-[400px] ">
            <img
              src={img}
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90"
            />
          </div>
          {/* content */}
          <div>
            <h1 className="font-semibold mt-8 text-xl md:text-3xl">
              These are designed to Provide Hands Training And Skill-Building
            </h1>
            <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between mt-3 md:gap-0 text-gray-700">
              <div className="flex gap-2 item-center justify-center">
                <p>
                  <FontAwesomeIcon icon={faBook} className="text-[#FE6440]" />
                </p>
                <p>Lesson - 01</p>
              </div>
              <div className="flex gap-2 item-center justify-center">
                <p>
                  <FontAwesomeIcon icon={faClock} className="text-[#FE6440]" />
                </p>
                <p>9:00 AM - 12:00 PM</p>
              </div>
              <div className="flex gap-2 item-center justify-center">
                <p>
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="text-[#FE6440]"
                  />
                </p>
                <p>1823 Columbia MainRoad</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              tempora similique incidunt necessitatibus, odio nulla velit, ipsa
              officiis ipsum asperiores natus obcaecati doloremque, ipsam
              repudiandae harum!]
            </p>
            <h3 className="mt-6 font-semibold text-xl">Event Description</h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur eius amet, laborum minus omnis in debitis dignissimos
              eligendi explicabo nostrum iste repudiandae iusto. Sunt adipisci
              fuga eos nemo corrupti laboriosam facilis! Reiciendis dignissimos
              odit, eius, voluptates corrupti atque mollitia suscipit facere
              totam soluta, fugit sed? Modi, laudantium voluptate. Similique
              aliquam assumenda nostrum nobis, quasi voluptates eius placeat
              voluptate vel quibusdam magnam temporibus harum dicta adipisci
              architecto, hic accusamus ad ea tenetur iste sequi eveniet
              possimus vitae. Non voluptates expedita necessitatibus iure
              deserunt explicabo reiciendis odit labore fugiat eos placeat dolor
              facere, debitis provident voluptas iste eveniet praesentium quasi
              quas fuga ad! Optio vitae repellendus velit aliquam, hic non iste
              atque in minima, explicabo culpa, impedit veritatis enim deleniti
              voluptas facere omnis corrupti voluptatem sit. Odio eius eligendi
              culpa laborum hic illum nesciunt suscipit quidem fugit, labore,
              illo beatae itaque. Optio officiis nam aut mollitia repellat culpa
              fugit reprehenderit doloremque fuga natus fugiat commodi maiores
              sit corrupti, provident ut atque esse ducimus! Voluptatibus ut
              corrupti facere dolores voluptatem, facilis, repellendus
              voluptatum tenetur magnam commodi quod placeat numquam beatae
              vero, consequatur possimus delectus animi cupiditate cum ab
              quibusdam. Inventore nesciunt dolorum tempore magnam fuga officiis
              accusantium ratione corrupti sed, quaerat placeat dolor?
            </p>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-[1/4] ">
           <div className="bg-[#E8E8F4] w-[280px] h-[500px] p-5 rounded-md">
             <div className="w-full h-[40%]">
              <img src={img1} alt="" className="w-full h-[100%] object-cover rounded-md"/>
             </div>
             <div>
             <div className="bg-[#7768E5] text-white px-4 py-2 mt-4 flex justify-center gap-2 rounded-sm">
             <button className="  ">Buy Ticket</button>
             <Arrow/>
             </div>
            <div className="mt-4 text-sm flex flex-col gap-4">
            <p className="">4:00 pm 6:00 pm</p>
             <p>25 January,2024</p>
             <p>3783 Columbia Mine Road</p>
             <p>Shinnston,WV 26431</p>
             <p>Infomail@gmail.com</p>
             <p>+9870123456789</p>
            </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
