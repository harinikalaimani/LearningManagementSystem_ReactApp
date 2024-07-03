import React from 'react'
import InMaterialManage from '../../../src/Components/InstructorComponents/InMaterialManage'
import InHeader from '../../Components/InstructorComponents/InHeader'
import CourseHeading from '../../Components/StudentsComponents/CourseHeading'
import { useParams } from 'react-router-dom'


function PInMaterialManage() {
  let {id}=useParams();

  return (
    <div>
        <InHeader/>
        <InMaterialManage  courseId={id} />
    </div>
  )
}

export default PInMaterialManage