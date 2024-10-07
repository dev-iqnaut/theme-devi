import React from 'react'
import AngleRight from '../common/AngleRight'


const Categories = () => {
  return (
    <div>
         <div className="mt-4 w-[250px] flex flex-col gap-3 sm:w-[300px] ">
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm  hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Grapic Design <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Web Design <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Frontend Developer <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  Digital Marketing <AngleRight/>
                </p>
              </div>
              <div className="px-3 py-2 border border-gray-400 cursor-pointer rounded-sm hover:bg-[#795DD8] hover:text-white text-center transition-all duration-200">
                <p className="flex justify-between items-center">
                  FullStack Developer{" "}
                  <AngleRight/>
                </p>
              </div>
            </div>
    </div>
  )
}

export default Categories