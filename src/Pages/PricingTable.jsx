import React from 'react'
import PricingCard from '../components/pricing/PricingCard'

const PricingTable = () => {
  return (
    <div>
         <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
      <div className="flex flex-col items-center">
       <h1 className="text-3xl md:text-6xl font-bold">PRICING TABLES</h1>
       <p className="text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Pricing</p>
       </div>
      </div>

      {/* pricing tables */}

      <div className='mx-4 grid grid-cols-1 gap-y-6 md:grid-cols-3 w-[65%]  my-[80px] sm:mx-auto'>
      <PricingCard/>
      <PricingCard/>
      <PricingCard/>
      </div>
    </div>
  )
}

export default PricingTable