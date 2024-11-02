import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider'

const Laboratories = () => {
    const data=useContext(siteContext)
    
    const desData=data?.infrastructure?.laboratories;

  return (
   <>
 { desData?.map((item)=>
    <div key={item.id} className='w-[240px] h-[180px] mt-14'>
      <img src={item.url} alt="" className='w-[100%] h-[100%] object-cover rounded-xl' />
</div>)
   }
   
   </>
  )
}

export default Laboratories