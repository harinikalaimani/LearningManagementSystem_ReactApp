import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const JoinCourseSection = () => {
  const [courseCode, setCourseCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleCodeInputChange = (event) => {
    const code = event.target.value;

    // Regular expression for validation
    const isValidCode = /^[A-Za-z0-9]{5,7}$/.test(code);

    setCourseCode(code);

    if (!isValidCode) {
      setCodeError('Invalid code. Enter 5-7 letters or numbers, no spaces or symbols.');
    } else {
      setCodeError('');
    }
  };

  const handleJoinButtonClick = () => {
    // Perform joining logic here if needed
  };

  return (
    <section className="home-section">
      <div className='m-left'>
      <div className="mrg-left">
        <div className="d-flex joincourse" style={{ justifyContent: 'space-between' }}>
          <div className="text">
            <h3>Join Course</h3>
          </div>
          <div className="button mt-3">
            <Button
              type="button"
              id="joinButton"
              variant="outline-success"
              disabled={!courseCode.trim() || codeError !== ''}
              onClick={handleJoinButtonClick}
            >
              Join
            </Button>
          </div>
        </div>
        <Container className="ms-start mt-4">
          <Row>
            <Col>
              <div className="codeenter">
                <h5>Enter The Course Code</h5>
                <Form.Control
                  type="text"
                  id="codeInput"
                  placeholder="Enter Code"
                  value={courseCode}
                  onChange={handleCodeInputChange}
                  isInvalid={codeError !== ''}
                />
                <Form.Control.Feedback type="invalid" style={{ color: 'red' }}>
                  {codeError}
                </Form.Control.Feedback>
                <p>Enter the course code that you have received <span style={{ color: 'red' }}>*</span></p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h6>To sign in with a class code</h6>
              <ul>
                <li>Use an authorized account</li>
                <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
              </ul>
              <p>If you have trouble joining the class, go to the <a href="https://support.google.com/edu/classroom/answer/6020297?hl=en-GB&authuser=0#zippy=%2Ci-forgot-or-lost-the-class-code%2Cmy-class-code-doesnt-work" target="_blank">Help Centre article</a></p>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    </section>
  );
};

export default JoinCourseSection;
