import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function JavaIntro() {
  return (
    <Container>
      <Row>
        <Col className="javaintro">
          <div className="ljpassege">
            <p>
              Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications.
            </p>
            <br />
            <p>
              JAVA was developed by James Gosling at Sun Microsystems Inc in the year 1995 and later acquired by Oracle Corporation. It is a simple programming language. Java makes writing, compiling, and debugging programming easy. It helps to create reusable code and modular programs. Java is a class-based, object-oriented programming language and is designed to have as few implementation dependencies as possible. A general-purpose programming language made for developers to write once run anywhere that is compiled Java code can run on all platforms that support Java. Java applications are compiled to byte code that can run on any Java Virtual Machine.
            </p>
            <br />
            <h5 style={{ color: '#033939' }}>By the numbers</h5>
            <ListGroup >
              <ListGroup.Item>
                <span>Skill level:</span> Beginner Level
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Students:</span> 7021
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Languages:</span> English
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Captions:</span> No
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Lectures:</span> 21
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Video:</span> 3 total hours
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default JavaIntro;
