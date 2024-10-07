import React from 'react'
import EventCard from '../components/Events/EventCard'
import Arrow from '../components/common/Arrow'

const Event = () => {
  return (
    <div>
         <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold w-[100%]">
         <div className="flex flex-col items-center">
       <h1 className="text-4xl sm:text-6xl font-bold">EVENT</h1>
       <p className="text-xs sm:text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> event</p>
       </div>
            </div>

            {/* event card*/}
            <div className='w-full md:w-[70%] mx-auto my-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            </div>
           <div className='flex justify-center items-center mt-8 mb-[80px]'>
           <div className='flex justify-between w-[180px] h-[50px] bg-[#7768E5] rounded-full '>
            <button className='px-5 py-3  text-white'>Load More</button>
            <div className='w-12 h-12 bg-[#795DD8] shadow-md rounded-full flex justify-center items-center'><Arrow/></div>
            </div>
           </div>
    </div>
  )
}

export default Event