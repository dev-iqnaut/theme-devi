import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BillingDetails = () => {
  return (
    <div>
        <div>
            <h1>Billing Details</h1>
            {/* form */}
            <div className='grid grid-cols-2 gap-3'>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>First Name<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm px-2 py-1' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>Last Name<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className=''>Company Name(optional)</label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
           <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor="" className='relative'>Country / Region<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
           <select name="" id="" className='border border-gray-400 rounded-sm  px-2 py-1'>
                <option value="">select an option</option>
            </select>
           </div>
           <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>Street Address<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
                <input type="text" className='border border-gray-400 rounded-sm mt-2  px-2 py-1' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>Town/City<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor="" className='relative'>District<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
           <select name="" id="" className='border border-gray-400 rounded-sm  px-2 py-1'>
                <option value="">select an option</option>
            </select>
           </div>
           <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className=''>Postal / Zip (optional)</label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>Phone<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='relative'>Email Address<FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
                <input type="text" className='border border-gray-400 rounded-sm  px-2 py-1' />
            </div>
            <div className='mt-4 flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Create an account</label>
            </div>
            <div className='mt-4 flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ship To a Different Address?</label>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className=''>Order Notes(optional)</label>
                <textarea type="text" className='border border-gray-400 rounded-sm  px-2 py-1 resize-none ' placeholder='Notes about your order: E.G special notes for delivery' />
            </div>
        </div>
    </div>
  )
}

export default BillingDetails