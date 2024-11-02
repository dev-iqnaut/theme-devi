import React from "react";
import img from "../../assets/shop/book.jpg";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <div>
      <div className="bg-[#E8E8F4] p-6">
        <h1 className="font-bold mt-6">YOUR ORDER</h1>
        <div className="mt-6 flex justify-between font-medium h-8 border-b border-gray-300">
          <h5>PRODUCT</h5>
          <h5>SUBTOTAL</h5>
        </div>
        <div className="flex justify-between mt-8  h-52 md:h-24 border-b border-gray-300">
          <div className="flex gap-4 flex-col md:flex-row justify-center">
            <div className="w-[70px] h-[70px]  rounded-md ">
              <img
                src={img}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>LV print mini dress x 1</p>
              <div className="flex border border-gray-300 justify-center px-4 py-2 gap-10 rounded-sm  ">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
          <div>
            <p>$269.00</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between h-8 border-b border-gray-300">
          <p>Subtotal</p>
          <p>$269.00</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4 h-32 md:h-20 border-b border-gray-300">
          <p>Shipping</p>
          <div className="flex flex-col gap-3 items-end">
            <div>
              <label>Flat Rate:$180.00</label>
              <input type="radio" name="" id="" />
            </div>
            <div>
              <label>Local Pickup</label>
              <input type="radio" name="" id="" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between h-8  border-b border-gray-300">
          <p>Total</p>
          <p>$269.00</p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <input type="radio" name="" id="" />
            <div>
              <label htmlFor="" className="text-orange-500 font-medium">
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600">
                Make your payment directly into our bank account.Please use your
                order ID as the payment reference.Your order will not be shipped
                until the funds have cleared in our account
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <input type="radio" name="" id="" />
            <label htmlFor="" className="font-medium">
              Check Payments
            </label>
          </div>
          <div className="flex gap-3">
            <input type="radio" name="" id="" />
            <label htmlFor="" className="font-medium">
              Cash On Deliver
            </label>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <input type="radio" name="" id="" />
              <label htmlFor="" className="font-medium">
                Paypal
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-orange-500 underline">
                What is paypal?
              </a>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center ">
            <button className=" px-5 md:px-24 py-2 text-white bg-[#795DD8] rounded-sm">
             <Link to='/pagenotfound'> Place an Order</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
