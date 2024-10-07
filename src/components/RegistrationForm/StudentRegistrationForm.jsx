
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const StudentRegistrationForm = () => {
  return (
    <div >

  <form action="" className='mt-4' >
    <div className='flex flex-col gap-3' >
    <div className='flex flex-col'>
        <label htmlFor="" className='relative text-sm font-medium' >First Name <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
        <input type="text" name="firstname" className='px-3 py-2 mt-1 bg-transparent border border-gray-300 rounded-sm ' />
    </div>
    <div className='flex flex-col'>
        <label htmlFor="" className='relative text-sm font-medium'>Last Name <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
        <input type="text" name="lastname"  className='px-3 py-2 mt-1 bg-transparent border border-gray-300 rounded-sm'/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor="" className='relative text-sm font-medium'>Email <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
        <input type="email" name="email"  className='px-3 py-2 mt-1 bg-transparent border border-gray-300 rounded-sm'/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor="" className='relative text-sm font-medium'>Password <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
        <input type="password" name="password"  className='px-3 py-2 mt-1 bg-transparent border border-gray-300 rounded-sm'/>
    </div>
    <div className='flex flex-col'>
        <label htmlFor="" className='relative text-sm font-medium'>Confirm Password <FontAwesomeIcon icon={faStarOfLife} className='text-red-600 w-2 h-2 absolute'/></label>
        <input type="password" name="confirmpassword"  className='px-3 py-2 mt-1 bg-transparent border border-gray-300 rounded-sm'/>
    </div>
    <button className='px-3 py-2 bg-[#7768E5] text-white mt-4 hover:scale-95 transition-all duration-200'>Create Account</button>
    </div>
  </form>
 
    </div>
  )
}

export default StudentRegistrationForm