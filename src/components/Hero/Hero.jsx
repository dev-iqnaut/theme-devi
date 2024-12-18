import React, { useContext } from 'react'
import image_1 from "../../assets/home/img-1.jpg"
import { Link } from 'react-router-dom'
import Arrow from '../common/Arrow'
import img2 from "../../assets/blog/img7.jpg"
import img3 from "../../assets/blog/img8.jpg"
import { siteContext } from '../../context/SiteContextProvider'

const Hero = () => {
const data=useContext(siteContext);
const heroPic=data?.home?.hero?.heroImage;
console.log(data?.home?.hero)
  return (
    <div>

<div className='w-full min-h-[420px] bg-[#FBF8FF] flex justify-between relative flex-wrap '>
    {/* left */}
    <div className='lg:pl-[140px] md:py-[110px] px-6 lg:px-0 py-[10px]'>
       <p className='text-sm text-[#6E4EE6] '>WELCOME EDUCOM ONLINE COURSES</p>
       <h1 className='text-3xl md:text-4xl mt-4'>Achieving Your Dreams </h1>
       <h1 className='text-3xl md:text-4xl mt-3'>Through <span className='text-[#e9c73b]'>Education</span></h1>
       <p className='mt-7'>We are Experienced Educational Platform and Skilled Strategies <br /> for the Success of our Online Learning</p>
      
       <div className="flex justify-between w-[180px] h-[50px] bg-[#18254F] rounded-full mt-8 text-white">
            <button className="px-5 py-2   text-sm">
              <Link to="/courses">Find Courses</Link>
            </button>
            <div className="w-12 h-12 bg-[#203061] shadow-md rounded-full flex justify-center items-center  ">
              <Arrow />
            </div>
         
        <div></div>
       </div>
    </div>
   
    {/* right */}
    <div className='w-full lg:w-[600px] h-[500px] hidden lg:block'>
        <img src={heroPic} alt="" className='h-[100%] object-cover '/>
    </div>

</div>
<div className='hidden lg:block bg-white shadow-md absolute bottom-[300px] right-[500px] w-[200px] h-[100px] pt-4' >
        <p className='px-4'>200+ Instructor</p>
        <div className='flex mt-2 relative '>
        <div className='w-[40px] h-[40px] bg-[#18254F] rounded-full absolute right-[30px] z-50 flex justify-center items-center border-2 border-white'>
         <div className='text-white '>+</div>
        </div>
        <div className='w-[40px] h-[40px] bg-green-300 rounded-full absolute right-[60px] z-40'>
        <div className='w-full h-full '>
            <img src={img2} alt="" className='w-[100%] h-[100%] object-cover rounded-full border-2 border-white' />
          </div>
        </div>
        <div className='w-[40px] h-[40px] bg-blue-300 rounded-full absolute right-[90px] z-30'>
        <div className='w-full h-full'>
            <img src={img3} alt="" className='w-[100%] h-[100%] object-cover rounded-full border-2 border-white' />
          </div>
        </div>
        <div className='w-[40px] h-[40px] bg-yellow-300 rounded-full absolute right-[120px] z-20'>
        <div className='w-full h-full'>
            <img src={img2} alt="" className='w-[100%] h-[100%] object-cover rounded-full border-2 border-white' />
          </div>
        </div>
        <div  className='w-[40px] h-[40px] bg-gray-300 rounded-full absolute right-[150px] z-10'>
        <div className='w-full h-full'>
            <img src={img3} alt="" className='w-[100%] h-[100%] object-cover rounded-full border-2 border-white' />
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero