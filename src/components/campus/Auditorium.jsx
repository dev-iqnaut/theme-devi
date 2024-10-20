import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const Auditorium = () => {
    const data=useContext(siteContext)
    
  return (
    <>
    <div className='w-[240px] h-[180px]'>
        <img src="" alt="" className='w-[100%] h-[100%] object-cover'/>
    </div>
    </>
  )
}

export default Auditorium