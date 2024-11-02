import React, { useContext, useState } from "react";
import { siteContext } from "../context/SiteContextProvider";
import AngleRight from "../components/common/AngleRight";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Academics = () => {
  const [kinderdropDown, setKinderDropDown] = useState(false);
  const [primarydropDown, setprimaryDropDown] = useState(false);
  const [secondarydropDown, setsecondaryDropDown] = useState(false);
  const [higherdropDown, sethigherDropDown] = useState(false);
  const data = useContext(siteContext);
  console.log("academic page",data)
  const cbseData=data.cbseCompliance;
  console.log("academics",cbseData);

  // framer-motion
  const dropdownVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <div className="flex text-4xl md:text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] items-center justify-center  font-bold ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Academics</h1>
          <p className="text-xs sm:text-sm mt-5 font-medium">
            AboutUs <span className="text-[#FE6440]">//</span> Academics
          </p>
        </div>
      </div>

      {/* content */}
      <div className="w-[80%] mx-auto my-[80px] flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col justify-between   ">
          <div className="flex flex-col lg:flex-row">
            <div >
              <h4
                className="px-4 py-2 bg-[#18254F] text-white cursor-pointer"
                onClick={() => setKinderDropDown(!kinderdropDown)}
              >
                KinderGarten
              </h4>
              {kinderdropDown && (
                <div
                  className="bg-white p-3 flex flex-col gap-3 shadow-md"
                  onMouseLeave={() => setKinderDropDown(false)}
                >
                  <motion.div
                    initial={false}
                    animate={kinderdropDown ? "open" : "closed"}
                    variants={dropdownVariants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p>Nursery</p>
                    <p>LKG</p>
                    <p>UKG</p>
                  </motion.div>
                </div>
              )}
            </div>
            <div>
              <h4
                className="px-4 py-2 bg-[#18254F] text-white cursor-pointer"
                onClick={() => setprimaryDropDown(!primarydropDown)}
              >
                Primary Level
              </h4>
              {primarydropDown && (
                <div
                  className="bg-white p-3 flex flex-col gap-3 shadow-md"
                  onMouseLeave={() => setprimaryDropDown(false)}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                </div>
              )}
            </div>
            <div>
              <h4
                className="px-4 py-2 bg-[#18254F] text-white cursor-pointer"
                onClick={() => setsecondaryDropDown(!secondarydropDown)}
              >
                Secondary Level
              </h4>
              {secondarydropDown && (
                <div
                  className="bg-white p-3 flex flex-col gap-3 shadow-md"
                  onMouseLeave={() => setsecondaryDropDown(false)}
                >
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                </div>
              )}
            </div>
            <div>
              <h4
                className="px-4 py-2 bg-[#18254F] text-white cursor-pointer"
                onClick={() => sethigherDropDown(!higherdropDown)}
              >
                Higher Secondary Level
              </h4>
              {higherdropDown && (
                <div
                  className="bg-white p-3 flex flex-col gap-3 shadow-md"
                  onMouseLeave={() => sethigherDropDown(false)}
                >
                  <p>11</p>
                  <p>12</p>
                </div>
              )}
            </div>
          </div>

          {/* exam schedule */}
          <div className="bg-red-100 mt-4  px-5 py-2 w-[66%]">
            <a href={data?.academics?.examSchedule} target="_blank">
              <div className="flex justify-between">
                <h4>Exam Schedule</h4>
                <div>
                  <AngleRight />
                </div>
              </div>
            </a>
          </div>

          {/* cbsc compliance */}
          <div className="">
            <h3 className="mt-8 text-2xl font-semibold">CBSC Compliance</h3>
            <p className="mt-5 text-sm text-gray-700">
           
              We follow specific standards, rules, and regulations set by the
              CBSE, a prominent educational board in India. CBSE compliance
              ensures that affiliated schools provide a uniform, high-quality
              educational environment
            </p>
            <div>
              <table className="flex justify-center items-center mt-12 ">
               <tbody className="border border-black px-4 py-2 rounded-sm" >
                <tr >
                  <td className="w-[300px]">Annual Report</td>
                  <td className="hover:text-green-600 transition-all duration-200 cursor-pointer"><a href={cbseData?.annualReport}> click here </a></td>
                </tr>
                <tr>
                  <td>Cbsc Affiliation</td>
                  <td className="hover:text-green-600 transition-all duration-200 cursor-pointer"><a href={cbseData?.cbseAffiliation}> click here </a></td>
                </tr>
                <tr>
                  <td>Mandatory Public Disclosure</td>
                  <td className="hover:text-green-600 transition-all duration-200 cursor-pointer"><a href={cbseData?.mandatoryPublicDisclosure}> click here </a></td>
                </tr>
               </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* academic calendar */}
        <div className="w-full mt-8 lg:mt-0 shadow-md p-6 flex flex-col items-center gap-6 h-[160px] lg:w-[600px] bg-gray-100">
          <h4 className="font-semibold text-2xl">Academic Calendar</h4>
          <button className="px-3 py-2 bg-purple-700 text-white rounded-md">
            <a href={data?.academics?.academicCalendar} target="_blank">
              view
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Academics;
