import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function WhatYouWillLearn() {
  return (
    <Container>
      <Row>
        <Col>
          <h6>What you'll learn</h6>
          <div>
              <div class="list-group-item">You will learn to install JDK and Local development environment</div>
              <div class="list-group-item">You will learn about Class diagrams, Sequence diagrams and Activity diagram</div>
              <div class="list-group-item">You will learn to Apply Java Concepts to Develop a Real-world Project</div>
              <div class="list-group-item">You will learn the best practices of Java Project Development</div>
              <div class="list-group-item">You will learn about Layered Architecture and How to use it to develop Java Projects</div>
              <div class="list-group-item">You will learn to debug and troubleshoot using Eclipse tool</div>
          </div>
          <br />
          <h6>Are there any course requirements or prerequisites?</h6>
          <ListGroup class="list-unstyled">
            <ListGroup.Item>Basics of Java</ListGroup.Item>
          </ListGroup>
          <br />
          <h6>Who this course is for:</h6>
          <ListGroup class="list-unstyled">
            <ListGroup.Item>Anyone who wants to learn to apply Java concepts to develop real-world projects</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatYouWillLearn;
