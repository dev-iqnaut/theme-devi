import React from 'react'
import img from "../../assets/blog/img7.jpg"
const Gallery = () => {
  return (
    <div>
        <div >
        <div className='w-[75px] h-[70px]'>
            <img src={img} alt="" className='object-cover w-full h-full  rounded-md'/>
        </div>
        
        </div>
    </div>
  )
}

export default Gallery