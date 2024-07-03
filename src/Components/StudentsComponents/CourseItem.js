import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TbBook } from "react-icons/tb";

function CourseContainer() {
  return (
    <Container className="ms-start">
      <div className="courseheading-container p-4">
        <Row>
          <Col xxl={8} lg={6} 
          className="d-flex"
          >
            <div><TbBook className="coursebook-icon" /></div>
            <div className="text-white mx-3">
                <h4>Programming in Java</h4>
            </div>
          </Col>
          <Col xxl={4} lg={6} className="d-flex">
            <div>
              <div className="progress course-progress m-3" 
              style={{ height: '5px' }}>
               return <ProgressBar variant="success" now={25} aria-valuemin="0" aria-valuemax="100"
                style={{ width: '100px' }} />
              </div>
            </div>
            <div>
              <Button
                type="button"
                variant="outline-light"
                className="d-none d-md-block "
                data-bs-toggle="modal"
                data-bs-target="#dataTableModal"
              >
                Leaderboard
              </Button>
            </div>
          </Col>
        </Row>
        <Button
          type="button"
          variant="outline-light"
          className="mt-2 d-md-none d-block"
          data-bs-toggle="modal"
          data-bs-target="#dataTableModal"
        >
          Leaderboard
        </Button>
      </div>
    </Container>
  );
}

export default CourseContainer;
