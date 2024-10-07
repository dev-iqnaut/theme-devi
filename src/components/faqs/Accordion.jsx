import React, { useRef, useState } from 'react'

const Accordion = () => {
const[accordionOpen,setAccordionOpen]=useState(false);


const handleClick=()=>{
    setAccordionOpen(!accordionOpen)
}

  return (
    <div >
      <div className='bg-white   flex flex-col gap-2 mx-auto w-[70%] shadow-md border border-gray-300 overflow-hidden '> 
        <div className={`${accordionOpen && 'bg-[#FE6440] text-white w-full'}`}>
        <div className='flex justify-between cursor-pointer px-4 py-3' onClick={handleClick}>
            <span className='text-2xl'>what is react?</span>
           {accordionOpen?<span>-</span>:<span>+</span>} 
        </div>
        </div>
       <div className={`transition-all duration-300 ease-in-out px-4 py-3 overflow-hidden 
        ${accordionOpen? 'max-h-[80px] opacity-100':'max-h-0 opacity-0'}`} >
        <div className='overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam dolores modi nostrum. Nesciunt fuga, molestias quasi voluptatum nihil eaque?</div>
       </div>
      </div>
    </div>
  )
}

export default Accordion