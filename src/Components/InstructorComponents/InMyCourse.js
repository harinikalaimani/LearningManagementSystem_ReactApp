import React from "react";
import Page_heading from "../../../src/Components/StudentsComponents/Page-heading";
import InCourseCard from "./CourseCardInn";
import { Container, Row, Col  } from 'react-bootstrap';
function Inmycourse() {
  return (
      <Row className="mrg-left">
        <Col>
        <div>
         <div className="text">
            <h3>My Course</h3>
         </div>
       </div>
        <Container className="ms-start">
        <div className="mt-4">
             
         </div>
        </Container>
        <InCourseCard/>
        </Col>
      </Row>
  );
}

export default Inmycourse;