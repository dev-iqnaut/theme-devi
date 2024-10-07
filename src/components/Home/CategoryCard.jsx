
import React from 'react'
import Gear from '../common/Gear'











const CategoryCard = ({item}) => {



  return (
    <div>
    
        <div className='w-full md:w-[300px] h-[90px]  flex items-center gap-3 px-4 cursor-pointer rounded-md ' key={item.id} style={{background:item.color}}>
            <div className='w-[60px] h-[60px]  rounded-full flex justify-center items-center border-2 border-dashed ' style={{borderColor:item.dark}}> <div className=' text-3xl ' style={{color:item.dark}} >{item.icon}</div></div>
           
          <h5 className='font-medium'>{item.title}</h5>
        </div>
    
    </div>
  )
}

export default CategoryCard