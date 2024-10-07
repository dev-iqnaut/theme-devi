import React from 'react'
import img from "../../assets/blog/img4.jpg"
const CourseFee = () => {
  return (
    <div>
        <div className='flex flex-col w-[250px] min-h-[400px] bg-[#E9E2FE] p-3 rounded-sm'>
            {/* top */}
            <div className='w-full h-[200px]'>
                <img src={img} alt=""  className='w-[100%] h-[100%] object-cover'/>
            </div>
            {/* bottom */}
            <div>
                <div>
                    <div className='flex justify-between mt-5'>
                    <p className='font-semibold'>Course Fee</p>
                    <p className='font-semibold'>$60 <span className='line-through text-sm font-light'>$120</span></p>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                    <button className='px-12 py-2 bg-[#795DD8] text-white rounded-md '>Buy Now</button>
                    </div>
                    <div className='flex flex-col gap-3 mt-8 text-sm'>
                        <div className='flex justify-between'>
                            <p>Start Date</p>
                            <p>5h 20m</p>
                        </div>
                        <div  className='flex justify-between'>
                            <p>Enrolled</p>
                            <p>100</p>
                        </div>
                        <div  className='flex justify-between'>
                            <p>lectures</p>
                            <p>80</p>
                        </div>
                        <div  className='flex justify-between'>
                            <p>Skill Level</p>
                            <p>basic</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Class Day</p>
                            <p>Monday-Friday</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Language</p>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseFee