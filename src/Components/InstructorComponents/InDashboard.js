import React from "react";
import Dashboardwelcome from "../../../src/Components/StudentsComponents/Dashboardwelcome";
import Page_heading from "../../../src/Components/StudentsComponents/Page-heading";
import Page_subheading from "../../../src/Components/StudentsComponents/Page-subheading";
import {Row, Container} from 'react-bootstrap';
import InCourseCard from "./CourseCardInn";
function InDashboard() {
  return (
        <Row className="mrg-left">
            <Page_heading pageheading="Dashboard" />
            <Container className="ms-start">
            <Dashboardwelcome
              username="Instructor"
              welcomenote1="Welcome to our online learning platform! We're excited to have you here and help you achieve your goals."
              welcomenote2="Good Luck with your learning."
            />
            </Container>
           <div className="racourse mt-4">
              <Page_subheading pagesubheading="Recently Accessed Courses" />
            </div>
            <div className="mt-4">
          <InCourseCard/>
        </div> 
      </Row>
  );
}

export default InDashboard;