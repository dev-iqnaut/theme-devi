import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const Laboratories = () => {
    const data=useContext(siteContext)
    
    const desData=data?.Infrastructure?.laboratories;

  return (
   <>
 { desData?.map((item)=>
    <div key={item.id} className='w-[240px] h-[180px] mt-14'>
      <img src={item} alt="" className='w-[100%] h-[100%] object-cover' />
</div>)
   }
   
   </>
  )
}

export default Laboratories