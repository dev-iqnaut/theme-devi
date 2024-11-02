import React from 'react'
import img from "../../assets/blog/img7.jpg"
const Gallery = ({item}) => {
  return (
    <div>
        <div >
        <div className='w-[75px] h-[70px]'>
            <img src={item.url} alt="" className='object-cover w-full h-full  rounded-md'/>
        </div>
        
        </div>
    </div>
  )
}

export default Gallery