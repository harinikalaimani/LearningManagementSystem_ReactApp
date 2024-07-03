import React from "react";
import Page_heading from "../../../src/Components/StudentsComponents/Page-heading";
import Page_subheading from "../../../src/Components/StudentsComponents/Page-subheading";
import AdDashboardReport from "../../../src/Components/AdminComponents/AdDashboardReport";
import AdDashboardwelcome from  '../../../src/Components/AdminComponents/AdDashboardWelcome';
import {Row,Container} from 'react-bootstrap';
function AdDashboard() {
  return (
      <Row className="mrg-left">
        <Page_heading pageheading="Dashboard" />
        <container className="ms-start">
          <AdDashboardwelcome       
            username="Admin"
            welcomenote1="Welcome to our online learning platform!"
            welcomenote2=""
          />
        </container>
        <div className="racourse mt-4">
          <Page_subheading pagesubheading="Overall Report" />
        </div>
        <div>
           <AdDashboardReport/>
        </div> 
      </Row>
  );
}

export default AdDashboard;