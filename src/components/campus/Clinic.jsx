import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const Clinic = () => {
    const data=useContext(siteContext)
    
    const desData=data?.Infrastructure?.clinic;

  return (
   <>
 { desData?.map((item)=>
    <div key={item.id} className='w-[240px] h-[180px]'>
      <img src={item.url} alt="" className='w-[100%] h-[100%] object-cover' />
</div>)
   }
   
   </>
  )
}

export default Clinic