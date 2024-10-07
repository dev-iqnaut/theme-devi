import React from 'react'
import img from "../../assets/shop/book.jpg"
const Table = () => {
  return (
    <div>
        <table className='w-full border-collapse mx-auto '>
            <thead>
                <tr className='border border-gray-300  text-left bg-[#E8E8F4]'>
                    <th className='px-5 py-3'>Product</th>
                    <th className=' py-3'>Price</th>
                    <th className=' py-3'>Quantity</th>
                    <th className='py-3'>Total</th>
                    <th className='py-3'>Action</th>
                </tr>
            </thead>
            <tbody className='border border-gray-300'>
                <tr className='border border-gray-300 '>
                    <td className='flex items-center gap-2 px-4'>
                        <div className='w-[70px] h-[70px] p-2 bg-white shadow-md rounded-md '>
                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover rounded-md'/>
                        </div>
                        <p>Book</p>
                    </td>
                    <td>$10.00</td>
                    <td>
                        <div className='flex gap-1 '>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                        </div>
                    </td>
                    <td >$50.00</td>
                    <td><div className='w-[20px] h-[20px] rounded-full bg-red-600 shadow-sm flex justify-center items-center'>
                        <button className='text-white'>X</button></div></td>
                </tr>
                <tr className='border border-gray-300 '>
                    <td className='flex items-center gap-2 px-4'>
                        <div className='w-[70px] h-[70px] p-2 bg-white shadow-md rounded-md '>
                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover rounded-md'/>
                        </div>
                        <p>Book</p>
                    </td>
                    <td>$10.00</td>
                    <td>
                        <div className='flex gap-1 '>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                        </div>
                    </td>
                    <td >$50.00</td>
                    <td><div className='w-[20px] h-[20px] rounded-full bg-red-600 shadow-sm flex justify-center items-center'>
                        <button className='text-white'>X</button></div></td>
                </tr>
                <tr className='border border-gray-300 '>
                    <td className='flex items-center gap-2 px-4'>
                        <div className='w-[70px] h-[70px] p-2 bg-white shadow-md rounded-md '>
                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover rounded-md'/>
                        </div>
                        <p>Book</p>
                    </td>
                    <td>$10.00</td>
                    <td>
                        <div className='flex gap-1 '>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                        </div>
                    </td>
                    <td >$50.00</td>
                    <td><div className='w-[20px] h-[20px] rounded-full bg-red-600 shadow-sm flex justify-center items-center'>
                        <button className='text-white'>X</button></div></td>
                </tr>
                <tr className='border border-gray-300 '>
                    <td className='flex items-center gap-2 px-4'>
                        <div className='w-[70px] h-[70px] p-2 bg-white shadow-md rounded-md '>
                            <img src={img} alt="" className='w-[100%] h-[100%] object-cover rounded-md'/>
                        </div>
                        <p>Book</p>
                    </td>
                    <td>$10.00</td>
                    <td>
                        <div className='flex gap-1 '>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                        </div>
                    </td>
                    <td >$50.00</td>
                    <td><div className='w-[20px] h-[20px] rounded-full bg-red-600 shadow-sm flex justify-center items-center'>
                        <button className='text-white'>X</button></div></td>
                </tr>
                
            </tbody>
         </table>
    </div>
  )
}

export default Table