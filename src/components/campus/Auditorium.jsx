import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const Auditorium = () => {
    const data=useContext(siteContext)
    const auditoriumPic=data?.infrastructure?.auditorium;
    console.log(auditoriumPic)
  return (
    <>
    {auditoriumPic?.map((pic,i)=>
    <div className="w-[240px] h-[180px] mt-14" key={i}>
    <img src={pic.url} alt={i} className="w-[100%] h-[100%] object-cover rounded-xl" />
</div>
)}
    </>
  )
}

export default Auditorium