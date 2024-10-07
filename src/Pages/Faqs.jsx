import React from 'react'
import Accordion from "../components/faqs/Accordion"
const Faqs = () => {
  return (
    <div>
        <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">FAQS</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Faqs</p>
       </div>
            </div>
           <div className='my-[80px] flex flex-col gap-3'>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        </div>
    </div>
  )
}

export default Faqs