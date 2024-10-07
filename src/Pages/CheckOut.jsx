import React from 'react'
import BillingDetails from '../components/checkout/BillingDetails'
import Order from '../components/checkout/Order'

const CheckOut = () => {
  return (
    <div>
         <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center  font-bold ">
      <div className="flex flex-col items-center">
       <h1 className="text-3xl md:text-6xl font-bold">CHECKOUT</h1>
       <p className="text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Checkout</p>
       </div>
      </div>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2 w-[80%] mx-auto my-[80px]'>
          {/* billing details */}
          <div>
            <BillingDetails/>
          </div>
          {/* your order */}
          <div >
            <Order/>
          </div>
      </div>
    </div>
  )
}

export default CheckOut