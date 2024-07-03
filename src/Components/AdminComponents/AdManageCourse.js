import React from 'react'
import {useSelector } from 'react-redux'
import CourseCard from ".././../../src/Components/AdminComponents/AdCourseManagement/CoursePage"
function AdManageCourse() {

  const {usersList, error} = useSelector((state) => state.users)

  return (
    <div>
      <div>
        <CourseCard/>
      </div>
    </div>
  )
}

export default AdManageCourse