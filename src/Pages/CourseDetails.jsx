import React from 'react'
import image from "../assets/blog/img6.jpg"
import Star from '../components/common/Star'
import CourseIcon from '../components/Course/CourseIcon'
import CourseFee from '../components/Course/CourseFee'
const CourseDetails = () => {
  return (
    <div>
         <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
         <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">COURSE DETAILS</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Course Details</p>
       </div>
      </div>
      {/* details */}
      <div className='flex flex-col sm:flex-row w-[80%] h-full mx-auto my-[80px] justify-between gap-20'>
        <div className='w-[3/4] '>
        {/* image */}
        <div className='w-[3/4] h-[400px]'>
            <img src={image} alt="" className='w-[100%] h-[100%] object-cover rounded-md'/>
        </div>
        {/* content */}
        <div className='flex gap-2 mt-4 items-center'>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <p className='text-sm text-gray-800'>(4.7)</p>
        </div>
        <h1 className='mt-6 text-2xl font-semibold'>Web Development Fully Complete Guidline</h1>
        <CourseIcon />
        <div className='flex flex-col md:flex-row flex-wrap md:items-center gap-3 mt-6'>
            <p className='px-3 py-2 bg-[#E9E2FE]  rounded-md hover:bg-[#795DD8] hover:text-white cursor-pointer transition-all duration-200'>Overview</p>
            <p className='px-3 py-2 bg-[#E9E2FE]   rounded-md hover:bg-[#795DD8] hover:text-white cursor-pointer transition-all duration-200'>Curriculam</p>
            <p className='px-3 py-2 bg-[#E9E2FE]  rounded-md hover:bg-[#795DD8] hover:text-white cursor-pointer transition-all duration-200'>Instructor</p>
            <p className='px-3 py-2 bg-[#E9E2FE]     rounded-md hover:bg-[#795DD8] hover:text-white cursor-pointer transition-all duration-200'>Reviews</p>
        </div>
        <h3 className='text-2xl font-semibold mt-8'>Course Description</h3>
        <p className='mt-4 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta temporibus adipisci iste nisi ea. Perspiciatis impedit velit voluptates saepe nesciunt neque laboriosam tempora officiis mollitia? Temporibus sit, ipsum asperiores dolor velit natus eum impedit consectetur. Sunt quae sequi praesentium deleniti non vero nostrum laudantium, incidunt quidem unde consequatur dolore quasi! Ipsam atque vitae aliquam nisi esse error incidunt quidem ipsa quibusdam autem, voluptatum at, excepturi hic assumenda magnam perspiciatis. Delectus expedita distinctio qui alias! Deserunt incidunt a dolor maiores temporebr
           expedita dicta perferendis optio sequi fuga, eaque amet. Praesentium quod pariatur doloribus consectetur sit quam voluptas aut placeat tenetur earum repellendus at harum ipsa hic, labore quasi voluptates quos sed odio ut esse eaque explicabo! Totam, quo suscipit! Iusto voluptatibus ducimus in ipsam optio perspiciatis facilis inventore, nam explicabo vitae repellendus modi dignissimos ullam reprehenderit consequatur. Quidem inventore ipsam repellat commodi aut sed deserunt, eveniet, tenetur beatae perspiciatis similique!</p>
         <h3 className='text-2xl font-semibold mt-4'>What Will I Learn From This Course</h3>
         <p className='mt-4 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eligendi quidem tempora blanditiis a corrupti et, aut cupiditate quo, odit necessitatibus veniam repudiandae, tempore dolorum aperiam dignissimos repellat quia doloribus iste distinctio qui minima? Maiores possimus, rem, cupiditate nemo cumque, inventore consectetur ab facilis excepturi dolorem aspernatur expedita mollitia illo voluptatibus earum ex magni unde eligendi. Tenetur cupiditate ut magnam quis minima quibusdam illum sit harum molestiae? In commodi vero maxime corporis architecto inventore aspernatur facilis laudantium officiis, repellat ad?</p>
      </div>
     <div className='w-[1/4]'>
     <CourseFee/>
     </div>
    </div>
    </div>
  )
}

export default CourseDetails