import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const AssemblyArea = () => {
    const data=useContext(siteContext);
    const assemblyAreaPic=data?.infrastructure?.assemblyArea;
    console.log(assemblyAreaPic)

  return (
   <>
    {assemblyAreaPic?.map((pic,i)=>
    <div className="w-[240px] h-[180px] mt-14 " key={i}>
    <img src={pic.url} alt={i} className="w-[100%] h-[100%] object-cover rounded-xl" />
</div>
)}
   </>
  )
}

export default AssemblyArea