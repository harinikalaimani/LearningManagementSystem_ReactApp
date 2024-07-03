import React from "react";
import {Row, Container} from 'react-bootstrap';
import Dashboarddetails from "../../Components/StudentsComponents/Dashboarddetails";
export default function Dashboardwelcome(props){
    return(
            <div className="Welcome">
                <Container>
                <Row>
                    <div className="col-12 heh">
                        <h5>Hello <span>{props.username}!</span></h5>
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <p>{props.welcomenote1}
                        <br></br>{props.welcomenote2}</p>
                    </div>
                </Row>
                <Row>
                    <div className="col d-flex flex-wrap">
                        <Dashboarddetails number= "18" course="Course Enrolled"/>
                        <Dashboarddetails number= "18" course="Course completed"/>
                        <Dashboarddetails number= "18" course="Course Expired"/>
                        <Dashboarddetails number= "18" course="Course progress"/>
                    </div>
                </Row>
                </Container>
            </div>
    );
}