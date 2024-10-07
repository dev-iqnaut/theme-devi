import React from 'react'
import Tick from '../common/Tick'

const Card = () => {
  return (
    <div>
        <div className='w-[280px] h-[140px] bg-[#E9E2FE] rounded-lg p-4'>
            <div className='flex gap-3'>
                <p className='text-[#7768E5]'><Tick/></p>
            <h5 className='font-semibold '>World Class Trainers</h5>
            </div>
             
             <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, quia.</p>
        </div>
    </div>
  )
}

export default Card