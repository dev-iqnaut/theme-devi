import React from 'react'
import img from "../../assets/admission/admission.png"
import Tick from "../../components/common/Tick"
const AdmissionPopup = ({setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <> 
    <div className='w-screen h-screen bg-[rgba(0,0,0,0.4)] left-0 top-0 fixed flex justify-center items-center z-[9999]'>
      <div className='w-[500px] h-[320px] bg-white shadow-sm p-4 relative'>
         <h2 className='text-2xl text-green-500 font-semibold text-center'>ADMISSION OPEN NOW</h2>
         <div onClick={handleClose} className='absolute top-5 right-5 text-white cursor-pointer flex justify-center items-center text-xl font-bold bg-red-600 px-4 py-2 rounded-full w-[30px] h-[30px]
         hover:scale-110 transition-all duration-200'>
            x</div>
        <h4 className='text-xl font-semibold mt-4 text-center'>Edunity cbsc school</h4>
        <div className='flex gap-7'>
        <div className='flex justify-between mt-3'>
          <div className='w-[200px] h-[200px] '>
            <img src={img} alt="" className='w-[100%] h-[100%] object-cover'/>
          </div>
         
        </div>
        <div>
        <div>
            <p className=' font-medium mt-5'>Academic Year(2024-2025)</p>
          
            <span className='mt-2 text-green-600'>Now open for Registration</span>
          </div>
          <p className='mt-4 font-medium flex gap-2'><div className='text-green-600'><Tick/></div>Quality Teachers</p>
          <p className='font-medium flex gap-2'><div className='text-green-600'><Tick/></div>Multiple Playrooms</p>
          <p className='font-medium flex gap-2'><div className='text-green-600'><Tick/></div>Bus Facility</p>
          <p className='font-medium flex gap-2'><div className='text-green-600'><Tick/></div>Loving atmosphere</p>
        </div>
        </div>
      </div>
       


    </div>
    
    
    
    </>
  )
}

export default AdmissionPopup