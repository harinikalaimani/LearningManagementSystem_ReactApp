import React from 'react'
import Coursedescription from '../../Components/StudentsComponents/Coursedescription'
import Header from '../../Components/StudentsComponents/Header'
import Courseconentbar from '../../Components/StudentsComponents/Reactsidebar';
import CourseHeading from '../../../src/Components/StudentsComponents/CourseHeading';
import { useParams } from 'react-router-dom';
export default function 
() {
  let { id } = useParams();
  return (
   <>
   <Header/>
   <section className='home-section'>
   <div className='m-left '>
    <div className='mrg-left'>
        <CourseHeading courseId={id}/>
        <Courseconentbar courseId={id}/>
        <Coursedescription/>
    </div>
   </div>
   </section>
   </>
  )
}
