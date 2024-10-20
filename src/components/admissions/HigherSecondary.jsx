import React from 'react'

const HigherSecondary = () => {
  return (
    <>
    <div>
    <h2 className='text-2xl font-semibold mt-8'> Higher Secondary Level (Class 11 to 12)</h2>
    <ul className='flex flex-col gap-3 mt-8'>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Admission Fee:</h6>
        <p>₹5,000 – ₹50,000 (one-time fee)</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Tuition Fee:</h6>
        <p>₹5,000 – ₹20,000 per month</p>
       </li>
       <li className="flex ">
        <h6 className="font-semibold  w-[350px]">Annual Fee:</h6>
        <p>₹10,000 – ₹50,000  per year</p>
       </li>
       <li className="flex flex-col justify-start gap-2">
        <h6 className="font-semibold  w-[350px] text-xl">Miscellaneous Fees:</h6>
       
     
      <ul className='flex flex-col gap-3'>
      <li className="flex">
        <h6 className="font-semibold  w-[350px]">Sports/Activity Fee: </h6>
        <p>₹1,500 – ₹5,000  per month</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Lab Fees: <span className="text-sm text-gray-600 font-medium">(science and computer)</span> </h6>
        <p>₹1,500 – ₹5,000    per month (if availing bus)</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Transport Fee: </h6>
        <p>₹2,500 – ₹7,000 per month</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Examination Fee:  </h6>
        <p>₹1,000 – ₹5,000 annually</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold  w-[350px]">Books & Uniform: </h6>
        <p>₹7,000 – ₹25,000 annually</p>
       </li>
      </ul>
      </li>
       </ul>
    </div>
    
    </>
  )
}

export default HigherSecondary