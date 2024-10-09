import React from 'react'
import StudentRegistrationForm from '../components/RegistrationForm/StudentRegistrationForm'

const StudentRegistration = () => {
  return (
    <div >
      <div className="text-6xl bg-gradient-to-r from-[#EBD6DB] to-[#DCDAF2] h-[300px] flex items-center justify-center font-bold w-[100%]">
      <div className="flex flex-col items-center justify-center">
       <h1 className="text-4xl md:text-6xl font-bold text-center">STUDENT REGISTRATION</h1>
       <p className="text-sm mt-5 font-medium">Home <span className="text-[#FE6440]">//</span> Student Registration</p>
       </div>
      </div>
      <div className='flex justify-center items-center'>
      <div className='w-[600px] min-h-[400px] bg-[#E8E8F4] my-[80px] px-10 py-6 '>
        <h1 className='text-2xl font-bold'>STUDENT REGISTRATION</h1>
        <h5 className='mt-4 text-sm font-bold'>Fields with are required</h5>
        <p className='mt-4 text-gray-500 text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam error laudantium ratione molestias illum? Explicabo, dignissimos!</p>
         <p className='text-lg font-bold mt-5'>Credentials</p>
         <StudentRegistrationForm/>
      </div>
    </div>
    </div>
  )
}

export default StudentRegistration
