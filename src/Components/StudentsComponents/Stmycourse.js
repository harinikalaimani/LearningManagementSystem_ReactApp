import React from "react";
import StCourseCard from "../../../src/Components/StudentsComponents/CourseCardn"
import Page_heading from "../../Components/StudentsComponents/Page-heading";
import { Container, Row, Col  } from 'react-bootstrap';

function Stmycourse() {
  return (
        <Row className="mrg-left">
          <Page_heading pageheading="My Courses" />
          <div className="mt-4">
             <StCourseCard/>
         </div>
        </Row>
  );
}

export default Stmycourse;