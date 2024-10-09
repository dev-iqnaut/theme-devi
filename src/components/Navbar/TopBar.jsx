import React from 'react'
import Phone from '../common/Phone'
import Mail from '../common/Mail'
import Map from '../common/Map'

const TopBar = () => {
  return (
    <div>
        <div className="bg-[#18254F] h-[30px] text-white  w-[100%] hidden md:block">
            <div className='w-[80%] mx-auto flex justify-items-center gap-10 text-xs p-2'>
                <div className='flex gap-3 border-r border-gray-400 w-[160px]'>
                   <p className='text-[#FFD25D]'> <Phone/></p>
                    <p>(00) 875 784 5682</p>
                </div>
                <div className='flex gap-3 border-r border-gray-400 w-[210px]'>
                <p className='text-[#FFD25D]'> <Mail/></p>
                    <p>Pagargoinfo@gmail.com</p>
                </div>
                <div className='flex gap-3'>
                <p className='text-[#FFD25D]'> <Map/></p>
                    <p>238,Arimantab,Moska - USA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar