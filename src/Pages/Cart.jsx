import React from "react";
import Table from "../components/Cart/Table";
import CouponCode from "../components/Cart/CouponCode";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold">CART PAGE</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            Home <span className="text-[#FE6440]">//</span> Cart
          </p>
        </div>
      </div>
      <div className="w-full md:w-[80%] mx-auto my-[80px]">
        <div className="flex flex-col md:flex-row gap-20  justify-between">
          <div className="w-[100%]">
          
            <Table />
          </div>
          {/* total amount */}

          <div className="w-full md:w-[30%]  bg-[#E8E8F4] p-4">
            <h4 className="font-semibold mt-4 border-b border-gray-400 h-8">
              Cart Totals
            </h4>
            <div className="flex justify-between mt-4 border-b border-gray-400 h-8 text-sm">
              <p>Subtotal</p>
              <span>$180.00</span>
            </div>
            <div className=" mt-4 text-sm">
              <div className="flex flex-col items-end gap-3  border-b border-gray-400 h-32">
                <div className="flex gap-3">
                  <p>
                    Flat rate <span>$180.00</span>
                  </p>
                  <input type="radio" />
                </div>

                <div className="flex gap-3">
                  <label htmlFor="">local pickup</label>
                  <input type="radio" />
                </div>
                <p>
                  Shipping to <span className="font-semibold">CA</span>
                </p>
                <span className="text-sm text-orange-600">Change Address</span>
              </div>
              <div className="flex justify-between mt-4">
                <p className="font-semibold">Total</p>
                <span className="font-bold text-orange-500">$180.00</span>
              </div>
              <div className="w-3/4 mx-auto mt-8">
                <button className="p-4 text-white bg-[#7768E5]  rounded-sm text-sm">
                 <Link to='/checkout'> Proceed to checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <CouponCode />
      </div>
    </div>
  );
};

export default Cart;
