import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuBookOpenCheck } from "react-icons/lu";

function InCourseHeading() {
  return (
    <Container fluid className="ms-start">
      <div className="courseheading-container p-4">
        <Row>
          <Col xxl={8} lg={6} className="d-flex">
            <div className="coursebook-icon"><LuBookOpenCheck /></div>
            <div className="text-white mx-3 mt-2"><h4>Programming in Java</h4></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default InCourseHeading;
