import React from 'react'

const KinderGarten = () => {
  return (
    <>
    <div>
    <h2 className='text-2xl font-semibold mt-8'>Kindergarten (Nursery, LKG, UKG)</h2>
    <ul className='flex flex-col gap-3 mt-8'>
       <li className="flex">
        <h6 className="font-semibold w-[350px]">Admission Fee:</h6>
        <p>₹5,000 – ₹30,000 (one-time fee)</p>
       </li>
       <li className="flex ">
        <h6 className="font-semibold w-[350px]">Tuition Fee:</h6>
        <p>₹2,000 – ₹10,000 per month</p>
       </li>
       <li className="flex ">
        <h6 className="font-semibold w-[350px]">Annual Fee:</h6>
        <p>₹5,000 – ₹25,000 per year</p>
       </li>
       <li className="flex flex-col justify-start gap-2">
        <h6 className="font-semibold text-xl">Miscellaneous Fees:</h6>
       
     
      <ul className='flex flex-col gap-3'>
      <li className="flex ">
        <h6 className="font-semibold w-[350px]">Activity Fee:</h6>
        <p>₹500 – ₹2,000 per month</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold w-[350px]">Transport Fee:</h6>
        <p>₹1,000 – ₹4,000 per month (if availing bus)</p>
       </li>
       <li className="flex">
        <h6 className="font-semibold w-[350px]">Books & Uniform: </h6>
        <p>₹5,000 – ₹10,000 annually</p>
       </li>
      </ul>
      </li>
       </ul>
    </div>
    
    </>
  )
}

export default KinderGarten