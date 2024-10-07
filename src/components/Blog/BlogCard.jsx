import React from 'react'
import img1 from "../../assets/blog/img1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Arrow from '../common/Arrow'
const BlogCard = () => {
  return (
    <div>
         <div className="w-full bg-[#F2F2F2] shadow-sm md:w-[300px] h-[420px]   rounded-[4px] p-4 ">
            {/* top */}
            <div className="w-[100%] h-[150px]">
                <img src={img1} alt="" className="w-[100%] h-[100%] object-cover rounded-[4px]" />
            </div>
            {/* bottom */}
            <div className="mt-4 ">
                
            <div className="flex gap-6 items-center">
                <p className="flex gap-2 items-center text-xs text-gray-500"><FontAwesomeIcon icon={faUser} className="text-[#7768E5]"/>Sunitha Kumar</p>
                <span className="flex gap-2 items-center text-xs text-gray-500"><FontAwesomeIcon icon={faCalendar} className="text-[#7768E5]"/>01 sep 2024</span>
            </div>
            <div className="mt-5 ">
                <p className='text-sm font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores <br />perferendis architecto corporis? Eos, similique?</p>
            </div>
            <div className="flex justify-start items-center mt-5">
          <div className="flex justify-between w-[170px] h-[50px] bg-[#E9E2FE] rounded-full font-medium hover:bg-[#795DD8] hover:text-white transition-all duration-200">
            <button className="px-5 py-3  text-[#795DD8] text-sm " ><Link to='/blog/details'>Read More</Link></button>
            <div className="w-12 h-12 bg-[#E9E2FE] shadow-md rounded-full flex justify-center items-center text-[#795DD8] ">
              <Arrow />
            </div>
          </div>
        </div>
            </div>

        </div>
    </div>
  )
}

export default BlogCard