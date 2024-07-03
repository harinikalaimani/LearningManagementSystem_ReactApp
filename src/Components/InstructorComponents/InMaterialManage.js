import React from 'react'
import AddMaterialModel from '../../../src/Components/InstructorComponents/CourseMaterial/AddMaterial'

function InMaterialManage({courseId}) {
  return (
    <div>
        <AddMaterialModel  course_id={courseId}/>
    </div>
  )
}

export default InMaterialManage