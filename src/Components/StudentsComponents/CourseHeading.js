import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuBookOpenCheck } from "react-icons/lu";

function CourseHeading() {
  

  return (
    <Container fluid className="ms-start">
      <div className="courseheading-container p-4">
        <Row>
          <Col xxl={8} lg={6} className="d-flex">
            <div className="coursebook-icon"><LuBookOpenCheck /></div>
            <div className="text-white mx-3 mt-2"><h4>Course Details</h4></div>
          </Col>
          <Col xxl={4} lg={6}>
            
            {/* <div className='mt-1 l'>
              <Button variant="outline-light" className="Leaderboard-md" data-bs-toggle="modal" data-bs-target="#dataTableModal">Leaderboard</Button>
            </div> */}
          </Col>
        </Row>
        <Button variant="outline-light" className="mt-2 Leaderboard-sm" data-bs-toggle="modal" data-bs-target="#dataTableModal">Leaderboard</Button>
      </div>
    </Container>
  );
}

export default CourseHeading;
