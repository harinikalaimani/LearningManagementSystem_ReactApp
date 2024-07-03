import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function InstructorProfile() {
  return (
    <Container>
      <Row className="d-flex">
        <div className="mt-3">
          <h4>Navin Reddy</h4>
          <p>Developer and Content Creator</p>
          <div className="d-flex m-2" style={{ color: '#348172' }}>
            <FaTwitter style={{ fontSize: '25px' }} />
            <FaInstagram style={{ fontSize: '25px' }} />
            <FaLinkedin style={{ fontSize: '25px' }} />
            <FaEnvelope style={{ fontSize: '25px' }} />
          </div>
          <br />
        </div   >
      </Row>
      <p>
        Mr. Vijay Kumar is a highly skilled Android and Web Developer with over 7 years of experience in the ever-evolving world of technology. With a strong passion for coding and a deep understanding of programming languages, he has successfully delivered numerous projects, showcasing his expertise in building robust and user-friendly applications.
      </p>
      <br />
      <p>
        Driven by a continuous desire to stay ahead of the curve, Mr. Kumar consistently keeps himself updated with the latest industry trends and best practices. His ability to adapt to new technologies seamlessly and his commitment to delivering exceptional results make him a sought-after developer in the field. Whether it's crafting intuitive user interfaces, optimizing app performance, or solving complex coding challenges, Mr. Vijay Kumar brings his expertise and passion to every project he undertakes. With a strong track record of success and a deep understanding of the coding landscape, he is a valuable asset to any development team.
      </p>
    </Container>
  );
}

export default InstructorProfile;
