import React from 'react'

const PrimaryLevel = () => {
  return (
    <>
    <div>
    <h2 className='text-2xl font-semibold mt-8'> Primary Level (Class 1 to 5)</h2>
    <ul className='flex flex-col gap-3 mt-8'>
       <li className="flex ">
        <h6 className="font-semibold w-[350px]">Admission Fee:</h6>
        <p>₹5,000 – ₹40,000 (one-time fee)</p>
       </li>
       <li className="flex  ">
        <h6 className="font-semibold w-[350px]">Tuition Fee:</h6>
        <p>₹3,000 – ₹12,000 per month</p>
       </li>
       <li className="flex ">
        <h6  className="font-semibold w-[350px]">Annual Fee:</h6>
        <p> ₹7,000 – ₹30,000  per year</p>
       </li>
       <li className="flex flex-col justify-start gap-2">
        <h6  className="font-semibold w-[350px] text-xl">Miscellaneous Fees:</h6>
       
     
      <ul className='flex flex-col gap-3'>
      <li className="flex">
        <h6  className="font-semibold w-[350px]">Sports/Activity Fee: </h6>
        <p>₹1,000 – ₹3,000 per month</p>
       </li>
       <li className="flex">
        <h6  className="font-semibold w-[350px]">Lab Fees (for basic computer use): </h6>
        <p>₹500 – ₹1,500  per month (if availing bus)</p>
       </li>
       <li className="flex">
        <h6  className="font-semibold w-[350px]">Transport Fee: </h6>
        <p>₹1,500 – ₹5,000 per month</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold w-[350px]">Books & Uniform: </h6>
        <p>₹5,000 – ₹15,000 annually</p>
       </li>
      </ul>
      </li>
       </ul>
    </div>
    
    </>
  )
}

export default PrimaryLevel