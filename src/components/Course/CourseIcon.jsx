import React from 'react'
import Clock from "../common/Clock";
import Book from "../common/Book";
import StudentIcon from "../common/StudentIcon";
const CourseIcon = ({course}) => {
  return (
    <div>
         <div className="flex gap-2 md:gap-10 mt-4 border-b-[1.5px] border-dashed border-b-gray-700 h-12">
        <div className="flex gap-2 items-baseline">
              <p className="text-[#795DD8]">
                <Book />
              </p>
              <p className="text-sm">{course.lesson}</p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="text-[#795DD8]">
                <Clock />
              </p>
              <p className="text-sm">{course.hours}</p>
            </div>
            <div className="flex gap-2 items-baseline">
              <p className="text-[#795DD8]">
                <StudentIcon />
              </p>
              <p className="text-sm">{course.student}</p>
            </div>
            </div>
    </div>
  )
}

export default CourseIcon