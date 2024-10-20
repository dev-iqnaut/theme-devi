import React from 'react'

const AdmissionPopup = ({setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <> 
    <div className='w-screen h-screen bg-[rgba(0,0,0,0.4)] left-0 right-0 fixed flex justify-center items-center z-[9999]'>
      <div className='w-[450px] h-[280px] bg-white shadow-sm p-4 relative'>
         <h2 className='text-2xl text-green-500 font-semibold text-center'>ADMISSION OPEN NOW</h2>
         <div onClick={handleClose} className='absolute top-5 right-5 text-white cursor-pointer flex justify-center items-center text-xl font-bold bg-red-600 px-4 py-2 rounded-full w-[30px] h-[30px]'>
            x</div>

      </div>
       


    </div>
    
    
    
    </>
  )
}

export default AdmissionPopup