import React from 'react'

const CouponCode = () => {
  return (
    <div>
        <div className='w-[150%]  md:w-[80%]  mt-12 flex items-center gap-4 '>
            <label htmlFor="" className='hidden md:block font-medium'>Coupon:</label>
            <input type="text" placeholder='Coupon Code' className='w-[35%] border border-gray-400 rounded-sm p-2'/>
            <button className='px-3 py-2 bg-[#7768E5] text-white rounded-sm'>Apply Coupon</button>
         </div>
    </div>
  )
}

export default CouponCode