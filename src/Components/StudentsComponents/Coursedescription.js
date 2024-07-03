import React from 'react';
import { Tab, Nav, Col, Row, Container, Button, Card } from 'react-bootstrap';
import JavaIntro from '../../../src/Components/StudentsComponents/JavaIntro';
import WhatYouWillLearn from '../../../src/Components/StudentsComponents/WhatYouWillLearn';
import InstructorProfile from '../../../src/Components/StudentsComponents/InContactProfile';
function Coursedescription() {
  return (
    <div className="tab-section" id="tabs">
      <Container>
        <Row>
          <Col xs={12} className="mt-3">
            <Tab.Container defaultActiveKey="nav-home">
              <Nav variant="tabs" className="nav-fill" id="nav-tab">
                <Nav.Item>
                  <Nav.Link eventKey="nav-home">
                    Course description
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nav-profile">
                    Get certified
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nav-contact">
                    Announcement
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nav-about">
                    Instructor
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="py-3 px-3 px-sm-0" id="nav-tabContent">
                <Tab.Pane eventKey="nav-home">
                  <div className="javaintro">
                    {<JavaIntro/>}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="nav-profile">
                  <h5>Get SmartLearn certificate by completing entire course</h5>
                  <p>You will learn to apply Java programming to develop real-world projects with layered architecture and best practices</p>
                  <Button type="button" variant="success" size="lg" block disabled>
                    Download Certificate
                  </Button>
                  <br></br>
                  <br></br>
                  {<WhatYouWillLearn/>}
                </Tab.Pane>

                <Tab.Pane eventKey="nav-contact">
                  <div className="text-center mt-3">
                    <p>You all are having Google meeting today(2.04.24) at 6.30pm. You are requested to join the meeting without fail. We will have discussion regarding the java Installation.</p>
                    <h3>To join the video meeting, click this link:</h3><span><a href='https://meet.google.com/wiq-nbpq-jst'>https://meet.google.com/wiq-nbpq-jst</a></span>
                    <br></br>
                    <br></br>
                    <p>To join by phone instead, dial (US) +1 678-632-4983 and enter this PIN: 309 510 059#</p>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="nav-about">
                  <Row>
                    {<InstructorProfile/>}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Coursedescription;
