import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import aboutimage from '../../../../src/assets/images/about.jpg';

const Aboutus = () => {
  return (
<div className="container-xxl py-5">
<Container>
<Row className="" style={{ minHeight: '400px' }}>
      <Col lg={6} className="position-relative h-100 abtimg">
        <img className="img-fluid position-absolute"style={{width:"500px"}} src={aboutimage} alt='photo'/>
      </Col>
      <Col xl={6} className="wow fadeInUp" data-wow-delay="0.3s">
        <h2 className="section-title bg-white text-start text-success px-2 pb-1">About Us</h2>
        <h1 className="mb-4">Welcome to SmartLearn</h1>
        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <Row className="gy-2 gx-4 mb-4">
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />Skilled Instructors</p>
          </Col>
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />Online Classes</p>
          </Col>
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />International Certificate</p>
          </Col>
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />Skilled Instructors</p>
          </Col>
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />Online Classes</p>
          </Col> 
          <Col sm={6}>
            <p className="mb-0"><FaArrowRight className="text-success me-2" />International Certificate</p>
          </Col>
        </Row>
      </Col>
    </Row>
</Container>
</div>
  );
};

export default Aboutus;
