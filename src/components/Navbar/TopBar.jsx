import React, { useContext } from 'react'
import Phone from '../common/Phone'
import Mail from '../common/Mail'
import Map from '../common/Map'
import { siteContext } from '../../context/SiteContextProvider'


const TopBar = () => {
   const data=useContext(siteContext);
   const contactData=data.contactUs;
   console.log(data.contactUs)
    console.log("topbar",contactData)
  return (
    <div>
        <div className="bg-[#18254F] h-[30px] text-white  w-[100%] hidden md:block">
            <div className='w-[80%] mx-auto flex justify-items-center gap-10 text-xs p-2'>
                <div className='flex gap-3 border-r border-gray-400 w-[160px]'>
                   <p className='text-[#FFD25D]'> <Phone/></p>
                    <p>{contactData?.phoneNumber}</p>
                </div>
                <div className='flex gap-3 border-r border-gray-400 w-[210px]'>
                <p className='text-[#FFD25D]'> <Mail/></p>
                    <p>{contactData?.email}</p>
                </div>
                <div className='flex gap-3'>
                <p className='text-[#FFD25D]'> <Map/></p>
                    <p>{contactData?.location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar