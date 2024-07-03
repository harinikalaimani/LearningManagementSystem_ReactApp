import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Service from './Service';
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa"
const OurServices = () => {
  return (
    <div className="container-xxl py-5">
      <div className="text-center text-dark mb-4"><h2>Our Services</h2></div>
      <Container>
        <Row className="g-4">
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
          <Service title="Skilled Instructors" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" icon={<FaGraduationCap/>}/>
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.3s">
          <Service title="Skilled Instructors" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" icon={<FaGlobe/>}/>
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.5s">
          <Service title="Skilled Instructors" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" icon={<FaHome/>}/>
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.7s">
          <Service title="Skilled Instructors" description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" icon={<FaBookOpen/>}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
