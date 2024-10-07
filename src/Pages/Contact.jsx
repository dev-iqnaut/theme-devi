import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  fa1, faClock, faF,faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
      <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">CONTACT</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Contact</p>
       </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full gap-3 md:flex-row bg-[#E8E8F4] md:w-[80%] min-h-[600px] my-[80px]  md:gap-40 mx-auto">
          {/* left */}
          <div className="w-full md:w-[500px] px-3 h-[100%] mt-10 md:px-16 py-4 ">
            <h1 className=" font-semibold text-xl">Get In Touch</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              veniam recusandae qui ad nesciunt commodi.
            </p>
        
          <div className="bg-white w-full md:w-[450px] px-2 flex  flex-col  md:px-[60px] py-5  mt-[50px] rounded">
            <div>
                <div className="flex gap-4">
            <div className='w-[50px] h-[50px] rounded-full bg-[#fe634024] flex justify-center items-center'><FontAwesomeIcon icon={faMapLocation} className="text-[#FE6440] left-4"/></div>
            <div className="flex flex-col">
              <p className="text-gray-400">Our Address</p>
              <h4 className="font-bold text-lg mt-1">
                1564 Goosetown Drive <br />
                Matthews,NC 28105
              </h4>
              </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-4">
            <div className='w-[50px] h-[50px] rounded-full bg-[#fe634024] flex justify-center items-center'><FontAwesomeIcon icon={faClock} className="text-[#FE6440]  text-xl"/></div>
                <div>
              <p className="text-gray-400">Hours Of Operation</p>
              <h4 className="font-bold text-lg mt-1">
                Mon-Fri:9:00am to 5:00pm
              </h4>
              <p className="text-gray-400">[2nd sat Holiday]</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
            <div className='w-[50px] h-[50px] rounded-full bg-[#fe634024] flex justify-center items-center'><FontAwesomeIcon icon={faPhone}  className="text-[#FE6440]  text-xl"/></div>
            <div>
              <p className="text-gray-400">Contact</p>
              <h4 className="font-bold text-lg mt-1">
                +99-35895-4565 <br /> supportyou@info.com
              </h4>
              </div>
            </div>
           
          </div>
          <div className='mt-12 flex flex-col md:flex-row gap-4 mb-8 justify-between items-center'>
            <div>
              <p>Customer Care</p>
            </div>
            <div className="flex gap-2">
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'><FontAwesomeIcon icon={faFacebook}  className="text-[#FE6440]  text-xl"/></div>
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'><FontAwesomeIcon icon={faTwitter}  className="text-[#FE6440]  text-xl"/></div>
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'><FontAwesomeIcon icon={faInstagram}  className="text-[#FE6440]  text-xl"/></div>
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'><FontAwesomeIcon icon={faWhatsapp}  className="text-[#FE6440]  text-xl"/></div>
        </div>
        </div>
          </div>
          {/* right */}
          <div className="w-[80%] mx-auto md:w-[500px] h-[100%] ">
           <div className="mt-20 flex flex-col w-[90%]"> 
            <label htmlFor="">Name</label>
            <input type="text" className="px-4 py-2 mt-2" placeholder="Name"/>
           </div>
           <div className="mt-4 flex flex-col w-[90%]">
            <label htmlFor="">Email Address</label>
            <input type="email"  className="px-4 py-2 mt-2" placeholder="Email"/>
           </div>
           <div className="mt-4 flex flex-col w-[90%]">
            <label htmlFor="">Phone</label>
            <input type="text"  className="px-4 py-2 mt-2" placeholder="Phone Number"/>
           </div>
           <div className="mt-4 flex flex-col w-[90%]">
            <label htmlFor="">Subject</label>
            <input type="text"  className="px-4 py-2 mt-2" placeholder="Subject"/>
           </div>
           <div className="mt-4 flex flex-col w-[90%]">
            <label htmlFor="">Message</label>
            <textarea type="text"  className="px-4 py-2 mt-2 resize-none" placeholder="Message"/>
           </div>
           <button className="px-5 py-2 bg-[#7768E5] text-white mt-12 rounded-full mb-10 text-sm">Send Message</button>
           </div>
      </div>
        </div>
        
    </div>
  );
};

export default Contact;
