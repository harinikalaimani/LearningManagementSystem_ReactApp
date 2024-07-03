import React from "react";
import StCourseCard from "../../../src/Components/StudentsComponents/CourseCardn"
import Dashboardwelcome from "../../Components/StudentsComponents/Dashboardwelcome";
import Page_heading from "../../Components/StudentsComponents/Page-heading";
import Page_subheading from "../../Components/StudentsComponents/Page-subheading";
import {Row,Container} from 'react-bootstrap';
function Stdashboard() {
  return (
      <Row className="mrg-left">
        <Page_heading pageheading="Dashboard" />
        <Container className="ms-start">
          <Dashboardwelcome
            username="Harini"
            welcomenote1="Welcome to our online learning platform! We're excited to have you here and help you achieve your goals."
            welcomenote2="Good Luck with your learning."
          />
        </Container>
        <div className="racourse mt-4">
          <Page_subheading pagesubheading="Recently Accessed Courses" />
        </div>
        <div className="mt-4">
             <StCourseCard/>   
        </div>
      </Row>
  );
}

export default Stdashboard;